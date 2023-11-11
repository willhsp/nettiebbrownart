<template>
  <header>
    <img :src="header?.headerCollection?.items[0]?.logo?.url ?? undefined" alt="Header Logo" />
  
    <h1 class="title">{{ header?.headerCollection?.items[0]?.title }}</h1>

    <div v-if="header?.headerCollection?.items[0]?.tagline">
      <div
        v-for="content in header?.headerCollection?.items[0].tagline.json.content"
        :key="content.nodeType"
      >
        <template v-if="content.nodeType === 'paragraph'">
          <pre class="tagline">{{ content.content[0].value }}</pre>
        </template>
      </div>
    </div>

    <div class="nav-container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/commissions">Commissions</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/shop">Shop</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </nav>
    </div>

  </header>

  <RouterView />
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { graphql } from '../src/gql';

const GET_HEADER = graphql(/* GraphQL */ `
  query GetHeader {
    headerCollection(limit: 1) {
      items {
        title
        tagline {
          json
        }
        logo {
          url
        }
      }
    }
  }`
);

export default {
  name: 'App',
  setup() {
    const { result: header } = useQuery(GET_HEADER);

    return {
      header
    };
  },
};
</script>

<style scoped>
.title {
  font-family: 'Great Vibes', cursive;
}

.tagline {
  font-family: 'Great Vibes', cursive;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav-container {
  border-top: 1px solid black;
}

nav {
  display: inline-block;
  font-size: 12px;
  margin: auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1rem;
    margin: auto  ;
  }
}
</style>
