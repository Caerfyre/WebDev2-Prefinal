<template>
 <!-- <div class="bg-warning"> -->
    
        <div class="d-sm-flex align-items-center justify-content-center my-4">
            <h1 class="h1 my-4 text-gray-800 font-weight-bold">Item Details</h1>
        </div>
    
    <div class="container">
      <div class="row justify-content-center">
   
         <!-- DETAILS -->
        <div class="card shadow mb-4" style="max-width: 800px;">
          <div class="row g-0 py-3">
            <div class="col-md-4">
              <img :src="$route.query.img" class="img-fluid rounded" :alt="$route.query.name">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h4 class="card-title mb-3">{{$route.query.name}}</h4>
                <h6>Php {{$route.query.price}}.00</h6>
                <p class="card-text"><small class="text-muted">Category: {{$route.query.categ}}</small></p>   
                <p class="card-text">{{$route.query.desc}}</p><hr>
                

                <div class="row">
                    <div class="form-group d-flex flex-row">
                        <h6 class="mt-1">Quantity:</h6>
                    
                        <div class="btn-group btn-group-sm mx-3" role="group">
                        <button @click="decrement" :disabled="quantity === 0" type="button" class="btn btn-dark"><i class="bi bi-dash"></i></button>
                        <input type="number" v-model="quantity" class="input-sm">
                        <button @click="increment" :disabled="quantity >= $route.query.quant" type="button" class="btn btn-dark"><i class="bi bi-plus"></i></button>
                        </div>

                        <!-- add button -->
                        <button @click="addProduct($route.query.name, $route.query.price, $route.query.img, $route.query.quant, quantity)" type="button" class="btn btn-sm btn-dark">Add To Cart</button>

                    </div>      
                </div>

              </div>
            </div>
          </div>
        </div>
         <!-- DETAILS -->
        
      </div>
    </div>
  <!-- </div> -->
</template>

<script>

export default {
  name: "ItemDetails",
  emits: ['add-product'],
  components: {

  },

  data(){
    return{
      selected: [],
      quantity: 1
    };
  },

  methods:{
    decrement(){
      this.quantity--;
    },
    increment(){
      this.quantity++;
    },
    addProduct(name, price, img, origQuant, quant) {
      this.$emit('add-product', name, price, img, origQuant, quant);
    }

  }



};
</script>
