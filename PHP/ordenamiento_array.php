<?php
$array = array(1, 9, 2, 8, 4, 5, 6, 7);
asort($array);

echo "El array ordenado es: ";

foreach ($array as $valor) {
    echo $valor . ' ';
}
echo "\n";

echo "El maximo valor del arreglo es: " . max($array) . "\n";
echo "El minimo valor del arreglo es: " . min($array) . "\n";