const products = [
    { id: "1", name: "Cerveza Rubia", price: 300, category: "Cervezas", image: "../public/images/cerveza-rubia.jpg"},
    { id: "2", name: "Cerveza Roja", price: 350, category: "Cervezas", image: "../public/images/cerveza-roja.jpg" },
    { id: "3", name: "Cerveza Negra", price: 400, category: "Cervezas", image: "../public/images/cerveza-negra.jpg" },
    { id: "4", name: "Chopp", price: 500, category: "Accesorios", image: "../public/images/chop.jpg" },
    { id: "5", name: "Copa", price: 550, category: "Accesorios", image: "../public/images/copa.jpg" },
    { id: "6", name: "Vaso", price: 600, category: "Accesorios", image: "../public/images/vaso.jpg" },
    { id: "7", name: "Ipa", price: 600, category: "Especiales", image: "../public/images/cerveza-ipa.jpg" },
    { id: "8", name: "Apa", price: 600, category: "Especiales", image: "../public/images/cerveza-apa.jpg" },
    { id: "9", name: "Honey", price: 600, category: "Especiales", image: "../public/images/cerveza-honey.jpg" },

];
// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id)

            if (product) {
                resolve(product)
            } else {
                reject('No existe el producto')
            }

        }, 1000)
    })
};

// getProducts
export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const productsFiltered = category ? products.filter((products) => products.category === category) : products;

            resolve(productsFiltered)
        }, 1000)
    })
};
