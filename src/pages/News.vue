<template>
  <Layout>
    <div class="container mx-auto px-4">
      <h1 class="text-center ml-0 sm:text-left sm:ml-3 mt-24 font-medium text-3xl text-blue-900">
        Latest
        <span class="text-blue-500">news</span>
      </h1>
      <div class="mt-12 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-2">
        <div
          v-for="edge in $page.allPosts.edges"
          :key="edge.node.title"
          class="max-w-sm rounded overflow-hidden shadow-lg mb-8 mx-auto"
        >
          <g-image class="w-full" v-bind:src="edge.node.urlToImage" alt="Article image" />
          <div class="px-6 py-4">
            <div v-html="edge.node.title" class="font-medium text-lg text-blue-900 mb-2"></div>
            <p v-html="edge.node.description" class="font-light text-blue-900 text-base mb-4"></p>
          </div>
        </div>
      </div>
      <Pager class="mb-12 mt-8" :info="$page.allPosts.pageInfo" />
    </div>
  </Layout>
</template>

<page-query>

query ($page: Int) {
  allPosts(perPage: 6, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from "gridsome";
export default {
  metaInfo: {
    title: "Latest News"
  },
  components: {
    Pager
  }
};
</script>
