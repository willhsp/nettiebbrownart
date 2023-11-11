<template>
  <div class="shop">
    <template v-for="product in productPreviews?.productCollection?.items" :key="product.name">
      <div class="product">
        <img :src="product?.primaryImage?.url ?? undefined" alt="Header Logo" />
        <p>{{ product?.name }}</p>
        <p>{{ product?.price }}</p>
      </div>
    </template>
  </div> 
</template>


<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../../src/gql';

const GET_PRODUCT_PREVIEWS = graphql(/* GraphQL */ `
  query GetProductPreviews {
    productCollection(limit: 10) {
      items {
        name,
        price,
        primaryImage {
          url
        }
      }
    }
  }`
);

export default {
  name: 'App',
  setup() {
    const { result: productPreviews } = useQuery(GET_PRODUCT_PREVIEWS);

    return {
      productPreviews,
    };
  },
};
</script>

<style>
.shop {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
}

.product {
  overflow: hidden  ;
}
</style>