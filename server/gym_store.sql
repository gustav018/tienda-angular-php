-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2024 a las 02:00:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gym_store`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `imagen`) VALUES
(1, 'Hombre', 'https://img.freepik.com/fotos-premium/foto-guapo-musculoso-ropa-deportiva-saltando-aire-ejercicio-gimnasio_360066-5800.jpg'),
(2, 'Mujer', 'https://ysabelmora.com/cdn/shop/files/70838-1-sujetador-deportivo-apertura-espalda-mujer-ysabel-mora-fucsia_800x.jpg?v=1710492756');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `imagen`, `categoria_id`) VALUES
(1, 'Camiseta de manga corta para hombre', 'Camiseta de alta calidad, ideal para el entrenamiento en el gimnasio.', 19.99, 'https://cdn.shopify.com/s/files/1/1367/5201/files/LegacyT-Shirt-GSBlack-A5A3B-BB2J-0328_78f8c7e3-41d4-4c8c-a6ed-25901b7bd581_384x.jpg?v=1714392806', 1),
(2, 'Leggings de compresión para mujer', 'Leggings transpirables y elásticos, perfectos para cualquier tipo de ejercicio.', 29.99, 'https://cdn.shopify.com/s/files/1/1367/5201/files/EVERYDAYSEAMLESSLEGGINGSNavyB7A3L-UB9P-2482_384x.jpg?v=1714127919', 2),
(3, 'Sudadera con capucha para hombre', 'Sudadera cómoda y ligera, ideal para entrenamientos al aire libre.', 39.99, 'https://cdn.shopify.com/s/files/1/1367/5201/files/EssentialOversizedZipUpHoodieGSBlackA5A9T-BB2J-1385_384x.jpg?v=1696606422', 1),
(4, 'Top deportivo para mujer', 'Top ajustado y transpirable, diseñado para brindar soporte durante actividades de alta intensidad.', 24.99, 'https://cdn.shopify.com/s/files/1/1367/5201/files/WrapSportsBraGSPlumBrownB9A1A-NBZN-0041_7e7f0b16-c0dc-48a3-8e10-a45db2ad20af_1664x.jpg?v=1713881433', 2),
(5, 'Pantalones cortos para hombre', 'Pantalones cortos ligeros y de secado rápido, perfectos para correr o entrenar en el gimnasio.', 22.99, 'https://cdn.shopify.com/s/files/1/1367/5201/products/CrestShort_Slim_LightGreyCoreMarlA2A1S-GBCN.B_ZH_ZH_e541efb6-2fe2-4041-a2d3-d912d19cc4bc_384x.jpg?v=1662989967', 1),
(6, 'Sujetador deportivo de alto impacto para mujer', 'Sujetador deportivo con soporte adicional y tirantes ajustables, ideal para deportes de alto impacto.', 34.99, 'https://cdn.shopify.com/s/files/1/1367/5201/files/CutOutBandeauGSMutedOrangeB8A9D-OBP0-0344_82fc8c74-4fa4-46ab-a82e-4788e6f8657c_1664x.jpg?v=1713881436', 2),
(7, 'Remera Mangas Cortas New Balance', 'Mujer Accelerate Negro', 50.00, 'https://optimapy.vtexassets.com/arquivos/ids/170724-800-1067?v=638316164737500000&width=800&height=1067&aspect=true', 2),
(8, 'Remera New Balance Hombre', 'Q Speed Jacquard Negro', 55.00, 'https://optimapy.vtexassets.com/arquivos/ids/189318-800-1067?v=638399690103000000&width=800&height=1067&aspect=true', 1),
(9, 'Chaleco Davor', 'Chaleco de alta calidad', 45.00, 'https://pyunicentroprod.vtexassets.com/arquivos/ids/415712-800-auto?v=638223718470670000&width=800&height=auto&aspect=true', 1),
(10, 'Camisilla Elastika Standard Fit Tank Nike', 'Camisilla cómoda y ajustable', 40.00, 'https://pyunicentroprod.vtexassets.com/arquivos/ids/645075-800-auto?v=638344380771700000&width=800&height=auto&aspect=true', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
