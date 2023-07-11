const misProductos = [
    { id: "1", nombre: "Tornado 250CC", precio: 5000, stock:10, img:"../public/moto1.jpg", idCat: "2" },
    { id: "2", nombre: "XR 150", precio: 2000, stock:10, img: "../public/Moto2.jpg", idCat: "2" },
    { id: "3", nombre: "CB Twister 250CC", precio: 1800, stock:5, img: "../public/moto3.jpg", idCat: "3" },
    { id: "4", nombre: "CB Twister 300CC", precio: 9000, stock:10, img: "../public/moto4.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}