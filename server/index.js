const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require('body-parser');
const app = express();
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const con = mysql.createConnection({
  user: "user",
  password: "password",
  host: "localhost",
  database: "trinityash"
  })


// const con = mysql.createConnection({

//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "trinityash",

//   })

    // Registration details

       app.post('/register', (req, res) => {

       console.log("Registration sucessfull")
      const fname = req.body.fname;
      const lname = req.body.lname;
      const email = req.body.email;
      const password= req.body.password;
      const address = req.body.address;
      const post = req.body.post;
      const state = req.body.state;
      const phone = req.body.phone;


        con.query("INSERT INTO register (fname, lname, email, password, address, post, state, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [fname,lname,email,password, address, post,state,phone], 
       (err, result) => {
       if(result){
       res.send(result);
       }else{
       res.send({message: "ENTER CORRECT ASKED DETAILS!"})
       }
       })
       })


      //Email authentication

        app.get('/check-email', (req, res) => {
        console.log('email exist showing sucessfull');
        const email = req.query.email;
        con.query('SELECT * FROM register WHERE email = ?', [email], (err, results) => {
        if (err) {
        return res.send({ exists: false, error: err.message });
        }
        return res.send({ exists: results.length > 0 });
        });
        });

       
       
       // login section 


      app.post("/login", (req, res) => {
      console.log("login successful");
      const email = req.body.email;
      const password = req.body.password;

      con.query(
      "SELECT * FROM register WHERE email = ? AND password = ?",
      [email, password],
      (err, result) => {
      if (err) {
      res.send({ error: "An error occurred while processing your request." });
      } else {
      if (result.length > 0) {
      // User is logged in, send back user details including fname (first name)
      const user = result[0];
      console.log("User details:", user);
      res.send({
         
      UId: user.UId, 
      fname: user.fname,   
      });
      } else {
      res.send({ message: "Wrong email or password!" });
      }
      }
      }
      );
      });


//specific user id fetching 



app.get('/users/:Uid', (req, res) => {
  console.log('profile data is fetching')
  const UId = req.params.Uid;
  const sql = 'SELECT * FROM register WHERE UId = ?';
  con.query(sql, [UId], (err, result) => {
  if (err) {
  console.log(err);
  res.status(500).json({ error: 'Internal server error' });
  } else if (result.length === 0) {
  res.status(404).json({ error: 'User not found' });
  } else {
  res.send(result[0]);
  }
  });
  });

 


        // product fetching 

         app.get("/product", (req, res) => {
         con.query("SELECT * FROM product", (err, result) => {
         if (err) {
         console.log(err);
         } else {
         res.send(result);
         }
         });
         });

// fetching the specific id from backend

              app.get("/product/:id", (req, res) => {
              const id = req.params.id;
              console.log("productfetching")
               con.query("SELECT * FROM product WHERE id = ?", [id], (err, result) => {
              if (err) {
              console.log(err);
               } else {
               if (result.length > 0) {
               res.send(result[0]); // Assuming there is only one product with the given ID
               } else {
                res.status(404).json({ error: "Product not found" });
                } 
                }
                });
                });

       //category section 
  
         app.get("/product/:category", (req, res) => {
         const category = req.params.category;
        console.log("Fetching products by category:", category);
    
    con.query("SELECT * FROM product WHERE category = ?", [category], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (results.length > 0) {
          res.send(results);
        } else {
          res.status(404).json({ error: "No products found in this category" });
        } 
      }
    });
});

//get all users

app.get("/users", (req, res) => {
  console.log("user details")
  con.query("SELECT * FROM register", (err, result) => {
  if (err) {
  console.log(err);
  } else {
  res.send(result);
  }
 });
});



