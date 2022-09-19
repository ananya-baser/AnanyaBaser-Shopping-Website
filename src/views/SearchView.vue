<template>
    <div class="filters">
        <FilterProduct></FilterProduct>
    </div>
    <div class="wrap" @mounted="updateBestDeals">
        <div class="searchGrid" v-if="filteredProducts.length>0">
            <div v-for="product in filteredProducts" :key="product.id">
                <ProductCard :productDetails="product"></ProductCard> 
            </div>
        </div>
        <div class="product-not-found" v-else style="position:absolute; top:200px; left: 600px;">
            <img src="@/../public/images/no-product-found.jpg" alt="">
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ProductCard from '@/components/ProductCard.vue';
import FilterProduct from "@/components/FilterProduct.vue";
import bestDeals from "@/assets/fixtures/bestDeals/home/home-best-deals";

export default {
    name: 'SearchView',
    // props: {
    //     searchQuery: {
    //         type: String,
    //         required: true
    //     }
    // },
    components: {
    ProductCard,
    FilterProduct
},
    data() {
        return {
            searchQuery: '',
            products: []
        }
    },
    methods: {
        ...mapGetters(['getProducts', 'getSearchQuery']),
        updateBestDeals(filterProducts) {
            window.clevertap.event.push('Product Searched',filterProducts);
            var i,j,flag;
            for(i=0;i<3 && i<filterProducts.length;i++){
                flag=0;
                for(j=0;j<bestDeals.length;j++){
                    if(filterProducts[i].id==bestDeals[j].id){
                        bestDeals.splice(j,1);
                        bestDeals.unshift(filterProducts[i]);
                        flag=1;
                        break;
                    }
                }
                if(flag==0){
                    bestDeals.pop();
                    bestDeals.unshift(filterProducts[i]);
                }
            }
        }
    },
    computed: {
        ...mapGetters(['getProducts', 'getSearchQuery']),
        ...mapMutations(['setSearchQuery']),
        filteredProducts() {
            let searchString = this.$route.query.searchString
            let filterPriceArray = this.$route.query.filterPriceArray
            let filterColorArray = this.$route.query.filterColorArray
            let customColor = this.$route.query.customColor
            // console.log(filterPriceArray)
            // console.log(filterPriceArray!=undefined && filterPriceArray[1]=='true'?"yes":"no")
            // console.log(searchString)

            let products = this.getProducts()
            let filterProducts = products.filter(product => (   
                                                                (
                                                                    (customColor==undefined || product.color.includes(customColor))
                                                                        &&
                                                                    (
                                                                        (filterColorArray==undefined
                                                                            ||
                                                                            (filterColorArray[0]=='false' && filterColorArray[1]=='false' && filterColorArray[2]=='false' && filterColorArray[3]=='false' && filterColorArray[4]=='false')
                                                                                ||
                                                                            (
                                                                                (filterColorArray[0]=='true' && product.color.includes('black'))
                                                                                    ||
                                                                                (filterColorArray[1]=='true' && product.color.includes('yellow'))
                                                                                    ||
                                                                                (filterColorArray[2]=='true' && product.color.includes('red'))
                                                                                    ||
                                                                                (filterColorArray[3]=='true' && product.color.includes('blue'))
                                                                                    ||
                                                                                (filterColorArray[4]=='true' && product.color.includes('green'))
                                                                            )
                                                                        )
                                                                    )
                                                                        &&
                                                                    (filterPriceArray==undefined
                                                                        ||
                                                                        (filterPriceArray[0]=='false' && filterPriceArray[1]=='false' && filterPriceArray[2]=='false' && filterPriceArray[3]=='false' && filterPriceArray[4]=='false')
                                                                            ||
                                                                        (
                                                                            (filterPriceArray[0]=='true' && product.price<1000)
                                                                                ||
                                                                            (filterPriceArray[1]=='true' && product.price>=1000 && product.price<1500)
                                                                                ||
                                                                            (filterPriceArray[2]=='true' && product.price>=1500 && product.price<2000)
                                                                                ||
                                                                            (filterPriceArray[3]=='true' && product.price>=2000 && product.price<2500)
                                                                                ||
                                                                            (filterPriceArray[4]=='true' && product.price>=2500)
                                                                        )
                                                                    )
                                                                )
                                                                    &&
                                                                (
                                                                    (product.description.toLowerCase().includes(searchString.toLowerCase())) 
                                                                        || 
                                                                    (product.title.toLowerCase().includes(searchString.toLowerCase()))
                                                                        ||
                                                                    (product.typeOfProduct.toLowerCase().includes(searchString.toLowerCase()))
                                                                )
                                                            )
                                                );
            this.updateBestDeals(filterProducts)
            return filterProducts
        }
    },
    // mounted() {
    //     console.log(this.$route.query)
    //     // console.log(this.$route.params)
    // },
    // watch: {
    //     filteredProducts: {
    //         handler() {
    //             // this.searchQuery = this.$route.query.searchString
    //             this.products = this.getProducts();
    //         },
    //         deep: true,
    //         immediate: true
    //     }
    // }
}
</script>


<style>

.filters{
    display: flex;
    position: sticky;
    top: 0px;
}
.searchGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 84%;
    position:absolute; 
    top:10%; 
    right:0;
    /* float: right; */
}

.product-not-found{
    position: absolute;
    display: flex;
    justify-content: center;
}

.product-not-found img{
    /* position: relative;
    left: 150%;
    top: 100px; */
    transform: scale(1.5,1.5);
}

</style>