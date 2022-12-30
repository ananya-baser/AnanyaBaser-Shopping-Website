<template>
    <div class="filter-form">
        <br/>
        <h4><b>Filters</b></h4>
            <!-- <hr> -->

            <h5><b>Color</b></h5>
            <div>
                <input type="checkbox" name="color" id="color1" value="Black" v-model="color[0]">
                <label for="color1"><span class="dot" style="background-color:black;"></span> Black</label><br/>
            </div>
            <div>
                <input type="checkbox" name="color" id="color2" value="Yellow" v-model="color[1]">
                <label for="color2"> <span class="dot" style="background-color:yellow;"></span> Yellow</label><br/>
            </div>
            <div>
                <input type="checkbox" name="color" id="color3" value="Red" v-model="color[2]">
                <label for="color3"> <span class="dot" style="background-color:red;"></span> Red</label><br/>
            </div>
            <div>
                <input type="checkbox" name="color" id="color4" value="Blue" v-model="color[3]">
                <label for="color4"> <span class="dot" style="background-color:blue;"></span> Blue</label><br/>
            </div>
            <div>
                <input type="checkbox" name="color" id="color5" value="Green" v-model="color[4]">
                <label for="color5"> <span class="dot" style="background-color:green;"></span> Green</label><br/>
            </div>
            
            <br/>
            <input class="custom-color-input" type="text" v-model="customColor" placeholder="Your color!">
            <br/>
            <br/>

            <h5><b>Price</b></h5>
            <div>
                <input type="checkbox" name="priceRange" id="price1" value="Below 1000" v-model="price[0]">
                <label for="price1">Below 1000 </label><br/>
            </div>
            <div>
                <input type="checkbox" name="priceRange" id="price2" value="1000-1500" v-model="price[1]">
                <label for="price2">1000-1499 </label><br/>
            </div>
            <div>
                <input type="checkbox" name="priceRange" id="price3" value="1500-2000" v-model="price[2]">
                <label for="price3">1500-1999 </label><br/>
            </div>
            <div>
                <input type="checkbox" name="priceRange" id="price4" value="2000-2500" v-model="price[3]">
                <label for="price4">2000-2499 </label><br/>
            </div>
            <div>
                <input type="checkbox" name="priceRange" id="price5" value="Above 2500" v-model="price[4]">
                <label for="price5">Above 2500 </label><br/>  
            </div>
            <!-- <p>{{price}}</p>
            <p>{{color}}</p> -->
            <input class="button" type="submit" value="APPLY" @click.prevent="checkForm">
    </div>
</template>


<script>
export default {
    name: 'FilterProduct',
    data() {
        return {
            price: [false,false,false,false,false],
            color: [false,false,false,false,false],
            customColor: ''
        }
    },
    methods: {
        checkForm() {
            this.$router.push({ name: "search", params: {id:this.price}, query: {searchString: this.$route.query.searchString, filterPriceArray: this.price, filterColorArray: this.color, customColor: this.customColor} })
        }
    }
}
</script>


<style scoped>
.filter-form {
    margin: 0px 20px;
    margin-left: 0px;
    border-right: 1px solid #a7eaea;
    border-bottom: 1px solid #a7eaea;
    height: 100%;
    padding: 0px 20px;
    padding-bottom: 10px;
    font-family: 'Helvetica';
    width: 190px;
    box-shadow: 2px 3px #dcdcdc;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
input {
    margin-right: 5px;
}
.button {
  margin: 10px;
  margin-right: 15px;
  background: #008b8b;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: bold;
  width: 120px;
  height: 40px;
  color: white;
  padding: 10px 30px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  /* text-align: center; */
  cursor: pointer;
}
.button:hover{
    background: #01a5a5;
}

.custom-color-input{
    padding: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    width: 150px;
}
h4,h5{
    color: #008b8b;
}
</style>