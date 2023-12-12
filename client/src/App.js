
import { CommonProvider } from './contexts/common/commonContext';
import { CartProvider } from './contexts/cart/cartContext';
import RouterRoutes from './routes/RouterRoutes';
import Footer from './components/common/Footer';
import BackTop from './components/common/BackTop';
import { FiltersProvider } from './contexts/filters/filtersContext';
import  { CartCountProvider } from './contexts/cart/CartCountContext';


    const App = () => {
  


  return (
    <>
    <CartCountProvider>
    <CommonProvider>

    <FiltersProvider>
    <CartProvider>
            
    <RouterRoutes />
    <Footer />
    <BackTop />
            
    </CartProvider>
    </FiltersProvider>
    </CommonProvider>
    </CartCountProvider>
    </>
  );
};

export default App;

