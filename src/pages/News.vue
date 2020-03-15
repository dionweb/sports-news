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
          class="relative max-w-sm rounded-md rounded-tl-none overflow-hidden shadow-lg mb-8 mx-auto"
        >
          <g-image
            class="w-full h-56 text-center"
            v-bind:src="edge.node.urlToImage"
            alt="Article image"
          />
          <div class="px-6 py-4">
            <div v-html="edge.node.title" class="font-medium text-lg text-blue-900 mb-2"></div>
            <p v-html="edge.node.description" class="font-light text-blue-900 text-base mb-4"></p>
          </div>

          <a
            v-bind:href="edge.node.url"
            target="_blank"
            class="duration-500 outline-none absolute top-0 left-0 bg-blue-500 hover:bg-blue-700 text-gray-100 hover:text-white rounded-br-lg px-3 py-2 text-md font-semibold"
          >Go to source</a>
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
