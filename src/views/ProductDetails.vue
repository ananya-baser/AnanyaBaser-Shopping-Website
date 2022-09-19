<template>
    <div class="product-wrapper">
        <div class="image">
            <img :src="product.image" alt="">
        </div>
        <div class="details">
            <div class="title">
                {{product.title}}
            </div>
            <div class="description">
                {{product.description}}
            </div>
            <div class="ratings">
                <div class="rating">{{ (Math.round(  ((this.reviews[id].reviews.filter(review => review.rating==5).length*5 + 
                                                                                    this.reviews[id].reviews.filter(review => review.rating==4).length*4 + 
                                                                                    this.reviews[id].reviews.filter(review => review.rating==3).length*3 +
                                                                                    this.reviews[id].reviews.filter(review => review.rating==2).length*2 +
                                                                                    this.reviews[id].reviews.filter(review => review.rating==1).length) / this.reviews[id].reviews.length ) * 10    
                                                                                ) / 10
                                                                                ) }}</div>
                <i class="fa-solid fa-star"></i>
                <div> | &nbsp;{{this.reviews[id].reviews.length}} Ratings</div>
            </div>
            <div class="price">
                Rs. {{product.price}}
            </div>
            <div class="tax-message">Inclusive of all taxes.</div>
            <div class="atc-gtc">
                <button class="btn" @click="atc">ADD TO CART</button>
                <!-- <button class="gtc">GO TO CART</button> <<<<<<<< commented before this commenting >>>>>>>> -->
            </div>
        </div>
    </div>
    <!-- <div class="container"> -->
        <div class="container card mx-auto col-10 col-md-12 p-0">
            <div class="card-body">
                <div class="card-title" style="font-weight: 900;">Customer reviews</div>
                <div class="card-subtitle mb-2"><label class="big">{{ (Math.round(  ((this.reviews[id].reviews.filter(review => review.rating==5).length*5 + 
                                                                                    this.reviews[id].reviews.filter(review => review.rating==4).length*4 + 
                                                                                    this.reviews[id].reviews.filter(review => review.rating==3).length*3 +
                                                                                    this.reviews[id].reviews.filter(review => review.rating==2).length*2 +
                                                                                    this.reviews[id].reviews.filter(review => review.rating==1).length) / this.reviews[id].reviews.length ) * 10    
                                                                                ) / 10
                                                                                ) }}</label>&ThickSpace;
                    <i class="fas fa-heart" style="color: #008b8b; transform: scale(1.5,1.5); position:relative; left: 5px; bottom: 10px;"></i>
                    &ThickSpace;
                    <label class="text-muted" style="transform: scale(1.5,1.5); position:relative; left: 35px; bottom: 10px;">{{this.reviews[id].reviews.length}} reviews</label>
                </div>
                <div class="mid d-flex">
                    <div class="index">
                        <p class="text-muted">5</p>
                        <p class="text-muted">4</p>
                        <p class="text-muted">3</p>
                        <p class="text-muted">2</p>
                        <p class="text-muted">1</p>
                    </div>

                    <div class="card-content col-md-9 col-8">
                        <div class="mb-2">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar"
                                    :style="{'width': computeWidth(5), 'background-color': '#277BC0'}" :aria-valuenow="computeWidth(5)" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar"
                                :style="{'width': computeWidth(4), 'background-color': '#0096FF'}" :aria-valuenow="computeWidth(4)" aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" :style="{'width': computeWidth(3), 'background-color': '#00D7FF'}"
                                :aria-valuenow="computeWidth(3)" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" :style="{'width': computeWidth(2), 'background-color': '#72FFFF'}"
                                :aria-valuenow="computeWidth(2)" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress mb-2">
                            <div class="progress-bar" role="progressbar" :style="{'width': computeWidth(1), 'background-color': '#add8e6'}"
                                :aria-valuenow="computeWidth(1)" aria-valuemin="0" :aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="rst">
                        <div>{{computeWidth(5)}}</div>
                        <div>{{computeWidth(4)}}</div>
                        <div>{{computeWidth(3)}}</div>
                        <div>{{computeWidth(2)}}</div>
                        <div>{{computeWidth(1)}}</div>
                    </div>
                    <div class="count">
                        <p><small class="text-muted">{{this.reviews[id].reviews.filter(review => review.rating==5).length}}</small></p>
                        <p><small class="text-muted">{{this.reviews[id].reviews.filter(review => review.rating==4).length}}</small></p>
                        <p><small class="text-muted">{{this.reviews[id].reviews.filter(review => review.rating==3).length}}</small></p>
                        <p><small class="text-muted">{{this.reviews[id].reviews.filter(review => review.rating==2).length}}</small></p>
                        <p><small class="text-muted">{{this.reviews[id].reviews.filter(review => review.rating==1).length}}</small></p>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <a href="#reviewLink"><button class="btn btn-outline" style="border-radius: 8px;" @click="viewReviews">View all reviews</button></a>
                </div>
            </div>
        </div>
        <div class="scrolling-wrapper">
            <h3 style="margin-left:35px; ">Similar Items you may like!</h3>
            <ProductCard class="similar-product-card" v-for="(similarProduct,index) in filteredProducts" :key="index" :productDetails="similarProduct" @click="goToDetails(similarProduct)"></ProductCard>
        </div>
        <div class="review" id="reviewLink" ref="review" :style="{display:checkDisplay}">
            <h2 class="review-title">Customer Reviews</h2>
            <br/>
            <div class="review-form">
                <!-- <h3 class="review-form-title">Add A Review!</h3> -->
                <ReviewForm class="review-form-card" @review-submitted="addReview"></ReviewForm>
            </div>
            <div class="review-list">
                <!-- <h3 class="review-list-title">Reviews:</h3> -->
                <ReviewList class="review-list-card" v-if="this.reviews[id].reviews.length" :reviews="this.reviews[id].reviews"></ReviewList>
            </div>
        </div>
    <!-- </div> -->
    <!-- <div class="offers" id="offers"></div> -->
    <div class="feedback" ref="feedback">
        <div>Item added to cart!</div>
    </div>
