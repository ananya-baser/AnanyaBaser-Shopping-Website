<template>
    <div class="card text-center" :style="{'background-image':`url(${bestDealImage})`, 'background-size':'200px'}">
        <!-- <div class="card-img">
            <img :src="bestDeals.image" class="card-img-top" alt="">
        </div> -->
        <div class="card-body">
	        <h5 class="card-title">{{ bestDeals.title }}</h5>
	        <p class="card-text">{{ bestDeals.additionalText }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'BestDeals',
        props: {
            bestDeals: {
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
            bestDealImage() {
                // this.setImageDimensions();
                return this.bestDeals.image;
            }
        },
        methods: {
            setImageDimensions() {
                this.$refs.bestDeals.image.style.height='20px';
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
