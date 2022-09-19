<template>
    <div class="review-container">
        <!-- <h3>Reviews:</h3> -->
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                <h3>{{review.name}}</h3>&ThickSpace; : &ThickSpace;{{review.rating}} 
                    <div class="rating-stars" v-if="review.rating==1">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="rating-stars" v-else-if="review.rating==2">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div class="rating-stars" v-else-if="review.rating==3">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div class="rating-stars" v-else-if="review.rating==4">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div class="rating-stars" v-else>
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                <br/>
                "{{review.review}}"
                <hr/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ReviewList',
    // data() {
    //     return { 
    //         ratingMap: {
    //             1: <div><i class="fa-solid fa-star"></i></div>,
    //             2: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    //             3: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    //             4: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>,
    //             5: <div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>

    //         }
    //     }
    // },
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
}
</script>

<style scoped>
li {
  font-size: 18px;
  word-wrap: break-word;
}

.review-container {
  width: 100%;
  padding: 20px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
  margin-left: 40px;
  /* border: 2px solid #008b8b; */
  border: none;
  margin: 40px;
}

.review-container li {
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
}

h3 {
    display: inline-block;
}

.rating-stars{
    display: inline-block;
}

</style>