<template>
    <div class="card text-center" :style="{'background-image':`url(${bestDealImage})`, 'background-size':'200px'}" @click="goToDetails(bestDealsDetails)">
        <!-- <div class="card-img">
            <img :src="bestDeals.image" class="card-img-top" alt="">
        </div> -->
        <div class="card-body">
	        <h5 class="card-title">{{ bestDealsDetails.title }}</h5>
	        <p class="card-text">{{ bestDealsDetails.additionalText }}</p>
        </div>
    </div>
</template>

<script>
import bestDeals from '@/../public/home-best-deals'
import { mapMutations, mapGetters } from 'vuex'
    export default{
        name: 'BestDeals',
        props: {
            bestDealsDetails: {
                type: Object,
                required: true
            }
        },
        // data() {
        //     return {
        //         bestDealImage: this.bestDeals.image
        //     }
        // }

        computed: {
            ...mapGetters(['getProducts']),
            bestDealImage() {
                // this.setImageDimensions();
                return this.bestDealsDetails.image;
            },
        },
        methods: {
            ...mapMutations(['setProductDetails']),
            goToDetails(product) {
                console.log(bestDeals)
                console.log(product)
                console.log(window.clevertap)
            //     try {
            //         console.log("yes1")
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
            },
            setImageDimensions() {
                this.$refs.bestDealsDetails.image.style.height='20px';
            }
        }
    }
</script>

<style scoped>
    .card {
        border: none;
        box-shadow: 2px 3px #dcdcdc;
        height: 250px;
        width: 200px;
        margin: 20px;
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

    /* .card-img {
        height: 70%;
    }
    .card-img-top{
        max-height: 100%;
        max-width: 100%;
        margin-bottom: 5px;
        object-fit: cover;
    } */

    .card:hover   {
        transform: scale(1.02);
        opacity:0.9;
    }
</style>
