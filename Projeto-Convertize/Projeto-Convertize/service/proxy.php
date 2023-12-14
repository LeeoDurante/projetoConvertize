<?php
header("Content-Type: application/json");

// URL da API
$apiUrl = "https://demo.convertize.com.br/api/1.0/public/search/";

// Faz a solicitação à API
$apiResponse = file_get_contents($apiUrl);

// Retorna a resposta para o cliente
echo $apiResponse;
?>
