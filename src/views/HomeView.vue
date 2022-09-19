<template>
    <div class="home">
        <CarouselTemplate></CarouselTemplate>
        <h3 class="top-picks-caption">TOP PICKS FOR YOU!</h3>
        <div class="scrolling-wrapper">
            <ProductCard class="card" id="product-cards" v-for="(product,index) in products" :key="index" :productDetails="product" @click="goToDetails(product)"></ProductCard>
        </div>
            

        <h3 class="best-deals">BEST DEALS FOR YOU!</h3>
        <div class="scrolling-wrapper">
            <BestDeals class="card" v-for="(bestDeal,index) in bestDeals" :key="index" :bestDeals="bestDeal" @click="goToDetails(bestDeal)"></BestDeals>
        </div>
    </div>
    <div class="test"></div>
</template>

<script>
// @ is an alias to /src
import products from "../assets/fixtures/productDetails/home/home-products.js";
import bestDeals from "../assets/fixtures/bestDeals/home/home-best-deals.js";
import CarouselTemplate from "@/components/CarouselTemplate.vue";
import ProductCard from "@/components/ProductCard.vue";
import BestDeals from "@/components/BestDeals.vue";
import { mapMutations } from 'vuex';

export default {
    name: "HomeView",
    components: {
    CarouselTemplate,
    ProductCard,
    BestDeals
},
    data() {
        return {
            products: products,
            bestDeals: bestDeals
        }
    },
    methods: {
        ...mapMutations(['setProductDetails']),
        goToDetails(product) {
            // console.log(products);
            // products.splice(index,1);
            // products.unshift(product);
            this.setProductDetails(product);
            // console.log(product);
            // this.$router.push(`/details/${product.id}`);
            this.$router.push({name: 'details', params: {id:product.id}, query: {id:product.id}})
        }
    }
};
</script>


<style scoped>

    .top-picks-caption {
        margin: 25px;
        justify-content: left;
        font-weight: 700;
        color: #008b8b;
    }

    .best-deals {
        margin: 25px;
        justify-content: left;
        font-weight: 700;
        color: #008b8b;
    }

    /* .product-card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    } */

    /* .products {
        margin: 5px;
        margin-left: 15px;
    } */

    .card {
        display: inline-block;
    }

    .scrolling-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;    
        margin-bottom: 10px;
    }  
    
    .scrolling-wrapper::-webkit-scrollbar {
        /* width: 1em; */
        height: 0.35em;
        
    }

    .scrolling-wrapper::-webkit-scrollbar-thumb {
        background: #add8e6;
        border: 0.005em solid #008b8b;
        border-radius: 100vw;
    }

    .scrolling-wrapper::-webkit-scrollbar-thumb:hover {
        background: #008b8b;
    }

</style>