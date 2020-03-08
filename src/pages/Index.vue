<template>
  <Layout>
    <div v-for="edge in $page.allPosts.edges.slice(0, 5)" :key="edge.node.title">
      <h1 v-html="edge.node.title" />
      <img class="rounded-lg" v-bind:src="edge.node.urlToImage" alt="Article image" />
      <div v-html="edge.node.description"></div>
      <div v-html="edge.node.url"></div>
    </div>
  </Layout>
</template>

<page-query>
query {
  allPosts {
    edges {
      node {
        title
        description
        urlToImage
        url
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Sports news"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
