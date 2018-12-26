<template>
  <div>  
    <h3>Add Product</h3>
    <div class="card products__add-product">
      <div>
        <input
          v-model="addProductData.product_id"
          class="validate"
          placeholder="Id"
        />
      </div>
      <div>
        <input
          v-model="addProductData.name"
          class="validate"
          placeholder="name"
        />
      </div>
      <div>
        <input
          v-model="addProductData.price"
          class="validate"
          placeholder="price"
        />
      </div>
      <div>
        <i 
          class="material-icons medium"
          @click="onAdd"
        >
          add
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  props: ["addProductData", "onAdd"]
};
</script>

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
