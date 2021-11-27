<template>
  <div class="card shadow mb-4" style="max-width: 700px;">
          <div class="row g-0 py-3">
            <div class="col-md-3">
              <img :src="prodItem.itemImg" class="cart-img rounded" :alt="prodItem.itemName">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h4 class="card-title mb-3">{{prodItem.itemName}}</h4>
                <h6>Php {{prodItem.itemPrice}}.00</h6> 
      
                <div class="row">
                    <div class="form-group d-flex flex-row">
                        <h6 class="mt-1">Quantity:</h6>
                    
                        <div class="btn-group btn-group-sm mx-3" role="group">
                        <button @click="decrement" :disabled="newQuantity === 0" type="button" class="btn btn-dark"><i class="bi bi-dash"></i></button>
                        <input type="number" @change="newQuantity" :value="newQuantity" class="input-sm">
                        <button @click="increment" :disabled="newQuantity >= parseInt(prodItem.originalQuant)" type="button" class="btn btn-dark"><i class="bi bi-plus"></i></button>
                        </div>

                        <button type="button" class="btn btn-sm btn-danger">Remove</button>

                    </div>      
                </div>

              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: "CartItem",
    props:{
      prodItem: Object,
    },
    data: function(){
    return{
      newQuantity: this.prodItem.itemQuant,
      totalItemPrice: this.prodItem.itemPrice,
      newTotal: 0
      };
    },
     methods:{
    decrement(){
      this.newQuantity--;
    },
    increment(){
      this.newQuantity++;
    },
    getTotalPrice(){
      this.newTotal = this.newQuantity * this.totalItemPrice;
    }
    }

    
}
</script>