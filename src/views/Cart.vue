<template>
  <div class="d-sm-flex align-items-center justify-content-center my-4">
    <h1 class="h1 my-4 text-gray-800 font-weight-bold">Cart</h1>
  </div>

  <div class="container-sm mb-5">
    <div class="card cart-color">
      <div class="card-header bg-dark text-white">Your Cart Items</div>
      <div class="card-body">
        <div
          class="row justify-content-center"
          v-for="item of allCartItems"
          v-bind:key="item.itemId"
        >
          <CartItem :prodItem="item" />
        </div>
      </div>
      <div>
        <div class="card-header bg-dark text-white">Checkout</div>
        <h1 class="h1 my-4 text-center text-gray-800 font-weight-bold">Total:</h1>
        <div class="d-sm-flex align-items-center justify-content-evenly">
          <form action="">
            <div class="form-group my-5">
              <div class="input-group">
                <h6 class="mt-1 mx-4">Enter Coupon Code:</h6>
                <input type="text" name="coupon" />

                <h6 class="mt-1 mx-4">Enter Amount:</h6>
                <input type="text" name="cash" />

                <button type="button" class="btn btn-sm btn-warning mx-4">
                  Checkout
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  emits: ["add-product"],
    props: {
      cart: Array,
    },
  data() {
    return {
      allCartItems: [],
    };
  },
  created() {
    this.allCartItems = JSON.parse(this.$route.params.cart);
  },
};
</script>