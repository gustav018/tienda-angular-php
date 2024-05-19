<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$bd = include_once "bd.php";

// Verificar si se proporciona el parámetro de consulta 'category_id'
if (isset($_GET['category_id']) && !empty($_GET['category_id'])) {
    $category_id = $_GET['category_id'];
    $sentencia = $bd->prepare("SELECT
                                productos.id AS id,
                                productos.nombre AS title,
                                productos.precio AS price,
                                productos.descripcion AS description,
                                JSON_ARRAY(productos.imagen) AS images,
                                '12/01/2024' AS creationAt,
                                '23/03/2024' AS updatedAt,
                                categorias.id AS 'category.id',
                                categorias.nombre AS 'category.name'
                            FROM
                                productos
                            INNER JOIN
                                categorias ON productos.categoria_id = categorias.id
                            WHERE
                                categorias.id = ?");
    $sentencia->execute([$category_id]);
    $productos = $sentencia->fetchAll(PDO::FETCH_ASSOC);
} else {
    // Si no se proporciona el parámetro 'category_id', devuelve un mensaje de error
    echo json_encode(array("error" => "No se proporcionó el ID de la categoría."), JSON_PRETTY_PRINT);
    exit(); // Termina la ejecución del script
}

// Convertir la fecha a un formato específico (si es necesario)
foreach ($productos as &$producto) {
    $producto['creationAt'] = date("Y-m-d\TH:i:s.v\Z", strtotime($producto['creationAt']));
    $producto['updatedAt'] = date("Y-m-d\TH:i:s.v\Z", strtotime($producto['updatedAt']));
}

// Devolver la respuesta
echo json_encode(array_map(function ($producto) {
    return array(
        'id' => $producto['id'],
        'title' => $producto['title'],
        'price' => $producto['price'],
        'description' => $producto['description'],
        'images' => json_decode($producto['images'], true),
        'creationAt' => $producto['creationAt'],
        'updatedAt' => $producto['updatedAt'],
        'category' => array(
            'id' => $producto['category.id'],
            'name' => $producto['category.name'],
        ),
    );
}, $productos), JSON_PRETTY_PRINT);