</template>


<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import ReviewList from '@/components/ReviewList.vue'
import ReviewForm from '@/components/ReviewForm.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductDetail',
  data: () => {
    return {
      emptyRes: false,
      product: {},
      reviews: [],
      id: null,
      reviewDetails: {
        id: null,
        review: {}
      },
      display: 'none',
      newProductId: null
    }
  },
  components: {
    ReviewList,
    ReviewForm,
    ProductCard
    },
  computed: {
    ...mapGetters(['getProducts']),
    reviewList() {
        return this.reviews
    },
    checkDisplay() {
        return this.display
    },
    filteredProducts() {
        console.log("hello")
        let products = this.getProducts();
        console.log(products.length)
        let searchString = this.product.typeOfProduct
        let filterProducts =   products.filter(product =>   ((product.description.toLowerCase().includes(searchString.toLowerCase())) 
                                                                || 
                                                            (product.title.toLowerCase().includes(searchString.toLowerCase()))
                                                                ||
                                                            (product.typeOfProduct.toLowerCase().includes(searchString.toLowerCase()))
                                                                &&
                                                            (product.id!=this.product.id)))
        
        console.log(filterProducts.slice(0,10).length)
        return filterProducts.slice(0,10)
    },
  },
  methods: {
    ...mapGetters(['getItemsInCart', 'getDetails', 'getReviews']),
    ...mapActions(['updateItemsInCart']),
    ...mapMutations(['addReviewToList','setProductDetails']),
    atc () {
      this.updateItemsInCart({op: 1, item: this.product})
        window.clevertap.event.push('Added to Cart',this.product);
      this.$refs.feedback.style.display = 'flex'
      setTimeout(() => {
        this.$refs.feedback.style.display = 'none'
      }, 2000)
    },
    setProduct() {
        console.log(69);
        this.id = this.$route.query.id
        this.product = this.getProducts()[this.id-1];
        // this.id = this.product.id;
        console.log(this.product);
    },
    setReviewList() {
        this.reviews = this.getReviews()
    },
    addReview(reviewDetails) {
        console.log(this.id);
        console.log(reviewDetails);
        this.reviewDetails.id=this.id;
        this.reviewDetails.review=reviewDetails;
        console.log(this.reviewDetails)
        this.addReviewToList(this.reviewDetails);
    },
    viewReviews() {
        console.log("hi")
        this.display = 'block';
    },
    computeWidth(rating) {
        switch(rating) {
            case 1:
                return Math.round(((this.reviews[this.id].reviews.filter(review => review.rating==1).length*100.0) / this.reviews[this.id].reviews.length)*10)/10 + "%";

            case 2:
                return Math.round(((this.reviews[this.id].reviews.filter(review => review.rating==2).length*100.0) / this.reviews[this.id].reviews.length)*10)/10 + "%";

            case 3:
                return Math.round(((this.reviews[this.id].reviews.filter(review => review.rating==3).length*100.0) / this.reviews[this.id].reviews.length)*10)/10 + "%";
           
            case 4:
                return Math.round(((this.reviews[this.id].reviews.filter(review => review.rating==4).length*100.0) / this.reviews[this.id].reviews.length)*10)/10 + "%";

            default:
                return Math.round(((this.reviews[this.id].reviews.filter(review => review.rating==5).length*100.0) / this.reviews[this.id].reviews.length)*10)/10 + "%";
        }
    },
    goToDetails(product) {
        // console.log(products);
        // products.splice(index,1);
        // products.unshift(product);
        this.setProductDetails(product);
        // console.log(product);
        // this.$router.push(`/details/${product.id}`);
        this.id = product.id;
        
        // this.$router.push({name: 'details', params: {id:product.id}, query: {id:product.id}})
        // this.$forceUpdate()
    },
  },
  beforeMount() {
    this.setProduct();
    this.setReviewList();
    // console.log(this.id)
  },
  created() {
    this.$watch('id', (newId) => {
        this.id=newId
    })
  }