// user id deleteing 

  app.delete("/delete/:UId", (req, res) => {
  console.log("deleted the id sucessfully")
    const UId = req.params.UId;
    con.query("DELETE FROM register WHERE UId = ?", UId, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

// deleting the product id

  app.delete("/del/:id", (req, res) => {
    const id = req.params.id;
    con.query("DELETE FROM product WHERE id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  // //updateing the user id

  app.put('/profile/:UId', (req, res) => {
    console.log("update the user sucessfully",req.body)
    const UId = req.params.UId;
    const { fname, lname, email, password, address, post, state, phone } = req.body;
  
    const query = `UPDATE register SET fname=?, lname=?,  email=?, password=?, address=?, post=?, state=?, phone=? WHERE UId=?`;
    const values = [fname, lname,  email, password, address, post, state, phone, UId];
  
    con.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('User updated successfully');
        res.json({ success: true });
      }
    });
  })

 
 
 
  const multer = require('multer');
  const path = require('path');

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  }
});

// File filter function to accept only specific image file formats
const fileFilter = (req, file, cb) => {
  // Check if the file is an image
  if (
    file.mimetype.startsWith('image/') &&
    /\.(jpg|jpeg|png|gif)$/i.test(file.originalname)
  ) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error('Only JPG, JPEG, PNG, and GIF image files are allowed.'), false); // Reject the file
  }
};

// Create a multer instance with the storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Handle POST request to add a new product
app.post('/product', upload.single('image'), (req, res) => {
  console.log("image upload sucessfull");
  const { name, price, category, description, model_no} = req.body;
  const image = req.file.filename;

  // Insert the new product into the database
  const sql = 'INSERT INTO product (name, price, category, image, description, model_no) VALUES (?, ?, ?, ?, ?, ?)';
  con.query(sql, [name, price, category, image, description, model_no], (err, result) => {
  if (err) {
  console.error('Error adding product: ', err);
  res.status(500).json({ error: 'Failed to add product' });
  return;
  }
  res.json({ message: 'Product added successfully' });
  });
  });


//   product edit section

