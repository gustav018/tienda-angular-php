<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$bd = include_once "bd.php";
$sentencia = $bd->query("SELECT id, nombre AS name, imagen FROM categorias");
$categorias = $sentencia->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($categorias, JSON_PRETTY_PRINT);
