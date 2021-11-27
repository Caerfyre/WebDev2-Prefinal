<template>

  <div class="card text-center shadow mb-4" style="width: 18rem;">
  <img :src="prodList.img" class="card-img-top" :alt="prodList.name">
  <div class="card-body">
    <h5 class="card-title text-center">{{prodList.name}}</h5>
    <p class="card-text">Php {{prodList.price}}.00</p>
    <router-link 
      :to="{
        name:'details', 
        params:{pathname:prodList.name},
        query:{
          id: prodList.id,
          name: prodList.name,
          price: prodList.price,
          quant: prodList.quantity,
          categ: prodList.category.join(', '),
          desc: prodList.description,
          img: prodList.img,
        },
        }"
      @add-product="$emit('add-product', name, price, img, origQuant, quant)"
      class="btn btn-dark">Item Details</router-link>
    
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    prodList: Object
  },
  emits: ['add-product']

};
</script>