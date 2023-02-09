-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2023 at 01:00 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `data_bar`
--

-- --------------------------------------------------------

--
-- Table structure for table `bar`
--

CREATE TABLE `bar` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `data` text DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `audience` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `creact_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bar`
--

INSERT INTO `bar` (`id`, `name`, `data`, `detail`, `audience`, `image`, `creact_time`, `update_time`) VALUES
(1, 'Racing', '\n3 จาก 5 ดาว\nบาร์น้องใหม่จากเครือ Greyhound ที่อยากนำเสนอแบรนด์ในมุมใหม่ๆ นอกเหนือจากแฟชั่นและอาหาร และอยากเข้าถึงกลุ่มลูกค้าผู้ชายมากขึ้น สุดท้ายเลยมาลงตัวที่การเปิดบาร์สไตล์ Racing Club บรรยากาศสบายๆ ที่ยังคงมีเรื่องของแฟชั่นซึ่งเป็นจุดเด่นของแบรนด์แทรกอยู่ในการตกแต่งร้านด้วย ส่วนค็อกเทลที่นี่จะเน้นดื่มง่าย', '15 321\nJ Avenue Thonglor (1/F)\nSukhumvit 55 Road\nKhlong Tan Nuea, Watthana\nBangkok\n10110\nข้อมูลติดต่อ\nดูเว็บไซต์: https://www.facebook.com/Racing76Bar\n080 064 3368\nเปิดบริการ\nทุกวัน 17.00 - 00.00 น.', 127, 'https://res.theconcert.com/c_thumb/94e404fec313fcbc41a86aab174a2afdd/05.jpg', '2023-02-09 10:20:13', '2023-02-09 08:57:01'),
(2, 'Fatboy Izakaya', 'ร้านกินดื่มสไตล์อิซากายะ เจ้าเดียวกับ Fatboy Sushi ซูชิร้านดังแถวสีลม ที่นี่มีทั้งค็อกเทลและเครื่องดื่มอื่นๆ รวมถึงอาหารญี่ปุ่นที่เชฟ Arnie Marcella เป็นคนดูแล เหมาะกับการสั่งมาแชร์กันหลายๆ จริงๆ ร้านเปิดให้บริการมาตั้งแต่เดือนธันวาคมปีที่แล้ว แต่กำลังจะ grand opening วันจันทร์ที่จะถึงนี้', '56 2-3\nSoi Ekkamai 2\nKhlong Tan Nuea, Watthana\nBangkok\n10110\nข้อมูลติดต่อ\nhttps://www.facebook.com/fatboysushi\n065 664 1539\nเปิดบริการ\nทุกวัน 17.00 - 00.00 น', 5, 'https://bk.asia-city.com/sites/default/files/u142985/fatboy_izakaya_853x595-7.jpg', '2023-02-09 16:15:28', '2023-02-09 10:08:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bar`
--
ALTER TABLE `bar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bar`
--
ALTER TABLE `bar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