//   watch: {
//     '$route.params.id' : {
//       handler() {
//         this.product = this.getProductDetails();
//         if (!this.product) {
//           this.emptyRes = true
//         } else {
//             // console.log('Product Viewed')
//           window.clevertap.event.push('Product Viewed', this.product)
//         }
//       },
//       deep: true,
//       immediate: true
//     }
//   }
}
</script>

<style scoped>

a{
    color: white;
}
a:visited{
    color: white;
}
.product-wrapper {
  display: flex;
  padding: 10px 20px;
  padding-left: 0px;
  height: calc(100vh - 60px);
  width: 100%;
  margin-bottom: 10px;
  margin-top: 0px;
}
.image {
  width: 350px;
  height: 500px;
  display: flex;
  margin: 30px;
}
.image img {
  width: 350px;
  height: 500px;
  object-fit: cover;
}
.details {
    margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 0 40px;
  text-align: initial;
}
.title {
  font-size: x-large;
  padding-bottom: 30px;
  font-weight: bold;
}
.description {
  padding-bottom: 30px;
}
.ratings {
  display: flex;
  border: 1px solid #f1f1f1;
  padding: 10px;
  align-items: center;
  margin-bottom: 30px;
}
.offers {
  width: 30%;
}
.rating {
  margin-right: 5px;
}
.tax-message {
  padding-bottom: 30px;
  font-size: 14px;
  color: #32a370;
}
.price {
  font-size: 28px;
  font-weight: 500;
}
.atc-gtc button{
  padding: 10px 30px;
  font-size: 16px;
  color: white;
  background: #008b8b;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 15px;
}

.atc-gtc button:hover{
    background: #01a5a5;
}

.gtc {
  background: #e357a9;
}
.feedback {
  position: absolute;
  top: 70px;
  right: 10px;
  background: white;
  color: #219a1b;
  border: 1px solid yellowgreen;
  display: none;
}
.feedback div {
  background: #5ec33c38;
  padding: 10px 50px;
}

.review {
    position: relative;
    /* top: 10px; */
    bottom: 150px;
    margin: 20px;
    padding: 10px;
}

.review-title{
    font-weight: 600;
}

.review-form {
    display: inline-block;
    margin: 0px;
}

.review-form-title {
    margin-left: 40px;
}

.review-list {
    position: absolute;
    display: inline-block;
    /* position: relative; */
    top: 80px;
    height: auto;
    width: 60%;
}

.review-list-title {
    margin-left: 40px;
    padding-bottom: 7px;
}

.review-container{
    margin-top: 0px;
}

@media screen and (max-width: 500px) {
  .title {
    font-size: large;
  }
  .description {
    font-size: small;
  }
  .price {
    font-size: 18px;
  }
  .ratings, .tax-message, .atc button {
    font-size: 12px;
  }
  .image img {
    height: fit-content;
  }
  
}

.card {
    margin: 30px;
    width: 25rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .2);
    position: absolute;
    left: 60%;
    top:150px;
}

.index {
    font-size: 14px;
    margin-top: 4px;
}

.index>p {
    margin-bottom: 12px;
}

.rst {
    font-weight: 900;
    margin-top: 1px;
}

.rst>div {
    margin-bottom: 9px;
    font-size: 16px;
}
 
.count {
    font-size: 14px;
    margin-left: 27px;
    margin-top: 2px;
}

.count>p {
    margin-bottom: 12px;
}

.btn {
    border: 1px solid #e9ecef;
    background: none;
}

.big {
    font-size: 60px;
    font-weight: 900;
}

button.focus,
button:focus {
    outline: 0;
    box-shadow: none !important;
} 

.btn {
    padding: 10px 30px;
  font-size: 16px;
  color: white;
  background: #008b8b;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 15px;
}

.btn:hover {
    background: #01a5a5;
}

.progress {
    height: 25px;
}

.scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;    
    margin-bottom: 10px;
    position: absolute;
    top: 700px;
    width: 100%;
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

.similar-product-card {
    display: inline-block;
    position: relative;
    top: 10px;
    left: 10px;
    width: 13%;
}
</style>

