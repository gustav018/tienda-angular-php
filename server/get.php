<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$bd = include_once "bd.php";

// Asegúrate de validar y/o sanitizar esta variable
$id_producto = $_GET['id'];

$sentencia = $bd->prepare("SELECT
                                productos.id AS id,
                                productos.nombre AS title,
                                productos.precio AS price,
                                productos.descripcion AS description,
                                JSON_ARRAY(productos.imagen) AS images,
                                '12/12/2024' AS creationAt,
                                '23/12/2024' AS updatedAt,
                                categorias.id AS 'category.id',
                                categorias.nombre AS 'category.name'
                            FROM
                                productos
                            INNER JOIN
                                categorias ON productos.categoria_id = categorias.id
                            WHERE
                                productos.id = ?");
$sentencia->execute([$id_producto]);
$producto = $sentencia->fetch(PDO::FETCH_ASSOC);

if ($producto) {
    $producto['creationAt'] = date("Y-m-d\TH:i:s.v\Z", strtotime($producto['creationAt']));
    $producto['updatedAt'] = date("Y-m-d\TH:i:s.v\Z", strtotime($producto['updatedAt']));
    $producto['images'] = json_decode($producto['images'], true);
    $producto['category'] = array(
        'id' => $producto['category.id'],
        'name' => $producto['category.name'],
    );
    echo json_encode($producto, JSON_PRETTY_PRINT);
} else {
    echo json_encode(['error' => 'Producto no encontrado'], JSON_PRETTY_PRINT);
}