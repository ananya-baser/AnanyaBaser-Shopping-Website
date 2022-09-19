<template>
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input class="button" type="submit" value="SUBMIT">
    </form>
</template>

<script>

export default {
    name: 'ReviewForm',
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },

    methods: {
        onSubmit() {
            if(this.name==='' || this.review==='' || this.rating===null){
                alert("Incomplete Review! Please fill out every field");
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            console.log(productReview)
            this.$emit('review-submitted',productReview);

            this.name='';
            this.review='';
            this.rating=null;
        }
    }
}
</script>


<style scoped>

    .button {
  margin: 30px;
  margin-right: 15px;
  background: #008b8b;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: bold;
  width: 160px;
  height: 60px;
  color: white;
  padding: 10px 30px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}
.button:hover{
    background: #01a5a5;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  /* border: 2px solid #008b8b; */
  border-top: 0.1px solid #dcdcdc;
  border-left: 0.1px solid #dcdcdc;
  box-shadow: 2px 3px #dcdcdc;
  background-color: white;
  /* -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57); */
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 600px) {
  .review-form {
    width: 90%;
  }
}
</style>
