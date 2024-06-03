export interface Pedido {
    idPedido: number;
    fecha:    Date;
    total:    number;
    detalles: Detalleorder[];
}

export interface Detalleorder {
    idDetallepedido: number;
    productos:       Productos;
    pedido?:         Pedido;
    cantidad:        number;
    precioUnitario:  number;
    subtotal:        number;
}

export interface Productos {
    idProducto:  number;
    nombre:      string;
    descripcion: string;
    imagen:      string;
    stock:       number;
    precio:      number;
}
