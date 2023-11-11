<template>
  <div class="masonry-gallery">
    <div
      v-for="(image, index) in galleryImages?.galleryImagesCollection?.items[0]?.imagesCollection?.items"
      :key="index"
      class="masonry-item"
    >
      <img :src="image?.url ?? undefined" alt="Image" />
    </div>
  </div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../../src/gql';


const GET_GALLERY_IMAGES = graphql(/* GraphQL */ `
  query GetGalleryImages {
      galleryImagesCollection(limit: 1) {
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


export default {
  name: 'App',
  setup() {
    const { result: galleryImages } = useQuery(GET_GALLERY_IMAGES);

    return {
      galleryImages,
    };
  },
};
</script>

<style scoped>
.masonry-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: masonry;
}

</style>