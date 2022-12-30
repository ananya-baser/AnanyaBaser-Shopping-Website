import { readFromLS, saveToLS } from './utils'
export const store = {
    state () {
        return {
            products: [
                // additional field: category
                // to be added: gender, rating, color
                {   
                    id: 1,
                    image: 'images/best-deals-dress.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Dress',
                    additionalText: 'UNDER Rs. 1299',
                    color: 'orange, pink, peach, red'
                },
                {   
                    id: 2,
                    image: 'images/best-deals-jeans.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Jeans',
                    additionalText: 'UNDER Rs. 1499',
                    color: 'blue, black, dark blue, light blue'
                },
                {   
                    id: 3,
                    image: 'images/best-deals-kurta.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Kurtas',
                    additionalText: 'UNDER Rs. 1099',
                    color: 'black, dark'
                },
                {   
                    id: 4,
                    image: 'images/best-deals-purse.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Purse',
                    additionalText: 'UNDER Rs. 1999',
                    color: 'blue, dark blue'
                },
                {   
                    id: 5,
                    image: 'images/best-deals-tshirt.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'T-shirt',
                    additionalText: 'UNDER Rs. 799',
                    color: 'red, dark red'
                },
                {   
                    id: 6,
                    image: 'images/best-deals-watch.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Watch',
                    additionalText: 'UNDER Rs. 2999',
                    color: 'gold, golden, yellow'
                },
                {   
                    id: 7,
                    image: 'images/best-deals-shoes.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Shoes',
                    additionalText: 'UNDER Rs. 1599',
                    color: 'red, white'
                },
                {   
                    id: 8,
                    image: 'images/best-deals-hoodies.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Hoodies',
                    additionalText: 'UNDER Rs. 1099',
                    color: 'blue, dark blue, prussian blue, light blue'
                },
                {   
                    id: 9,
                    image: 'images/best-deals-formals.jpg',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    typeOfProduct: 'Formals',
                    additionalText: 'UNDER Rs. 3299',
                    color: 'brown, black, dark'
                },
                {   
                    id: 10,
                    image: 'images/men-best-deals-1.jpg',
                    typeOfProduct: 'T-Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1299',
                    color: 'black, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 11,
                    image: 'images/men-best-deals-2.jpg',
                    typeOfProduct: 'Polo',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1499',
                    color: 'blue, dark blue'
                },
                {   
                    id: 12,
                    image: 'images/men-best-deals-3.jpg',
                    typeOfProduct: 'Casual Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1099',
                    color: 'silver, dark gray, dark grey'
                },
                {   
                    id: 13,
                    image: 'images/men-best-deals-4.jpg',
                    typeOfProduct: 'Casual Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1999',
                    color: 'black, grey, gray'
                },
                {   
                    id: 14,
                    image: 'images/men-best-deals-5.jpg',
                    typeOfProduct: 'Watch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 2799',
                    color: 'black, golden, gold'
                },
                {   
                    id: 15,
                    image: 'images/men-best-deals-6.jpg',
                    typeOfProduct: 'Khaki Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 799',
                    color: 'green, light green'
                },
                {   
                    id: 16,
                    image: 'images/men-best-deals-7.jpg',
                    typeOfProduct: 'Partywear',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1799',
                    color: 'red, maroon'
                },
                {   
                    id: 17,
                    image: 'images/men-best-deals-8.jpg',
                    typeOfProduct: 'Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1599',
                    color: 'silver, grey, gray'
                },
                {   
                    id: 18,
                    image: 'images/men-best-deals-9.jpg',
                    typeOfProduct: 'Jeans',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1799',
                    color: 'blue'
                },
                {   
                    id: 19,
                    image: 'images/men-best-deals-10.jpg',
                    typeOfProduct: 'Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1999',
                    color: 'blue'
                },
                {   
                    id: 20,
                    image: 'images/women-best-deals-1.jpg',
                    typeOfProduct: 'Top',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1299',
                    color: 'white'
                },
                {   
                    id: 21,
                    image: 'images/women-best-deals-2.jpg',
                    typeOfProduct: 'Casual Top',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1499',
                    color: 'blue, green, yellow'
                },
                {   
                    id: 22,
                    image: 'images/women-best-deals-3.jpg',
                    typeOfProduct: 'Dress',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1099',
                    color: 'pink, peach'
                },
                {   
                    id: 23,
                    image: 'images/women-best-deals-4.jpg',
                    typeOfProduct: 'Jeans',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 1999',
                    color: 'blue'
                },
                {   
                    id: 24,
                    image: 'images/women-best-deals-5.jpg',
                    typeOfProduct: 'Bellbottoms',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 2799',
                    color: 'blue'
                },
                {   
                    id: 25,
                    image: 'images/women-best-deals-6.jpg',
                    typeOfProduct: 'Kurta',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UNDER Rs. 2299',
                    color: 'red'
                },
                {   
                    id: 26,
                    image: 'images/women-best-deals-7.jpg',
                    typeOfProduct: 'Party Kurtas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'UPTO 50% OFF',
                    color: 'black'
                },
                {   
                    id: 27,
                    image: 'images/women-best-deals-8.jpg',
                    typeOfProduct: 'Trendy Fashion',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    price: 1000,
                    additionalText: 'BUY 1 GET 1 FREE!',
                    color: 'blue, red, maroon'
                },
                {   
                    id: 28,
                    image: 'images/jacket.jpg',
                    typeOfProduct: 'Jacket',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3000,
                    color: 'ochre, brown, light brown'
                },
                {   
                    id: 29,
                    image: 'images/watch.jpg',
                    typeOfProduct: 'Watch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5000,
                    color: 'golden, gold, yellow'
                },
                {   
                    id: 30,
                    image: 'images/shoes.jpg',
                    typeOfProduct: 'Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 6500,
                    color: 'grey, gray'
                },
                {   
                    id: 31,
                    image: 'images/trousers.jpg',
                    typeOfProduct: 'Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2000,
                    color: 'blue, light blue, dark blue'
                },
                {   
                    id: 32,
                    image: 'images/bracelet.jpg',
                    typeOfProduct: 'Bracelet',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 7000,
                    color: 'golden, gold, yellow'
                },  
                {   
                    id: 33,
                    image: 'images/clutch.jpg',
                    typeOfProduct: 'Clutch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2000,
                    color: 'black, grey, dark grey, gray, dark gray, golden, yellow, gold'
                },
                {   
                    id: 34,
                    image: 'images/goggle.jpg',
                    typeOfProduct: 'Goggle',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 200,
                    color: 'black, dark'
                },
                {   
                    id: 35,
                    image: 'images/pendant.jpg',
                    typeOfProduct: 'Pendant',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 9000,
                    color: 'golden, gold, yellow, red'
                },
                {   
                    id: 36,
                    image: 'images/men-top-picks-1.jpg',
                    typeOfProduct: 'Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'blue, light blue'
                },
                {   
                    id: 37,
                    image: 'images/men-top-picks-2.jpg',
                    typeOfProduct: 'Jeans',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'blue'
                },
                {   
                    id: 38,
                    image: 'images/men-top-picks-3.jpg',
                    typeOfProduct: 'Formal Wear',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3999,
                    color: 'grey, gray'
                },
                {   
                    id: 39,
                    image: 'images/men-top-picks-4.jpg',
                    typeOfProduct: 'Jacket',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3599,
                    color: 'brown, ochre yellow, yellow'
                },
                {   
                    id: 40,
                    image: 'images/men-top-picks-5.jpg',
                    typeOfProduct: 'Watch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'blue, golden, gold'
                },
                {   
                    id: 41,
                    image: 'images/men-top-picks-6.jpg',
                    typeOfProduct: 'Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'blue, light blue'
                },
                {   
                    id: 42,
                    image: 'images/men-top-picks-7.jpg',
                    typeOfProduct: 'Jacket',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'ochre, grey, gray, light brown'
                },
                {   
                    id: 43,
                    image: 'images/men-top-picks-8.jpg',
                    typeOfProduct: 'Casual Wear',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'blue, black'
                },
                {   
                    id: 44,
                    image: 'images/men-top-picks-9.jpg',
                    typeOfProduct: 'Black Denims',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'black'
                },
                {   
                    id: 45,
                    image: 'images/men-top-picks-10.jpg',
                    typeOfProduct: 'Jeans',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'blue'
                },
                {   
                    id: 46,
                    image: 'images/women-top-picks-1.jpg',
                    typeOfProduct: 'Top',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'grey, red'
                },
                {   
                    id: 47,
                    image: 'images/women-top-picks-2.jpg',
                    typeOfProduct: 'Casuals',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black'
                },
                {   
                    id: 48,
                    image: 'images/women-top-picks-3.jpg',
                    typeOfProduct: 'Dress',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2999,
                    color: 'peach, pink'
                },
                {   
                    id: 49,
                    image: 'images/women-top-picks-4.jpg',
                    typeOfProduct: 'Formal Dress',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3599,
                    color: 'white, black'
                },
                {   
                    id: 50,
                    image: 'images/women-top-picks-5.jpg',
                    typeOfProduct: 'Jeans',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1599,
                    color: 'blue'
                },
                {   
                    id: 51,
                    image: 'images/women-top-picks-6.jpg',
                    typeOfProduct: 'Plain Kurta',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2299,
                    color: 'blue'
                },
                {   
                    id: 52,
                    image: 'images/women-top-picks-7.jpg',
                    typeOfProduct: 'Party Set',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'white'
                },
                {   
                    id: 53,
                    image: 'images/men_belt1.jpeg',
                    typeOfProduct: 'men Belts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 599,
                    color: 'black, brown, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 54,
                    image: 'images/men_belt2.jpeg',
                    typeOfProduct: 'men Belts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 599,
                    color: 'black, brown, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 55,
                    image: 'images/men_belt3.jpeg',
                    typeOfProduct: 'men Belts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 599,
                    color: 'black, brown, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 56,
                    image: 'images/men_belt4.jpeg',
                    typeOfProduct: 'men Belts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 599,
                    color: 'black, brown, golden, gold, yellow, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 57,
                    image: 'images/men_belt5.jpeg',
                    typeOfProduct: 'men Belts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 599,
                    color: 'black, brown, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 58,
                    image: 'images/men_fshoes1.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'black, dark'
                },
                {   
                    id: 59,
                    image: 'images/men_fshoes2.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'blue, dark blue'
                },
                {   
                    id: 60,
                    image: 'images/men_fshoes3.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'black, dark'
                },
                {   
                    id: 61,
                    image: 'images/men_fshoes4.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'brown, black brown, black-brown, dark brown'
                },
                {   
                    id: 62,
                    image: 'images/men_fshoes5.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'black, dark'
                },
                {   
                    id: 63,
                    image: 'images/men_fshoes6.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'brown, light brown, dark brown, peach'
                },
                {   
                    id: 64,
                    image: 'images/men_fshoes7.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'brown, black brown, black-brown, dark brown'
                },
                {   
                    id: 65,
                    image: 'images/men_fshoes8.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'black, dark'
                },
                {   
                    id: 66,
                    image: 'images/men_fshoes9.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'brown, light brown, dark brown, peach'
                },
                {   
                    id: 67,
                    image: 'images/men_fshoes10.jpeg',
                    typeOfProduct: 'men Formal Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5499,
                    color: 'brown, light brown, dark brown, peach'
                },
                {   
                    id: 68,
                    image: 'images/men_jeans1.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, light blue'
                },
                {   
                    id: 69,
                    image: 'images/men_jeans2.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'grey, gray, dark grey, dark gray'
                },
                {   
                    id: 70,
                    image: 'images/men_jeans3.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, dark blue, black blue, black-blue'
                },
                {   
                    id: 71,
                    image: 'images/men_jeans4.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, dark blue, black blue, black-blue'
                },
                {   
                    id: 72,
                    image: 'images/men_jeans5.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, dark blue, black blue, black-blue'
                },
                {   
                    id: 73,
                    image: 'images/men_jeans6.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, light blue'
                },
                {   
                    id: 74,
                    image: 'images/men_jeans7.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'black, dark grey, dark gray, grey, gray'
                },
                {   
                    id: 75,
                    image: 'images/men_jeans8.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, light blue, white blue, white'
                },
                {   
                    id: 76,
                    image: 'images/men_jeans9.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, dark blue, black blue, black-blue'
                },
                {   
                    id: 77,
                    image: 'images/men_jeans10.jpeg',
                    typeOfProduct: 'men Jeans, Denim',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1799,
                    color: 'blue, dark blue, black blue, black-blue, black, dark grey, dark gray, grey, gray'
                },
                {   
                    id: 78,
                    image: 'images/men_shirt1.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'red, dark red, crimson, crimson red, rose red'
                },
                {   
                    id: 79,
                    image: 'images/men_shirt2.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'blue, light blue, sky blue'
                },
                {   
                    id: 80,
                    image: 'images/men_shirt3.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'black, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 81,
                    image: 'images/men_shirt4.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'blue, light blue, sky blue, cyan'
                },
                {   
                    id: 82,
                    image: 'images/men_shirt5.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'green, dark green, prussian green'
                },
                {   
                    id: 83,
                    image: 'images/men_shirt6.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'grey, gray'
                },
                {   
                    id: 84,
                    image: 'images/men_shirt7.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'blue, dark blue, indigo'
                },
                {   
                    id: 85,
                    image: 'images/men_shirt8.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'red, dark red, crimson, crimson red, rose red'
                },
                {   
                    id: 86,
                    image: 'images/men_shirt9.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'green, light green'
                },
                {   
                    id: 87,
                    image: 'images/men_shirt10.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'white'
                },
                {   
                    id: 88,
                    image: 'images/men_shirt11.jpeg',
                    typeOfProduct: 'men Formal Shirt',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2099,
                    color: 'blue, light blue, sky blue, grey blue, gray blue'
                },
                {   
                    id: 89,
                    image: 'images/men_shoes1.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'blue, grey, gray'
                },
                {   
                    id: 90,
                    image: 'images/men_shoes2.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'blue, dark blue, indigo'
                },
                {   
                    id: 91,
                    image: 'images/men_shoes3.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'white, light grey, light gray'
                },
                {   
                    id: 92,
                    image: 'images/men_shoes4.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'black, dark gray, dark grey'
                },
                {   
                    id: 93,
                    image: 'images/men_shoes5.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'cream, grey, gray, dark grey, dark gray'
                },
                {   
                    id: 94,
                    image: 'images/men_shoes6.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'white, red'
                },
                {   
                    id: 95,
                    image: 'images/men_shoes7.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'black, grey, gray'
                },
                {   
                    id: 96,
                    image: 'images/men_shoes8.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'white'
                },
                {   
                    id: 97,
                    image: 'images/men_shoes9.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'black'
                },
                {   
                    id: 98,
                    image: 'images/men_shoes10.jpeg',
                    typeOfProduct: 'men Sports Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1499,
                    color: 'white, cream'
                },
                {   
                    id: 99,
                    image: 'images/men_slippers1.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black'
                },
                {   
                    id: 100,
                    image: 'images/men_slippers2.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black'
                },
                {   
                    id: 101,
                    image: 'images/men_slippers3.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black, gray, grey'
                },
                {   
                    id: 102,
                    image: 'images/men_slippers4.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'gray, grey'
                },
                {   
                    id: 103,
                    image: 'images/men_slippers5.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black, gray, grey'
                },
                {   
                    id: 104,
                    image: 'images/men_slippers6.jpeg',
                    typeOfProduct: 'men Flip flops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 899,
                    color: 'black, white'
                },
                {   
                    id: 105,
                    image: 'images/men_trousers1.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'black'
                },
                {   
                    id: 106,
                    image: 'images/men_trousers2.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'dark blue, indigo'
                },
                {   
                    id: 107,
                    image: 'images/men_trousers3.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'white, light gray, light grey'
                },
                {   
                    id: 108,
                    image: 'images/men_trousers4.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'dark gray, dark grey'
                },
                {   
                    id: 109,
                    image: 'images/men_trousers5.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'black'
                },
                {   
                    id: 110,
                    image: 'images/men_trousers6.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'light grey, light gray'
                },
                {   
                    id: 111,
                    image: 'images/men_trousers7.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'light grey, light gray'
                },
                {   
                    id: 112,
                    image: 'images/men_trousers8.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'black'
                },
                {   
                    id: 113,
                    image: 'images/men_trousers9.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'cream, white'
                },
                {   
                    id: 114,
                    image: 'images/men_trousers10.jpeg',
                    typeOfProduct: 'men Formal Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1699,
                    color: 'white'
                },
                {   
                    id: 115,
                    image: 'images/men_tshirt1.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'indigo, dark blue, blue'
                },
                {   
                    id: 116,
                    image: 'images/men_tshirt2.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'prussian green, green'
                },
                {   
                    id: 117,
                    image: 'images/men_tshirt3.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'yellow, golden, gold, ochre yellow, ochre'
                },
                {   
                    id: 118,
                    image: 'images/men_tshirt4.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'dark green, green, tree green'
                },
                {   
                    id: 119,
                    image: 'images/men_tshirt5.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'red, orange'
                },
                {   
                    id: 120,
                    image: 'images/men_tshirt6.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'white'
                },
                {   
                    id: 121,
                    image: 'images/men_tshirt7.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'red'
                },
                {   
                    id: 122,
                    image: 'images/men_tshirt8.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'green, white'
                },
                {   
                    id: 123,
                    image: 'images/men_tshirt9.jpeg',
                    typeOfProduct: 'men T shirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1299,
                    color: 'white'
                },
                {   
                    id: 124,
                    image: 'images/men_watches1.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'green, olive green'
                },
                {   
                    id: 125,
                    image: 'images/men_watches2.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'blue, silver'
                },
                {   
                    id: 126,
                    image: 'images/men_watches3.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'blue, silver'
                },
                {   
                    id: 127,
                    image: 'images/men_watches4.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'silver, blue, brown'
                },
                {   
                    id: 128,
                    image: 'images/men_watches5.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'blue, silver'
                },
                {   
                    id: 129,
                    image: 'images/men_watches6.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'silver, blue, brown'
                },
                {   
                    id: 130,
                    image: 'images/men_watches7.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'silver, blue'
                },
                {   
                    id: 131,
                    image: 'images/men_watches8.jpeg',
                    typeOfProduct: 'men Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2599,
                    color: 'silver, brown'
                },
                {   
                    id: 132,
                    image: 'images/women_dress1.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'golden, gold'
                },
                {   
                    id: 133,
                    image: 'images/women_dress2.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'black'
                },
                {   
                    id: 134,
                    image: 'images/women_dress3.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'pink, light pink'
                },
                {   
                    id: 135,
                    image: 'images/women_dress4.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'black, dark gray, dark grey'
                },
                {   
                    id: 136,
                    image: 'images/women_dress5.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'pink, peach, light pink'
                },
                {   
                    id: 137,
                    image: 'images/women_dress6.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'green, light green'
                },
                {   
                    id: 138,
                    image: 'images/women_dress7.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'black'
                },
                {   
                    id: 139,
                    image: 'images/women_dress8.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'red, maroon'
                },
                {   
                    id: 140,
                    image: 'images/women_dress9.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'cream, black'
                },
                {   
                    id: 141,
                    image: 'images/women_dress10.jpeg',
                    typeOfProduct: 'women Dresses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1899,
                    color: 'pink, light pink, peach'
                },
                {   
                    id: 142,
                    image: 'images/women_earrings1.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold'
                },
                {   
                    id: 143,
                    image: 'images/women_earrings2.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 144,
                    image: 'images/women_earrings3.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, pink'
                },
                {   
                    id: 145,
                    image: 'images/women_earrings4.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold'
                },
                {   
                    id: 146,
                    image: 'images/women_earrings5.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'silver'
                },
                {   
                    id: 147,
                    image: 'images/women_earrings6.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold'
                },
                {   
                    id: 148,
                    image: 'images/women_earrings7.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 149,
                    image: 'images/women_earrings8.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 150,
                    image: 'images/women_earrings9.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 151,
                    image: 'images/women_earrings10.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 152,
                    image: 'images/women_earrings11.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 153,
                    image: 'images/women_earrings12.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold'
                },
                {   
                    id: 154,
                    image: 'images/women_earrings13.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold, silver'
                },
                {   
                    id: 155,
                    image: 'images/women_earrings14.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'golden, gold'
                },
                {   
                    id: 156,
                    image: 'images/women_earrings15.jpeg',
                    typeOfProduct: 'women Earrings',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3099,
                    color: 'silver'
                },
                {   
                    id: 157,
                    image: 'images/women_heels1.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black'
                },
                {   
                    id: 158,
                    image: 'images/women_heels2.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'ochre yellow, ochre, yellow'
                },
                {   
                    id: 159,
                    image: 'images/women_heels3.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink, dark pink'
                },
                {   
                    id: 160,
                    image: 'images/women_heels4.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'cream, white'
                },
                {   
                    id: 161,
                    image: 'images/women_heels5.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black, brown'
                },
                {   
                    id: 162,
                    image: 'images/women_heels6.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black'
                },
                {   
                    id: 163,
                    image: 'images/women_heels7.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'yellow'
                },
                {   
                    id: 164,
                    image: 'images/women_heels8.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black, brown'
                },
                {   
                    id: 165,
                    image: 'images/women_heels9.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'green'
                },
                {   
                    id: 166,
                    image: 'images/women_heels10.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black'
                },
                {   
                    id: 167,
                    image: 'images/women_heels11.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black'
                },
                {   
                    id: 168,
                    image: 'images/women_heels12.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink'
                },
                {   
                    id: 169,
                    image: 'images/women_heels13.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'yellow, cream'
                },
                {   
                    id: 170,
                    image: 'images/women_heels14.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'red, brown, maroon, crimson'
                },
                {   
                    id: 171,
                    image: 'images/women_heels15.jpeg',
                    typeOfProduct: 'women Heels',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black'
                },
                {   
                    id: 172,
                    image: 'images/women_kurti1.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'red, maroon'
                },
                {   
                    id: 173,
                    image: 'images/women_kurti2.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'yellow'
                },
                {   
                    id: 174,
                    image: 'images/women_kurti3.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'blue'
                },
                {   
                    id: 175,
                    image: 'images/women_kurti4.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'green'
                },
                {   
                    id: 176,
                    image: 'images/women_kurti5.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'blue'
                },
                {   
                    id: 177,
                    image: 'images/women_kurti6.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'red, orange'
                },
                {   
                    id: 178,
                    image: 'images/women_kurti7.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'black'
                },
                {   
                    id: 179,
                    image: 'images/women_kurti8.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'blue'
                },
                {   
                    id: 180,
                    image: 'images/women_kurti9.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'green'
                },
                {   
                    id: 181,
                    image: 'images/women_kurti10.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'black'
                },
                {   
                    id: 182,
                    image: 'images/women_kurti11.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'black'
                },
                {   
                    id: 183,
                    image: 'images/women_kurti12.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'yellow'
                },
                {   
                    id: 184,
                    image: 'images/women_kurti13.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'black, grey, gray'
                },
                {   
                    id: 185,
                    image: 'images/women_kurti14.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'black'
                },
                {   
                    id: 186,
                    image: 'images/women_kurti15.jpeg',
                    typeOfProduct: 'women Kurtis',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1199,
                    color: 'white'
                },
                {   
                    id: 187,
                    image: 'images/women_lehenga1.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'white, blue, golden, cream'
                },
                {   
                    id: 188,
                    image: 'images/women_lehenga2.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'black, golden'
                },
                {   
                    id: 189,
                    image: 'images/women_lehenga3.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'white, pink, cream'
                },
                {   
                    id: 190,
                    image: 'images/women_lehenga4.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'pink, cream'
                },
                {   
                    id: 191,
                    image: 'images/women_lehenga5.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'blue'
                },
                {   
                    id: 192,
                    image: 'images/women_lehenga6.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'pink, golden, gold'
                },
                {   
                    id: 193,
                    image: 'images/women_lehenga7.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'cream, white, pink, peach'
                },
                {   
                    id: 194,
                    image: 'images/women_lehenga8.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'golden, gold'
                },
                {   
                    id: 195,
                    image: 'images/women_lehenga9.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'green, gold, golden'
                },
                {   
                    id: 196,
                    image: 'images/women_lehenga10.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'blue, light blue'
                },
                {   
                    id: 197,
                    image: 'images/women_lehenga11.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'red, maroon, crimson'
                },
                {   
                    id: 198,
                    image: 'images/women_lehenga12.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'green, yellow'
                },
                {   
                    id: 199,
                    image: 'images/women_lehenga13.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'yellow, ochre yellow, ochre'
                },
                {   
                    id: 200,
                    image: 'images/women_lehenga14.jpeg',
                    typeOfProduct: 'women Lehengas',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 999,
                    color: 'yellow, lemon yellow'
                },
                {   
                    id: 201,
                    image: 'images/women_purse1.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'blue, dark blue'
                },
                {   
                    id: 202,
                    image: 'images/women_purse2.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'black'
                },
                {   
                    id: 203,
                    image: 'images/women_purse3.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'green'
                },
                {   
                    id: 204,
                    image: 'images/women_purse4.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'black, white'
                },
                {   
                    id: 205,
                    image: 'images/women_purse5.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'pink'
                },
                {   
                    id: 206,
                    image: 'images/women_purse6.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'brown'
                },
                {   
                    id: 207,
                    image: 'images/women_purse7.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'cream'
                },
                {   
                    id: 208,
                    image: 'images/women_purse8.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'black'
                },
                {   
                    id: 209,
                    image: 'images/women_purse9.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'grey, gray'
                },
                {   
                    id: 210,
                    image: 'images/women_purse10.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'black'
                },
                {   
                    id: 211,
                    image: 'images/women_purse11.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'grey'
                },
                {   
                    id: 212,
                    image: 'images/women_purse12.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'black'
                },
                {   
                    id: 213,
                    image: 'images/women_purse13.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'cream'
                },
                {   
                    id: 214,
                    image: 'images/women_purse14.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'red, maroon'
                },
                {   
                    id: 215,
                    image: 'images/women_purse15.jpeg',
                    typeOfProduct: 'women Purses',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1999,
                    color: 'pink'
                },
                {   
                    id: 216,
                    image: 'images/women_sarees1.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'black, blue'
                },
                {   
                    id: 217,
                    image: 'images/women_sarees2.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'blue, golden, gold'
                },
                {   
                    id: 218,
                    image: 'images/women_sarees3.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'black, yellow'
                },
                {   
                    id: 219,
                    image: 'images/women_sarees4.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'blue'
                },
                {   
                    id: 220,
                    image: 'images/women_sarees5.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'red, golden, gold'
                },
                {   
                    id: 221,
                    image: 'images/women_sarees6.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'silver, pink'
                },
                {   
                    id: 222,
                    image: 'images/women_sarees7.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'pink, dark blue'
                },
                {   
                    id: 223,
                    image: 'images/women_sarees8.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'green, blue'
                },
                {   
                    id: 224,
                    image: 'images/women_sarees9.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'blue, green'
                },
                {   
                    id: 225,
                    image: 'images/women_sarees10.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'green'
                },
                {   
                    id: 226,
                    image: 'images/women_sarees11.jpeg',
                    typeOfProduct: 'women Sarees Sari',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4099,
                    color: 'blue, white'
                },
                {   
                    id: 227,
                    image: 'images/women_shoes1.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'grey, gray'
                },
                {   
                    id: 228,
                    image: 'images/women_shoes2.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink'
                },
                {   
                    id: 229,
                    image: 'images/women_shoes3.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink, grey, gray'
                },
                {   
                    id: 230,
                    image: 'images/women_shoes4.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'black, pink'
                },
                {   
                    id: 231,
                    image: 'images/women_shoes5.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'white, cream'
                },
                {   
                    id: 232,
                    image: 'images/women_shoes6.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'cream ,pink'
                },
                {   
                    id: 233,
                    image: 'images/women_shoes7.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink'
                },
                {   
                    id: 234,
                    image: 'images/women_shoes8.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink'
                },
                {   
                    id: 235,
                    image: 'images/women_shoes9.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'blue'
                },
                {   
                    id: 236,
                    image: 'images/women_shoes10.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'white, cream'
                },
                {   
                    id: 237,
                    image: 'images/women_shoes11.jpeg',
                    typeOfProduct: 'women Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2199,
                    color: 'pink'
                },
                {   
                    id: 238,
                    image: 'images/women_skirts1.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'pink'
                },
                {   
                    id: 239,
                    image: 'images/women_skirts2.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'blue'
                },
                {   
                    id: 240,
                    image: 'images/women_skirts3.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'brown, light brown'
                },
                {   
                    id: 241,
                    image: 'images/women_skirts4.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'red'
                },
                {   
                    id: 242,
                    image: 'images/women_skirts5.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'orange'
                },
                {   
                    id: 243,
                    image: 'images/women_skirts6.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'peach'
                },
                {   
                    id: 244,
                    image: 'images/women_skirts7.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'blue'
                },
                {   
                    id: 245,
                    image: 'images/women_skirts8.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'green'
                },
                {   
                    id: 246,
                    image: 'images/women_skirts9.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'blue'
                },
                {   
                    id: 247,
                    image: 'images/women_skirts10.jpeg',
                    typeOfProduct: 'women Skirts',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 799,
                    color: 'black'
                },
                {   
                    id: 248,
                    image: 'images/women_tops1.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'green'
                },
                {   
                    id: 249,
                    image: 'images/women_tops2.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'red'
                },
                {   
                    id: 250,
                    image: 'images/women_tops3.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'green'
                },
                {   
                    id: 251,
                    image: 'images/women_tops4.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'white'
                },
                {   
                    id: 252,
                    image: 'images/women_tops5.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'pink'
                },
                {   
                    id: 253,
                    image: 'images/women_tops6.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'green'
                },
                {   
                    id: 254,
                    image: 'images/women_tops7.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'blue'
                },
                {   
                    id: 255,
                    image: 'images/women_tops8.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'red'
                },
                {   
                    id: 256,
                    image: 'images/women_tops9.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'white'
                },
                {   
                    id: 257,
                    image: 'images/women_tops10.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'black'
                },
                {   
                    id: 258,
                    image: 'images/women_tops11.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'blue'
                },
                {   
                    id: 259,
                    image: 'images/women_tops12.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'white'
                },
                {   
                    id: 260,
                    image: 'images/women_tops13.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'blue'
                },
                {   
                    id: 261,
                    image: 'images/women_tops14.jpeg',
                    typeOfProduct: 'women Tops',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 1099,
                    color: 'brown, dark brown, black'
                },
                {   
                    id: 262,
                    image: 'images/women_watch1.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'pink'
                },
                {   
                    id: 263,
                    image: 'images/women_watch2.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 264,
                    image: 'images/women_watch3.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 265,
                    image: 'images/women_watch4.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 266,
                    image: 'images/women_watch5.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 267,
                    image: 'images/women_watch6.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'brown'
                },
                {   
                    id: 268,
                    image: 'images/women_watch7.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 269,
                    image: 'images/women_watch8.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 270,
                    image: 'images/women_watch9.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'blue'
                },
                {   
                    id: 271,
                    image: 'images/women_watch10.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 272,
                    image: 'images/women_watch11.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 273,
                    image: 'images/women_watch12.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'silver'
                },
                {   
                    id: 274,
                    image: 'images/women_watch13.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                {   
                    id: 275,
                    image: 'images/women_watch14.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold, black'
                },
                {   
                    id: 276,
                    image: 'images/women_watch15.jpeg',
                    typeOfProduct: 'women Watches',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 4599,
                    color: 'golden, gold'
                },
                
            ],
            itemsInCart: {},
            itemsInCartCount: 0,
            user: {},
            searchQuery: '',
            product: {},
            reviews: [
                {
                    id: 0,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 1,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 2,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 3,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 4,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 5,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 6,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 7,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 8,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 9,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 10,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 11,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 12,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 13,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 14,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 15,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 16,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 17,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 18,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 19,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 20,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 21,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 22,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 23,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 24,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 25,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 26,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 27,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 28,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 29,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 30,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 31,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 32,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 33,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 34,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 35,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 36,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 37,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 38,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 39,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 40,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 41,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 42,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 43,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 44,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 45,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 46,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 47,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 48,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 49,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 50,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 51,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 52,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 53,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 54,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 55,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 56,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 57,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 58,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 59,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 60,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 61,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 62,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 63,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 64,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 65,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 66,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 67,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 68,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 69,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 70,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 71,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 72,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 73,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 74,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 75,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 76,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 77,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 78,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 79,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 80,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 81,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 82,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 83,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 84,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 85,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 86,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 87,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 88,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 89,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 90,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 91,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 92,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 93,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 94,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 95,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 96,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 97,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 98,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 99,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 100,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 101,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 102,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 103,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 104,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 105,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 106,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 107,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 108,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 109,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 110,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 111,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 112,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 113,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 114,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 115,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 116,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 117,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 118,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 119,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 120,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 121,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 122,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 123,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 124,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 125,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 126,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 127,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 128,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 129,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 130,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 131,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 132,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 133,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 134,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 135,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 136,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 137,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 138,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 139,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 140,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 141,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 142,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 143,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 144,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 145,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 146,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 147,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 148,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 149,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 150,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 151,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 152,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 153,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 154,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 155,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 156,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 157,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 158,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 159,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 160,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 161,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 162,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 163,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 164,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 165,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 166,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 167,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 168,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 169,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 170,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 171,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 172,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 173,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 174,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 175,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 176,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 177,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 178,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 179,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 180,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 181,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 182,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 183,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 184,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 185,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 186,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 187,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 188,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 189,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 190,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 191,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 192,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 193,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 194,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 195,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 196,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 197,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 198,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 199,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 200,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 201,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 202,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 203,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 204,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 205,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 206,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 207,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 208,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 209,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 210,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 211,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 212,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 213,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 214,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 215,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 216,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 217,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 218,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 219,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 220,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 221,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 222,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 223,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 224,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 225,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 226,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 227,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 228,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 229,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 230,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 231,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 232,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 233,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 234,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 235,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 236,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 237,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 238,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 239,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 240,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 241,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 242,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 243,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 244,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 245,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 246,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 247,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 248,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 249,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 250,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 251,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 252,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 253,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 254,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 255,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 256,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 257,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 258,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 259,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 260,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 261,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 262,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 263,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 264,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 265,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 266,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 267,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 268,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 269,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 270,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 271,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 272,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 273,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 274,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 275,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                {
                    id: 276,
                    reviews: [
                        {
                            name: 'John',
                            review: 'Test',
                            rating: 5
                        }
                    ]
                },
                
            ],
            homeProducts : [
                {   
                    id: 28,
                    image: 'images/jacket.jpg',
                    typeOfProduct: 'Jacket',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 3000
                },
                {   
                    id: 29,
                    image: 'images/watch.jpg',
                    typeOfProduct: 'Watch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 5000
                },
                {   
                    id: 30,
                    image: 'images/shoes.jpg',
                    typeOfProduct: 'Shoes',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 6500
                },
                {   
                    id: 31,
                    image: 'images/trousers.jpg',
                    typeOfProduct: 'Trousers',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2000
                },
                {   
                    id: 32,
                    image: 'images/bracelet.jpg',
                    typeOfProduct: 'Bracelet',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 7000
                },  
                {   
                    id: 33,
                    image: 'images/clutch.jpg',
                    typeOfProduct: 'Clutch',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 2000
                },
                {   
                    id: 34,
                    image: 'images/goggle.jpg',
                    typeOfProduct: 'Goggle',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 200
                },
                {   
                    id: 35,
                    image: 'images/pendant.jpg',
                    typeOfProduct: 'Pendant',
                    title: 'Product',
                    description: 'Lorem ipsum dolor',
                    additionalText: 'UNDER Rs. 799',
                    price: 9000
                },
            ]
            
        }
    },
  getters: {
    getProducts: (state) => () => {
        return state.products;
    },
    getProductsByCategoryAndType: (state) => (category, type) => {
      return state.products.filter((p) => p.category === category && p.type === type)
    },
    getProductsByCategory: (state) => (category) =>  {
      return state.products.filter((p) => p.category === category)
    },
    getProductById: (state) => (id) => {
      return state.products.filter((p) => p.id == id)[0]
    },
    getProductByName: (state) => (name) => {
        return state.products.filter((p) => p.name == name)[0]
    },
    getItemsInCart: (state) => () => {
      return state.itemsInCart
    },
    getItemsInCartCount: (state) => () => {
      return state.itemsInCartCount
    },
    getUser: (state) => () => {
      return state.user
    },
    getSearchQuery: (state) => () => {
        return state.searchQuery
    },
    getDetails(state) {
        return state.product
    },
    getReviews(state) {
        return state.reviews
    },
    getHomeProducts(state) {
        return state.homeProducts
    }
  },
  mutations: {
    setItemsInCart (state, data) {
      state.itemsInCart = {...data}
    },
    setItemsInCartCount (state, count) {
      state.itemsInCartCount = count
    },
    setUser (state, user) {
      state.user = user
    },
    setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery;
    },
    setProductDetails(state, product) {
        state.product = {...product};
    },
    addReviewToList(state, review) {
        state.reviews[review.id].reviews.push(review.review)
    },
    setHomeProducts(state, homeProducts) {
        state.homeProducts=homeProducts
    }
  },
  actions: {
    updateItemsInCart ({commit}, {item, op}) {
      const items = JSON.parse(readFromLS('cart') || '{}')
      let itemsCount = parseInt(readFromLS('cartCount') || 0)
      if (op === 1) {
        if (items[item.id]) {
          items[item.id].count++;
        } else {
          items[item.id] = item
          items[item.id].count = 1
        }
        itemsCount++
      } else if (op === -1) {
        if (items[item.id]) {
          items[item.id].count--;
        }
        if (items[item.id].count === 0) {
          delete items[item.id]
        }
        itemsCount--
      }
      saveToLS('cart', JSON.stringify(items))
      saveToLS('cartCount', itemsCount)
      commit('setItemsInCart', items)
      commit('setItemsInCartCount', itemsCount)
    },
    updateUser ({commit}, user) {
      saveToLS('user', JSON.stringify(user))
      commit('setUser', user)
    },
    intialiseStoreFromLS ({commit}) {
      const itemsInCart = JSON.parse(readFromLS('cart') || '{}')
      const itemsCount = parseInt(readFromLS('cartCount') || 0)
      const user = JSON.parse(readFromLS('user') || '{}')
      commit('setItemsInCart', itemsInCart)
      commit('setItemsInCartCount', parseInt(itemsCount))
      commit('setUser', user)
    }
  }
}