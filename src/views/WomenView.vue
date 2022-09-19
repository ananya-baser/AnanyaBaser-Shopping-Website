<template>
    <div class="home">
        <div id="women-banner-1" class="women-banner-1">
            <!-- <img  src="@/../public/images/women-banner-3.jpg" alt=""> -->
            <div id="home"></div>
        </div>
        <h3 class="top-picks-caption">TOP PICKS FOR YOU!</h3>
        <div class="scrolling-wrapper">
            <ProductCard class="card" v-for="(womenProduct,index) in womenProducts" :key="index" :productDetails="womenProduct" @click="goToDetails(womenProduct)"></ProductCard>
        </div>

        <h3 class="best-deals">BEST DEALS FOR YOU!</h3>
        <div class="scrolling-wrapper">
            <BestDeals class="card" v-for="(womenBestDeal,index) in womenBestDeals" :key="index" :bestDeals="womenBestDeal" @click="goToDetails(womenBestDeal)"></BestDeals>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import womenProducts from "../assets/fixtures/productDetails/women/women-products.js";
import womenBestDeals from "../assets/fixtures/bestDeals/women/women-best-deals.js";
import ProductCard from "@/components/ProductCard.vue";
import BestDeals from "@/components/BestDeals.vue";
import { mapMutations } from "vuex";

export default {
    name: "HomeView",
    components: {
    ProductCard,
    BestDeals
},
    data() {
        return {
            womenProducts: womenProducts,
            womenBestDeals: womenBestDeals
        }
    },
    methods: {
        ...mapMutations(['setProductDetails']),
        goToDetails(product) {
            window.clevertap.profile.push({Site : {'last_product_women': this.product}});
            this.setProductDetails(product);
            console.log(product);
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

    .women-banner-1 img {
        width: 100%;
        max-height: 550px;
        overflow: hidden;
        padding-bottom: 10px;
    }
</style>