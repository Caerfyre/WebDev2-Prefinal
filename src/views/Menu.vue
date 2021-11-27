<template>
  <div class="bg-warning">
    
        <div class="d-sm-flex align-items-center justify-content-center my-4">
            <h1 class="h1 my-4 text-gray-800 font-weight-bold">MENU</h1>
        </div>

    <div class="container">
      <div class="row justify-content-start">
        <div
          class="col-xl-4 col-md-6 d-flex justify-content-center"
          v-for="product of validProd"
          v-bind:key="product.id">
          <Card  @add-product="$emit('add-product', name, price, img, origQuant, quant)" :prodList="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Menu",
  components: {
    Card,
  },
  emits: ['add-product'],
  data() {
    return {
      cartItems: [],
      products: [],
    };
  },

created() {
    this.products = [
      {
          id: 1,
          name: "Bacon",
          price: 250,
          quantity: 10,
          category: ["Meat"],
          description: "Bacon is delicious",
          img: "https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg",
        },
        {
          id: 2,
          name: "Fish",
          price: 150,
          quantity: 5,
          category: ["Seafood", "Fresh"],
          description: "Fish is delicious",
          img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg",
        },
        {
          id: 3,
          name: "Chicken",
          price: 200,
          quantity: 9,
          category: ["Poultry", "Fresh"],
          description: "Chicken is delicious",
          img: "https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg",
        },
        {
          id: 4,
          name: "Beef",
          price: 300,
          quantity: 11,
          category: ["Meat"],
          description: "Beef is delicious",
          img: "https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg",
        },
        {
          id: 5,
          name: "Soy Sauce",
          price: 50,
          quantity: 0,
          category: ["Sauce", "Seasoning"],
          description: "Soy sauce is delicious",
          img: "https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024",
        },
        {
          id: 9,
          name: "Egg",
          price: 10,
          quantity: 72,
          category: ["Dairy"],
          description: "Egg is delicious",
          img: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
        },
        {
          id: 11,
          name: "Pork",
          price: 200,
          quantity: 12,
          category: ["Meat"],
          description: "Pork is delicious",
          img: "https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg",
        },
    ]
  },

  computed: {
    validProd: function () {
      return this.products.filter(function (prod) {
        return prod.quantity > 0;
      });
    },
  },


};
</script>
