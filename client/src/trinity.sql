-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2023 at 09:13 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `trinity`  
--

-- --------------------------------------------------------



--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `price` int(30) NOT NULL,
  `images` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

        INSERT INTO `product` (`id`, `name`, `brand`, `price`, `images`, `description`) VALUES
        (11, 'adadadad', 'hello', 564, '', 'adaadad'),
        (12, 'welcome', 'adadadad', 5156, '', 'hello'),
        (13, 'dadadad', 'hello', 262265, '', 'dadadad'),
        (14, 'jggggggggggg', 'fsfsf', 564, '', 'fsfsf');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `fname`, `lname`, `email`, `password`) VALUES

(10, 'aswanth', 'adadad', 'aswanth@gmail.com', '123456'),
(11, 'adadadad', 'adadad', 'ash@gmail.com', '123456'),
(15, 'aromal', 'hi', 'aromal@gmail.com', '123456'),
(16, 'hello', 'adadad', 'hello@gmail.com', '123456'),
(17, 'test', 'ing', 'testing@gmail.com', '123456'),
(19, 'adadadad', '', 'aromal@gmail.com', 'sasasasas'),
(28, 'adadadad', 'adadad', 'hello@gmail.com', '098'),
(29, 'adadadad', 'adadad', 'aswanth@gmail.com', 'adadad'),
(30, 'aromal', 'adadad', 'ssss@gmail.com', 'dadadad'),
(37, 'dadadada', 'adadada', 'ssss@gmail.com', '1234567890'),
(38, 'dadad', 'adadad', 'aswanth@gmail.com', 'dadadad'),
(40, 'hello', 'jhjjjjjjhk', 'hello@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
      
