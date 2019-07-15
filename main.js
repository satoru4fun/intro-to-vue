var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './vmSocks-green-onWhite.jpg',
        altText: 'A pair of socks',
        inStock: 'true',
        onSale: 'true',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: './vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        removeFromCart: function() {
            this.cart -= 1
        },
        updateProduct: function(variantImage) {
            this.image = variantImage
        }
    }
})