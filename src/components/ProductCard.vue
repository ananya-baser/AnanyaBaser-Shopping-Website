<template>
    <div class="card text-center" :style="{'background-image':`url(${productImage})`, 'background-size':'200px'}" @click="goToDetails(productDetails)">
        <!-- <div class="card-img" > -->
            <!-- <img :src="productDetails.image" class="card-img-top" alt=""> -->
        
            <div class="card-body">
                <h5 class="card-title">{{ productDetails.title }}</h5>
                <p class="card-text">Rs. {{ productDetails.price }}</p>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import products from "@/../public/home-products";
//import menProducts from "../assets/fixtures/productDetails/men/men-products.js";
//import womenProducts from "../assets/fixtures/productDetails/women/women-products.js"
import { mapMutations } from 'vuex';
    export default{
        name: 'ProductCard',
        props: {
            productDetails: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                productImage: this.productDetails.image
            }
        },
        methods: {
            ...mapMutations(['setProductDetails']),
            goToDetails(product) {
            //     try {
            //     window.clevertap.addMultiValueForKey("last_product_viewed",JSON.stringify(product))
            //    }
            //    catch(e){
            //     window.clevertap.setMultiValuesForKey('last_product_viewed',[JSON.stringify(product)])
            //    } 
                window.clevertap.setMultiValuesForKey('last_product_viewed',[JSON.stringify(product)])
                window.clevertap.event.push("Product Viewed",  {
                    "topic": "Product Viewed",
                    "last_product_viewed": this.product
                });
                this.$router.push({name: 'details', params: {id:product.id}, query: {id:product.id}})
            }
        }
    }
</script>

<style scoped>
    .card {
        border: none;
        box-shadow: 2px 3px #dcdcdc;
        /* background-image: productDetails.image; */
        height: 250px;
        width: 200px;
        margin: 20px;
        position: relative;
        transition: all 0s ease-in-out;
    }

    .card-body {
        height:30%;

        /* opacity: 0.9; */
        /* background-image: url('@/../public/images/light-cyan-background.jpg'); */
        
        /* justify-content: center; */
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px;
        opacity: 1;
        background: white;
        opacity: 0.75;
    }

    .card-title,
    .card-text {
        color: #008b8b;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .card:hover   {
        transform: scale(1.02);
        opacity:0.9;
    }
</style>
