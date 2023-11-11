<template>
  <div class="about">
    <template 
      v-for="section in aboutSections?.aboutSectionCollection?.items"
      :key="section"
    >
      <h2>{{ section?.heading }}</h2>
      <div
        v-for="content in section?.content?.json.content"
        :key="content.nodeType"
      >
        <template v-if="content.nodeType === 'paragraph'">
          <pre>{{ content.content[0].value }}</pre>
        </template>
      </div>
      <img :src="section?.image?.url ?? undefined" alt="Header Logo" />
    </template>
  </div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../gql';

const GET_ABOUT_SECTIONS = graphql(/* GraphQL */ `
  query GetAboutSections {
    aboutSectionCollection {
      items {
        heading,
        content {
          json
        },
        image {
          url
        }
      }
    }
  }`
);

export default {
  name: 'App',
  setup() {
    const { result: aboutSections } = useQuery(GET_ABOUT_SECTIONS);

    return {
      aboutSections,
    };
  },
};
</script>

<style>
</style>