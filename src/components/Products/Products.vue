<template>
  <div>
    <add-product
     v-bind:addProductData="addProductData"
     v-bind:onAdd="onAdd"
     />  

    <products-list
      v-bind:editId="editId"
      v-bind:editProductsData="editProductsData"
      v-bind:sortedProducts="sortedProducts"
      v-bind:onEdit="onEdit"
      v-bind:onSubmitData="onSubmitData"
      v-bind:onDelete="onDelete"
      v-bind:onCancel="onCancel"
     />
  </div>
</template>

<script>
import db from "@/db";
import AddProduct from "./AddProduct";
import ProductsList from "./ProductsList";
export default {
  name: "Products",
  components: { AddProduct, ProductsList },
  data() {
    return {
      products: [],
      addProductData: {
        product_id: "",
        name: "",
        price: ""
      },
      editId: "",
      editProductsData: {
        product_id: "",
        name: "",
        price: ""
      }
    };
  },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id;
      });
    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      db
        .collection("Products")
        .get()
        .then(querySnapShot => {
          const products = [];
          querySnapShot.forEach(doc => {
            console.log(doc.data());
            products.push(doc.data());
          });
          this.products = products;
        });
    },
    onDelete(product_id) {
      db
        .collection("Products")
        .where("product_id", "==", product_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete().then(this.getProducts);
          });
        });
    },
    onAdd() {
      db
        .collection("Products")
        .add(this.addProductData)
        .then(this.getProducts);
    },
    onEdit(product) {
      this.editId = product.product_id;
      this.editProductsData.name = product.name;
      this.editProductsData.price = product.price;
    },
    onCancel() {
      this.editId = "";
      this.editProductsData.name = "";
      this.editProductsData.price = "";
    },
    onSubmitData() {
      db
        .collection("Products")
        .where("product_id", "==", this.editId)
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            doc.ref
              .set({
                product_id: this.editId,
                name: this.editProductsData.name,
                price: this.editProductsData.price
              })
              .then(this.getProducts);
          });
          this.onCancel();
        });
    }
  }
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
