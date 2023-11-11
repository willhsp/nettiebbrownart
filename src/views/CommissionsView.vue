<template>
  <h2>{{ commissionPage?.commissionsPageCollection?.items[0]?.title }}</h2>
  <div
      v-for="content in commissionPage?.commissionsPageCollection?.items[0]?.content?.json.content"
      :key="content.nodeType"
    >
      <template v-if="content.nodeType === 'paragraph'">
        <pre>{{ content.content[0].value }}</pre>
      </template>
  </div>
  <div 
    v-for="image in commissionPage?.commissionsPageCollection?.items[0]?.imagesCollection?.items"
    :key="image?.url ?? undefined"
  >
    <img :src="image?.url ?? undefined" alt="Header Logo" />
  </div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql';

const GET_COMMISSION_PAGE = graphql(/* GraphQL */ `
  query GetCommissionPage {
    commissionsPageCollection(limit: 1) {
      items {
        title,
        content {
          json
        },
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
    const { result: commissionPage } = useQuery(GET_COMMISSION_PAGE);

    return {
      commissionPage,
    };
  },
};
</script>