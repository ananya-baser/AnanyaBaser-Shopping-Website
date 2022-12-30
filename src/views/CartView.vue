<template>
  <div class="wrapper" v-if="itemsCount">
    <div class="items">
      <div class="item" v-for="item in Object.keys(items)" :key="item">
        <div class="image">
          <img :src="items[item].image" alt=""  @click="goToDetails(items[item])">
        </div>
        <div class="details">
          <div class="title">{{ items[item].title }}</div>
          <div class="description">{{ items[item].description }}</div>
          <div class="quantity">
            <div class="subtract" @click="updateCart(items[item], -1)">-</div>
            <div class="count">{{ items[item].count }}</div>
            <div class="add" @click="updateCart(items[item], 1)">+</div>
          </div>
          <div class="amount">
            Rs. {{ items[item].price * items[item].count }}
          </div>
        </div>
      </div>
    </div>
    <div class="bill">
      <div style="text-align: initial; margin: 10px 0; font-weight: 800">
        Coupons
      </div>
      <div class="applycoupon">
        <div class="text">
          <img src="@/../public/images/blue-price-tag.jpg" alt="" />
          <div>Apply Coupons</div>
        </div>
        <button>Apply</button>
      </div>
      <div class="couponcode" id="couponCode">
        <img src="@/../public/images/cart-coupon-offer.jpg" alt="" />
      </div>
      <div class="priceDetails">
        <div class="header">PRICE DETAILS - {{ itemsCount }} ITEM(S)</div>
        <div class="total">
          <div class="text">Total MRP</div>
          <div class="amount">Rs. {{ getTotal }}</div>
        </div>
        <div class="total">
          <div class="text">Convinience Fee</div>
          <div class="amount">Rs. 0</div>
        </div>
        <div class="total">
          <div class="text">Coupon Discount</div>
          <div class="amount">Rs. 0</div>
        </div>
        <hr />
        <div class="total">
          <div class="text final">Total Amount</div>
          <div class="amount">Rs. {{ getTotal }}</div>
        </div>
      </div>
      <router-link to="/checkout"
        ><button class="proceedToBuy">PROCEED TO BUY</button></router-link
      >
    </div>
  </div>
  <div v-else>
    <img src="@/../public/images/empty_cart.jpg" alt="" />
    <div class="empty-cart-msg">
        <h1>OOPS! EMPTY CART HERE!</h1>
        <h4>Shop right away to turn this frown <i class="fa-regular fa-face-frown"></i> upside down! <i class="fa-regular fa-face-smile-beam"></i></h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "CartView",
  methods: {
    ...mapActions(["updateItemsInCart"]),
    ...mapMutations(['setProductDetails']),
    goToDetails(product) {
        this.setProductDetails(product);
        this.$router.push(`/${product.id}`);
    },
    updateCart(item, op) {
      item.count += op;
      this.updateItemsInCart({ item, op });
    },
  },
  computed: {
    ...mapGetters(["getItemsInCart", "getItemsInCartCount"]),
    items() {
      return this.getItemsInCart();
    },
    itemsCount() {
      return this.getItemsInCartCount();
    },
    getTotal() {
      return Object.keys(this.items).reduce(
        (acc, curr) => acc + this.items[curr].count * this.items[curr].price,
        0
      );
    },
  },
};
</script>
<style scoped>
.wrapper {
  /* overflow: scroll; */
  overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  /* margin: auto; */
  margin-bottom: 20px;
}
.items {
  width: 40%;
  padding: 10px;
}
.item {
  display: flex;
  padding: 10px;
  border: 1px solid #eeeded;
  margin: 10px 0;
  width: 400px;
  height: 250px;
}
.item img {
  width: 150px;
  height: auto;
  max-height: 230px;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
}
.title {
    font-size: larger;
  font-weight: bold;
  margin-bottom: 6px;
}
.description {
  text-align: initial;
  font-size: 14px;
  margin-bottom: 6px;
}
.quantity {
  display: flex;
  padding: 10px 0;
}
.add {
  padding: 5px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}
.count {
  padding: 5px 8px;
  display: flex;
  align-items: end;
}
.subtract {
  padding: 5px 10px;
  border: 1px solid #e4e1e1;
  border-radius: 4px;
}
.bill {
  padding: 10px;
  width: 30%;
}
.applycoupon {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.applycoupon .text {
  display: flex;
  justify-content: space-around;
}
.applycoupon img {
  height: 20px;
  width: 20px;
  margin-right: 10px;
}
.applycoupon button {
  padding: 5px 10px;
  border: 1px solid #008b8b;
  background: white;
  border-radius: 4px;
  color: #008b8b;
}
.applycoupon button:hover{
    background: #008b8b;
    color: white;
    transition: 0.15s ease-in-out;
}
.priceDetails {
  display: flex;
  flex-direction: column;
}
.header {
  font-size: 14px;
  font-weight: 700;
  margin: 20px 0;
  align-self: baseline;
}
.total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.total .text {
  font-size: 16px;
}
.total .amount {
  font-weight: 600;
}
.final {
  font-weight: 600;
}
hr {
  width: 100%;
}
.proceedToBuy {
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: 1px solid #008b8b;
  background: white;
  color: #008b8b;
  border-radius: 4px;
}
.proceedToBuy:hover{
    background: #008b8b;
    color: white;
    transition: 0.15s ease-in-out;
}
.couponcode img {
  width: 100%;
  /* display: none; */
}
.empty-cart-msg{
    position: absolute;
    left: 37%;
    top: 30%;
    text-align: center;
    margin: auto;
    width: 50%;
}

.empty-cart-msg h1{
    font-size: 3.5rem;
}
</style>