CREATE DATABASE  IF NOT EXISTS `ones` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ones`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: ones
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book_dt`
--

DROP TABLE IF EXISTS `book_dt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_dt` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `book_title` varchar(70) NOT NULL,
  `semester` int NOT NULL,
  `course_id` int NOT NULL,
  PRIMARY KEY (`bid`),
  KEY `course_id_idx` (`course_id`),
  CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `course_dt` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKpo43qqrcop5fjed19dm5xxgxc` FOREIGN KEY (`course_id`) REFERENCES `course_dt` (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_dt`
--

LOCK TABLES `book_dt` WRITE;
/*!40000 ALTER TABLE `book_dt` DISABLE KEYS */;
INSERT INTO `book_dt` VALUES (1,'Discrete Mathematics',3,2),(2,'Fundamentals of Data Structures',3,2),(3,'Object Oriented Programming',3,2),(4,'Computer Graphics',3,2),(5,'Digital Electronics and Logic Design',3,2),(6,'Engineering Mathematics III',4,2),(7,'Data Structures and Algorithms',4,2),(8,'Software Engineering',4,2),(9,'Microprocessor',4,2),(10,'Principles of Programming Languages',4,2),(11,'Data Science and Big Data Analytics',6,2),(12,'Web Technology',6,2),(13,'Software Engineering',6,2),(14,'Artificial Intelligence',6,2),(15,'Information Security',6,2),(16,'Database Management Systems',5,2),(17,'Theory of Computation',5,2),(18,'Systems Programming and Operating System',5,2),(19,'Computer Networks and Security',5,2),(20,'Internet of Things and Embedded Systems',5,2),(21,'High Performance Computing',7,2),(22,'Artificial Intelligence and Robotics',7,2),(23,'Data Analytics',7,2),(24,'Digital Signal Processing ',7,2),(25,'Distributed Systems',7,2),(26,'Advanced Digital Signal Processing',8,2),(27,'Software Defined Networks',8,2),(28,'Compilers ',8,2),(29,'Information and Cyber Security',8,2),(30,'Machine Learning',8,2),(31,'Engineering Mathematics-I',1,2),(32,'Engineering Physics ',1,2),(33,'Engineering Chemistry',1,2),(34,'Basic Electronics Engineering',1,2),(35,'Programming and Problem Solving',1,2),(36,'Engineering Mathematics III',3,4),(37,'Electronic Circuits',3,4),(38,'Digital Circuits',3,4),(39,'Electrical Circuits',3,4),(40,'Data structures',3,4),(41,'Signals & Systems',4,4),(42,'Control Systems',4,4),(43,'Principles of Communication Systems',4,4),(44,'Object Oriented Programming',4,4),(45,'Digital Communication',5,4),(46,'Electromagnetic Field Theory ',5,4),(47,'Microcontrollers',5,4),(48,'Digital Signal Processing',5,4),(49,'Electronic Measurements',5,4),(50,'Fundamentals of JAVA Programming',5,4),(51,'Cellular Networks',6,4),(52,'Power Devices & Circuits',6,4),(53,'Digital Image Processing',6,4),(54,'Sensors in Automation',6,4),(55,'Project Management ',6,4),(56,'VLSI Design & Technology',7,4),(57,'Radiation & Microwave Techniques',7,4),(58,'Digital Image and Video Processing',7,4),(59,'Industrial Drives and Control',7,4),(60,'Optimization Techniques',7,4),(61,'Mobile Communication',8,4),(62,'Broadband Communication Systems',8,4),(63,'Machine Learning',8,4),(64,'Audio and Speech Processing',8,4),(65,'Robotics',8,4),(66,'Wireless Sensor Networks',8,4),(67,'Cloud Computing',6,2);
/*!40000 ALTER TABLE `book_dt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_pub_dt`
--

DROP TABLE IF EXISTS `book_pub_dt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_pub_dt` (
  `book_pub_id` int NOT NULL AUTO_INCREMENT,
  `bid` int NOT NULL,
  `pub_id` int NOT NULL,
  PRIMARY KEY (`book_pub_id`),
  KEY `bid_idx` (`bid`),
  KEY `pub_id_idx` (`pub_id`),
  CONSTRAINT `bid` FOREIGN KEY (`bid`) REFERENCES `book_dt` (`bid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK7gw66xs30w2y6gvu2f9ch8nq6` FOREIGN KEY (`pub_id`) REFERENCES `publisher_dt` (`pub_id`),
  CONSTRAINT `FKnwoikt5axyoh78ix1dlo5dexu` FOREIGN KEY (`bid`) REFERENCES `book_dt` (`bid`),
  CONSTRAINT `pub_id` FOREIGN KEY (`pub_id`) REFERENCES `publisher_dt` (`pub_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_pub_dt`
--

LOCK TABLES `book_pub_dt` WRITE;
/*!40000 ALTER TABLE `book_pub_dt` DISABLE KEYS */;
INSERT INTO `book_pub_dt` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,1),(5,2,3),(6,2,4),(7,3,1),(8,3,2),(9,3,3),(10,4,1),(11,4,2),(12,4,3),(13,5,1),(14,5,2),(15,5,3),(16,6,1),(17,6,2),(18,6,3),(19,7,1),(20,7,2),(21,7,3),(22,8,1),(23,8,2),(24,8,3),(25,9,1),(26,9,2),(27,9,3),(28,10,1),(29,10,2),(30,10,3),(31,11,1),(32,11,2),(33,11,3),(34,12,1),(35,12,2),(36,12,3),(37,13,1),(38,13,2),(39,13,3),(40,14,1),(41,14,2),(42,14,3),(43,15,1),(44,15,2),(45,16,1),(46,16,2),(47,16,3),(48,17,2),(49,17,3),(50,18,1),(51,18,3),(52,19,1),(53,19,3),(54,20,2),(55,21,2),(56,22,2),(57,22,3),(58,23,1),(59,23,2),(60,24,1),(61,24,3),(62,25,3),(63,25,2),(64,26,2),(65,26,3),(66,27,1),(67,28,2),(68,28,3),(69,29,2),(70,29,2),(71,30,1),(72,30,3),(73,31,1),(74,31,2),(75,32,3),(76,33,2),(77,34,1),(78,35,2),(79,35,1),(80,36,1),(81,36,3),(82,37,1),(83,37,3),(84,38,2),(85,38,3),(86,39,2),(87,39,1),(88,40,3),(89,41,2),(90,42,1),(91,42,2),(92,43,3),(93,43,1),(94,44,2),(95,45,1),(96,45,3),(97,46,3),(98,46,2),(99,47,2),(100,48,3),(101,48,2),(102,49,1),(103,49,2),(104,49,3),(105,50,1),(106,50,3),(107,51,2),(108,51,3),(109,52,1),(110,52,3),(111,53,1),(112,53,2),(113,54,3),(114,55,1),(115,67,3),(116,67,1);
/*!40000 ALTER TABLE `book_pub_dt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (26,7);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_info`
--

DROP TABLE IF EXISTS `cart_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_info` (
  `srno` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `pubid` int DEFAULT NULL,
  `book_type` varchar(3) DEFAULT NULL,
  `pub_year` varchar(4) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `cart_id` int DEFAULT NULL,
  PRIMARY KEY (`srno`),
  KEY `cart_id_idx` (`cart_id`),
  KEY `book_id_idx` (`book_id`),
  KEY `pub_id_idx` (`pubid`),
  CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `book_dt` (`bid`),
  CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
  CONSTRAINT `FK421n2nfp942atvdglioiip9s9` FOREIGN KEY (`book_id`) REFERENCES `book_dt` (`bid`),
  CONSTRAINT `FK4kd6daop45kt6wjpvp5nydyma` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`cart_id`),
  CONSTRAINT `FKcqrsfpy8orvx2pg78lttbq8un` FOREIGN KEY (`pubid`) REFERENCES `publisher_dt` (`pub_id`),
  CONSTRAINT `pubid` FOREIGN KEY (`pubid`) REFERENCES `publisher_dt` (`pub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_info`
--

LOCK TABLES `cart_info` WRITE;
/*!40000 ALTER TABLE `cart_info` DISABLE KEYS */;
INSERT INTO `cart_info` VALUES (42,3,1,'New','2020',385.00,2,26);
/*!40000 ALTER TABLE `cart_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course_dt`
--

DROP TABLE IF EXISTS `course_dt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course_dt` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(45) NOT NULL,
  `total_sem` int NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course_dt`
--

LOCK TABLES `course_dt` WRITE;
/*!40000 ALTER TABLE `course_dt` DISABLE KEYS */;
INSERT INTO `course_dt` VALUES (1,'BE-Mechanical Engg.',8),(2,'BE-Computer Engg.',8),(3,'BE-Civil Engg.',8),(4,'BE-Electronics and Tele. Communication',8),(5,'ME-Computer Engg',4);
/*!40000 ALTER TABLE `course_dt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cust_sell_req`
--

DROP TABLE IF EXISTS `cust_sell_req`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust_sell_req` (
  `req_id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `request_date` varchar(30) NOT NULL,
  `request_status` varchar(15) NOT NULL DEFAULT 'Request raised',
  `total_selling_price` decimal(10,2) NOT NULL,
  PRIMARY KEY (`req_id`),
  KEY `uid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`uid`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cust_sell_req`
--

LOCK TABLES `cust_sell_req` WRITE;
/*!40000 ALTER TABLE `cust_sell_req` DISABLE KEYS */;
INSERT INTO `cust_sell_req` VALUES (1,3,'10-03-2022','Accepted',120.00),(5,2,'11-03-2022','Request raised',0.00),(6,4,'11-03-2022','Request raised',0.00);
/*!40000 ALTER TABLE `cust_sell_req` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `srno` int NOT NULL AUTO_INCREMENT,
  `b_id` int DEFAULT NULL,
  `p_id` int DEFAULT NULL,
  `b_type` varchar(3) DEFAULT NULL,
  `pb_year` varchar(4) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`srno`),
  KEY `b_id_idx` (`b_id`),
  KEY `p_id_idx` (`p_id`),
  KEY `order_id_idx` (`order_id`),
  CONSTRAINT `b_id` FOREIGN KEY (`b_id`) REFERENCES `book_dt` (`bid`),
  CONSTRAINT `FK67r7jckgmviehjkrrx5633cbu` FOREIGN KEY (`b_id`) REFERENCES `book_dt` (`bid`),
  CONSTRAINT `FKirdso2q3pxx4aha1uli5nlnpq` FOREIGN KEY (`p_id`) REFERENCES `publisher_dt` (`pub_id`),
  CONSTRAINT `FKjyu2qbqt8gnvno9oe9j2s2ldk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`oid`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`oid`),
  CONSTRAINT `p_id` FOREIGN KEY (`p_id`) REFERENCES `publisher_dt` (`pub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (3,1,1,'New','2020',340.00,5,2),(4,2,1,'New','2020',425.00,2,2),(5,1,2,'New','2020',325.00,4,3),(6,3,2,'New','2020',400.00,2,3),(7,2,2,'New','2020',430.00,5,4),(8,3,2,'New','2020',400.00,2,4),(9,1,3,'New','2020',335.00,5,5),(10,2,3,'New','2020',400.00,4,5),(11,3,3,'New','2020',365.00,2,5),(18,1,3,'New','2020',335.00,5,13),(19,2,3,'New','2020',400.00,2,14),(20,2,3,'New','2020',400.00,2,15),(21,4,3,'New','2020',485.00,1,15),(22,1,2,'New','2020',325.00,8,16),(23,1,1,'New','2020',340.00,2,17),(24,2,1,'New','2020',425.00,3,17),(25,4,1,'New','2020',525.00,1,18);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `oid` int NOT NULL AUTO_INCREMENT,
  `u_id` int DEFAULT NULL,
  `order_date` varchar(30) DEFAULT NULL,
  `delivery_date` varchar(10) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `order_status` varchar(15) DEFAULT 'Pending',
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (2,2,'2022-04-12 08:50:52.884','2022-04-15',2550.00,'In Progress'),(3,2,'2022-04-12 17:23:56.215','2022-04-20',2100.00,'In Progress'),(4,2,'2022-04-13 16:00:13.908','2022-04-15',2950.00,'Pending'),(5,3,'2022-04-13 20:39:58.839','2022-04-16',4005.00,'In Progress'),(11,2,'2022-04-14 17:54:24.753','2022-04-17',0.00,'Pending'),(13,2,'2022-04-14 18:02:36.212','2022-04-17',1675.00,'Pending'),(14,2,'2022-04-14 18:09:44.011','2022-04-17',800.00,'Pending'),(15,2,'2022-04-14 18:19:00.062','2022-04-19',1285.00,'Pending'),(16,2,'2022-04-14 19:45:01.044','2022-04-17',2600.00,'Pending'),(17,7,'2022-04-15 10:08:47.889','2022-04-17',1955.00,'In Progress'),(18,7,'2022-04-15 10:11:06.334','2022-04-17',525.00,'Pending');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publisher_dt`
--

DROP TABLE IF EXISTS `publisher_dt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher_dt` (
  `pub_id` int NOT NULL AUTO_INCREMENT,
  `pub_name` varchar(30) NOT NULL,
  PRIMARY KEY (`pub_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher_dt`
--

LOCK TABLES `publisher_dt` WRITE;
/*!40000 ALTER TABLE `publisher_dt` DISABLE KEYS */;
INSERT INTO `publisher_dt` VALUES (1,'Nirali'),(2,'Techmax'),(3,'Technical'),(4,'Tech-Neo');
/*!40000 ALTER TABLE `publisher_dt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_details`
--

DROP TABLE IF EXISTS `request_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_details` (
  `sr_no` int NOT NULL AUTO_INCREMENT,
  `buying_price` float DEFAULT NULL,
  `buying_year` varchar(255) DEFAULT NULL,
  `pub_id` int DEFAULT NULL,
  `publish_year` varchar(255) DEFAULT NULL,
  `selling_price` float DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `bid` int DEFAULT NULL,
  `request_id` int DEFAULT NULL,
  PRIMARY KEY (`sr_no`),
  KEY `FKe8xvkg3a1nc5cnku3qryuujt9` (`bid`),
  KEY `FKi6xcewgwvxvjsvo0jxxocfmws` (`request_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_details`
--

LOCK TABLES `request_details` WRITE;
/*!40000 ALTER TABLE `request_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `request_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `security_ques`
--

DROP TABLE IF EXISTS `security_ques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `security_ques` (
  `qid` int NOT NULL AUTO_INCREMENT,
  `question` varchar(65) NOT NULL,
  PRIMARY KEY (`qid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `security_ques`
--

LOCK TABLES `security_ques` WRITE;
/*!40000 ALTER TABLE `security_ques` DISABLE KEYS */;
INSERT INTO `security_ques` VALUES (1,'what is your school name?');
/*!40000 ALTER TABLE `security_ques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_info`
--

DROP TABLE IF EXISTS `stock_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock_info` (
  `publish_year` varchar(4) NOT NULL,
  `book_type` varchar(3) NOT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `bid` int NOT NULL,
  `pubid` int NOT NULL,
  PRIMARY KEY (`book_type`,`bid`,`pubid`,`publish_year`),
  KEY `book_bid_idx` (`bid`),
  KEY `publisher_pubid_idx` (`pubid`),
  CONSTRAINT `book_bid` FOREIGN KEY (`bid`) REFERENCES `book_dt` (`bid`) ON UPDATE CASCADE,
  CONSTRAINT `publisher_pubid` FOREIGN KEY (`pubid`) REFERENCES `publisher_dt` (`pub_id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_info`
--

LOCK TABLES `stock_info` WRITE;
/*!40000 ALTER TABLE `stock_info` DISABLE KEYS */;
INSERT INTO `stock_info` VALUES ('2020','New',340.00,8,1,1),('2020','New',325.00,20,1,2),('2020','New',335.00,12,1,3),('2020','New',425.00,25,2,1),('2020','New',430.00,30,2,2),('2020','New',400.00,40,2,3),('2020','New',385.00,27,3,1),('2020','New',400.00,35,3,2),('2020','New',365.00,40,3,3),('2020','New',525.00,50,4,1),('2020','New',500.00,45,4,2),('2020','New',485.00,60,4,3),('2020','New',380.00,35,5,1),('2020','New',375.00,45,5,2),('2020','New',395.00,60,5,3),('2015','Old',205.00,8,1,1),('2020','Old',275.00,15,1,1),('2015','Old',180.00,4,1,2),('2020','Old',245.00,20,1,2),('2015','Old',175.00,10,1,3),('2020','Old',250.00,9,1,3),('2015','Old',180.00,4,2,1),('2020','Old',305.00,25,2,1),('2015','Old',160.00,10,2,2),('2020','Old',280.00,35,2,2),('2015','Old',155.00,5,2,3),('2020','Old',265.00,25,2,3),('2015','Old',225.00,5,3,1),('2020','Old',275.00,15,3,1),('2015','Old',210.00,3,3,2),('2020','Old',265.00,12,3,2),('2015','Old',205.00,5,3,3),('2020','Old',285.00,10,3,3),('2015','Old',265.00,12,4,1),('2020','Old',325.00,20,4,1),('2015','Old',250.00,8,4,2),('2020','Old',315.00,15,4,2),('2015','Old',277.00,15,4,3),('2020','Old',300.00,22,4,3),('2015','Old',225.00,12,5,1),('2020','Old',274.00,22,5,1),('2015','Old',195.00,10,5,2),('2020','Old',260.00,18,5,2),('2015','Old',235.00,8,5,3),('2020','Old',288.00,25,5,3);
/*!40000 ALTER TABLE `stock_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `utype` varchar(15) NOT NULL DEFAULT 'customer',
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(16) NOT NULL,
  `qid` int NOT NULL,
  `answer` varchar(35) NOT NULL,
  `contactno` varchar(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`uid`),
  KEY `qid_idx` (`qid`),
  CONSTRAINT `FKmn7ygs2cdkm6y29ovkkg1mp7p` FOREIGN KEY (`qid`) REFERENCES `security_ques` (`qid`),
  CONSTRAINT `qid` FOREIGN KEY (`qid`) REFERENCES `security_ques` (`qid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Shopkeeper','ganesh ','store','ganeshbookstore@gmail.com','Ganesh@store123','Ganesh@123',1,'raman bagh','9021479888','near abc chowk, pune 411003'),(2,'Customer','Pratik','Salunkhe','salunkhepratik5@gmail.com','Pratik@9897','Pratik@1997',1,'SFJV','8856946039','datta nagar, thergaon, chinchwad, pune 411033'),(3,'Customer','Pooja ','Rakshe','poojar@gmail.com','puja@123','Puja@123',1,'sanskar vidaylaya','9503374381','Kranti nager, beed 431122'),(4,'Customer','aditya ','rakshe','aditya@gmail.com','ar@store123','ar@123',1,'raman bagh','9021479888','near abc chowk, pune 411003'),(5,'Customer','aditya ','rakshe','aditya@gmail.com','ar@store123','ar@123',1,'raman bagh','9021479888','near abc chowk, pune 411003'),(6,'Customer','A','B','AN@gmail.com','BB','Bb@123456',1,'DD','1234567893','Pune'),(7,'Customer','Tejas','Salunkhe','tjsal123@gmail.com','Tejsal@123','Tejsal@1995',1,'KCV','9822944672','Chinchwad, Pune- 411033');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-16 10:46:58
