<template>
  <div>

    <h3>Products</h3>
    
    <div class="collection" v-for="product in sortedProducts" :key="product.product_id">
      
      <div
        v-if="editId === product.product_id"
        class="collection-item products__list-item"
        v-bind:class="{'yellow lighten-4':editId === product.product_id}">
        <div>{{product.product_id}}</div>
        <div>
          <input
            v-model="editProductsData.name"
            class="validate"
          />
        </div>
        <div>
          <input
            v-model="editProductsData.price"
            class="validate"
          />
        </div>
        <div>
          <i 
            class="material-icons"
            @click="onSubmitData"
          >
            check
          </i>
        </div>
        <div>
          <i 
            class="material-icons"
            @click="onCancel"
          >
            cancel
          </i>
        </div>
      </div>
      
      <div v-else class="collection-item  products__list-item">
        <div>{{product.product_id}}</div>
        <div>{{product.name}}</div>
        <div>{{product.price}}</div>
        <div>
          <i 
            class="material-icons"
            @click="onEdit(product)"
          >
            mode_edit
          </i>
        </div>
        <div>
          <i 
            class="material-icons"
            @click="onDelete(product.product_id)"
          >
            delete
          </i>
        </div>
        <div>
          <router-link
          :to="{
            name:'ProductPage',
            params: {'product_id':product.product_id}
          }"
          > 
            <i 
              class="material-icons"
            >
              search
            </i>

          </router-link>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsList",
  props: [
    "editId",
    "editProductsData",
    "sortedProducts",
    "onEdit",
    "onSubmitData",
    "onDelete",
    "onCancel"
  ]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products__list-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.products__add-product {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.material-icons {
  cursor: pointer;
}
</style>
