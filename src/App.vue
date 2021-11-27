<template>
  <div class="d-sm-flex align-items-between justify-content-center my-4">
    <router-link to="/" class="h3 btn btn-dark me-3">Menu</router-link>
    <!-- <router-link :to="{
        name:'cart', 
        params:{cartItems: this.selectedItems},

        }" class="h3 btn btn-dark me-3">Menu</router-link> -->
    <button @click="passItems()" class="h3 btn btn-dark">Cart</button>
    
  </div>

  <router-view @add-product="addProductItem" />
</template>

<script>
export default {
  name: "App",
  emits: ['add-product'],
  data() {
    return {
      selectedItems: [],
    };
  },

  methods: {
    addProductItem(name, price, img, origQuant, quant) {
      this.selectedItems.push({
        itemName: name,
        itemPrice: price,
        itemImg: img,
        originalQuant: origQuant,
        itemQuant: quant,
      });
      console.log(this.selectedItems);
    },
    passItems(){
      this.$router.push({name:'cart', params:{cart: JSON.stringify(this.selectedItems)}});
    }
  },
};
</script>

<style>
/* div{
  border: solid 1px; 
  border-color: tomato;
  border-width: 2px;
} */

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}

.img-fluid {
  height: 18vw;
  overflow: hidden;
  object-fit: cover;
}

.cart-img {
  height: 10vw;
  width: 10vw;
  overflow: hidden;
  object-fit: cover;
}

.cart-color{
  background-color: lemonchiffon;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>