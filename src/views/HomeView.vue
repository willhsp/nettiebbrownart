<template>
  <carousel :items-to-show="5" :autoplay="3000" :wrap-around="true">
    <slide v-for="bannerImage in bannerImages?.bannerImagesCollection?.items[0]?.imagesCollection?.items" :key="bannerImage?.url ?? undefined">
      <img :src="bannerImage?.url ?? undefined" alt="Header Logo" />
    </slide>
  </carousel>

  <carousel :items-to-show="5" :wrap-around="true">
    <slide v-for="product in productPreviews?.productCollection?.items" :key="product?.name ?? undefined">
      <div>
        <div>
          <img :src="product?.primaryImage?.url ?? undefined" alt="Header Logo" />
        </div>
        <p>{{ product?.name }}</p>
        <p>{{ product?.price }}</p>
      </div>
    </slide>
    <template #addons>
      <navigation/> 
    </template>
  </carousel>
</template>


<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../../src/gql';
import { Carousel, Slide, Navigation } from 'vue3-carousel'


const GET_BANNER_IMAGES = graphql(/* GraphQL */ `
  query GetBannerImages {
    bannerImagesCollection(limit: 1) {
      items {
        imagesCollection {
          items {
            url
          }
        }
      }
    }
  }`
);

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
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const { result: bannerImages } = useQuery(GET_BANNER_IMAGES);
    const { result: productPreviews } = useQuery(GET_PRODUCT_PREVIEWS);

    return {
      bannerImages,
      productPreviews,
    };
  },
};
</script>
