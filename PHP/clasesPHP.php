<?php


class Producto
{
    var $nombre;
    var $unidadDeMedida;
    var $precio;
    var $especificacionesTecnicas;
    var $marca;
    var $fechaVencimiento;

    public function __construct($nombre, $unidadDeMedida, $precio, $especificacionesTecnicas, $marca, $fechaVencimiento)
    {
        $this->nombre = $nombre;
        $this->unidadDeMedida = $unidadDeMedida;
        $this->precio = $precio;
        $this->especificacionesTecnicas = $especificacionesTecnicas;
        $this->marca = $marca;
        $this->fechaVencimiento = $fechaVencimiento;
    }

}

class Factura
{
    var $nombreCliente;
    var $cedula;
    var $total;
    var $numeroFactura;
    var $productos;
}

class DetalleFactura
{
    var $nombreProducto;
    var $unidadMedida;
    var $cantidad;
    var $precioUnitario;
    var $total;
}