app.put('/product/:id', upload.single('image'), (req, res) => {
  console.log("product updated sucessfully")
  const id = req.params.id;
  const { name, price, category, description, model_no } = req.body;
  let image = req.body.currentImage;

  // Check if a new image is uploaded
  if (req.file) {
    image = req.file.filename;
} else {
    // If no new image uploaded, retain the old image
    image = req.body.currentImage;
}

  // Update the product in the database
  const sql = 'UPDATE product SET name = ?, price = ?, category = ?, image = ?, description = ?, model_no = ? WHERE id = ?';
  console.log(id)

  con.query(sql, [name, price, category, image, description, model_no, id], (err, result) => {
      if (err) {
          console.error('Error updating product: ', err);
          res.status(500).json({ error: 'Failed to update product' });
          return;
      }

      console.log("Parameters:", [name, price, category, image, description, model_no, id]);

      res.json({ message: 'Product updated successfully' });
      console.log("Product updated");
  });
});




    app.post('/cart/add', (req, res) => {
    console.log('Request Body:', req.body)
    const { id, name, image, price,description, UId, quantity, model_no} = req.body;
   



    const query = 'INSERT INTO cart (id, name, image, price, description, UId, quantity, model_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    con.query(query, [id, name, image, price, description, UId, quantity, model_no], (err, result) => {
    if (err) {
    console.error('Error adding product to cart:', err);
    return res.status(500).json({ error: 'Failed to add product to cart' });
    }
  

    const cartItem = {
    cartid: result.insertId, id, name, image, price, description, UId, quantity, model_no
    };
    res.json({ message: 'Product added to the cart', cartItem });
    });
    });

    app.get('/cart/items', (req, res) => {
   
    const { UId } = req.query;
  
    // Query the cart table to get the cart items for the specified user
    const query = 'SELECT * FROM cart WHERE UId = ?';
    con.query(query, [UId], (err, cartItems) => {
    if (err) {
    console.error('Error fetching cart items:', err);
    return res.status(500).json({ error: 'Failed to fetch cart items' });
    }
    res.json({ cartItems });
    });
    });
  

  app.delete('/cart/items/:cartid', (req, res) => {
    const { cartid } = req.params;
  
    // Query the cart table to check if the cart item exists
    const checkCartItemQuery = 'SELECT * FROM cart WHERE cartid = ?';
    con.query(checkCartItemQuery, [cartid], (err, cartItems) => {
      if (err) {
        console.error('Error fetching cart items:', err);
        return res.status(500).json({ error: 'Failed to fetch cart items' });
      }
  
      if (cartItems.length === 0) {
        return res.status(404).json({ error: 'Cart item not found' });
      }
  
      // If the cart item exists, proceed to delete it from the cart

        const deleteCartItemQuery = 'DELETE FROM cart WHERE cartid = ?';
        con.query(deleteCartItemQuery, [cartid], (err, result) => {
        if (err) {
        console.error('Error deleting cart item:', err);
        return res.status(500).json({ error: 'Failed to delete cart item' });
        }
  
        if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Cart item not found' });
        }
  
        res.json({ success: true, message: 'Cart item deleted successfully' });
      });
    });
  });

  app.put('/cart/update', (req, res) => {
    const { cartid, quantity } = req.body;
  
    // Update the cart item's quantity in the cart table
    const query = 'UPDATE cart SET quantity = ? WHERE cartid = ?';
    con.query(query, [quantity, cartid], (err, result) => {
      if (err) {
      console.error('Error updating cart item quantity:', err);
      return res.status(500).json({ error: 'Failed to update cart item quantity' });
      }
  
      // Check if the cart item was updated successfully
      if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
      }
  
      res.json({ message: 'Cart item quantity updated successfully' });
      });
      });
 

  // search bar in the  home page 

  // app.get('/search/product', (req, res) => {
  //   console.log("searching")
  //   const { searchQuery, category } = req.query;
  //   let sqlQuery = 'SELECT * FROM product WHERE 1=1';
  //   let queryParams = [];
    
  //   if (searchQuery) {
  //   sqlQuery += ' AND name LIKE ?';
  //   queryParams.push(`%${searchQuery}%`);
  //   }
    
  //   if (category) {
  //   sqlQuery += ' AND category = ?';
  //   queryParams.push(category);
  //   }
    
  //   con.query(sqlQuery, queryParams, (err, result) => {
  //   if (err) {
  //   console.log(err);
  //   res.status(500).json({ error: 'Internal server error' });
  //   } else {
  //   res.send(result);
  //   }
  //   });
  //   });


          app.get('/search/product', (req, res) => { 
          console.log("searching1");
          const { category } = req.query;
          const query = `SELECT * FROM product WHERE category LIKE '%${category}%'`;
          con.query(query, (err, results) => {
          if (err) {
          throw err;
          }
          res.json(results);
          });
          });


         //filter bar

      app.get('/filter', (req, res) => {
      console.log("filter")
      con.query("SELECT DISTINCT category FROM product", (err, results) => {
      if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
      } else {
      if (results.length > 0) {
      const categories = results.map(result => result.category);
      res.send(categories);
      } else {
      res.status(404).json({ error: "No categories found" });
      }
      }  
      });
      });
  

      app.get('/categories', (req, res) => {
      console.log("get categories")
      const categories = // fetch categories from the database
      res.json(categories);
      }); 
       


       // Order 
    
        app.post('/order', (req, res) => {
        const { Uid, fname, phonenumber, address, productname, quantity, price, description, model_no , image, Request} = req.body;
    
        const sql = 'INSERT INTO order_details (Uid, fname, phonenumber, address, productname, quantity, price, description, model_no, image, Request) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        con.query(sql, [Uid, fname, phonenumber, address, productname, quantity, price, description, model_no, image, Request], (err, result) => {
        if (err) {
        console.error('Error executing query: ', err);
        return res.status(500).send('Error executing query');
        }
        console.log('Data inserted successfully');
        return res.status(200).send('Data inserted successfully');
        });
        });

    // get orders 

    
        app.get('/orders', (req, res) => {
        const sql = 'SELECT * FROM order_details';
        console.log("fetched order details")
        con.query(sql, (err, result) => {
        if (err) {
        console.error('Error executing query: ', err);
        return res.status(500).send('Error executing query');
        }
        if (result.length === 0) {
        return res.status(404).send('No orders found');
        }
        return res.status(200).json(result);
        });
        });

    // Order delete *IMPORTANT* 

    app.delete("/orders/:Oid", (req, res) => {
    console.log("order deleted sucessfully")
    const Oid = req.params.Oid;
    con.query("DELETE FROM order_details WHERE Oid = ?", Oid, (err, result) => {
    if (err) {
    console.log(err);
    } else {
    res.send(result);
    }
    });
    });
  
    // order cancel

    app.put('/order/:Oid', (req, res) => {
    console.log("order cancelled")
    const orderId = req.params.Oid;
    const { Request } = req.body;
    console.log('Request:', Request, 'OrderId:', orderId); 
    const sql = 'UPDATE order_details SET Request = ? WHERE Oid = ?';
    con.query(sql, [Request, orderId], (err, result) => {
    if (err) {
    console.error('Error updating order details: ', err);
    return res.status(500).json({ error: 'Failed to update order details' });
    }
    console.log('Order details updated successfully');
    res.json({ message: 'Order details updated successfully' });
    });
    });

           // order getting by individual user
    
    app.get('/order-details', (req, res) => {
    const { Uid } = req.query;
    console.log("user order is placed")
    const sql = 'SELECT * FROM order_details WHERE Uid = ?';
    con.query(sql, [Uid], (err, result) => {
    if (err) {
    console.error('Error executing query: ', err);
    return res.status(500).send('Error executing query');
    }
    if (result.length === 0) {
    return res.status(404).send('No order details found for the user ID');
    } 
    return res.status(200).json(result);
    });
    });
    

    //  

      app.get('/usersorder/:Uid', (req, res) => {
      const UId = req.params.Uid;
      const sql = 'SELECT UId, fname, phone, address FROM register WHERE UId = ?';
      con.query(sql, [UId], (err, result) => {
      if (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
      } else if (result.length === 0) {
      res.status(404).json({ error: 'User not found' });
      } else {
      const userData = { 

      Uid: result[0].UId,
      name: result[0].fname,
      phone_number: result[0].phone,
      address: result[0].address
      };
      console.log(userData); 
      res.send(userData);
      }
      });
      });

      // suscribe

      app.post('/newsletter', (req, res) => {
      console.log("Suscribe sucessfull")
      const name = req.body.name;
      const email = req.body.email;
      const post = req.body.post;
              
      con.query("INSERT INTO newsletter (name,  email, post) VALUES (?, ?, ?)", [name,email,post],
      (err, result) => {
      if(result){
      res.send(result);
      }else{
      res.send({message: "ENTER CORRECT  ASKED DETAILS!"})
      }
      })
      })  
      
     
      // const __dirname1 = path.resolve();
      // app.use(express.static(path.join(__dirname1, './build')));
      // app.get('*', (req, res) =>
      // res.sendFile(path.resolve(__dirname1, 'build', 'index.html'))
      // );


      // const staticPath = path.join(__dirname, 'build');
      // app.use(express.static(staticPath));
      // app.get('*', (req, res) => {
      // const indexPath = path.resolve(staticPath, 'index.html');
      // res.sendFile(indexPath);
      // });

      
      app.listen(3001, () => {
      console.log("running backend server");
      })



// .htaccess -> build
  
//       Options -MultiViews
//       RewriteEngine On
//       RewriteCond %{REQUEST_FILENAME} !-f
//       RewriteRule ^ index.html [QSA,L]