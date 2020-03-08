<template>
  <Layout>
    <div
      class="text-center md:text-left md:flex justify-around items-center mt-20 container mx-auto px-4"
    >
      <div>
        <h1 class="font-medium text-3xl text-blue-900">
          Get the latest
          <span class="text-blue-500">sports news</span>.
        </h1>
        <h2 class="font-light text-2xl text-blue-900 mt-4">
          This website provides the latest US sports news
          <br />using
          <span class="italic">Gridsome</span> and
          <span class="italic">News API</span>.
        </h2>
        <div class="inline-flex mt-4">
          <g-link
            class="duration-500 text-base cursor-pointer rounded-md shadow bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >About us</g-link>
          <g-link
            class="duration-500 ml-4 text-base rounded-md shadow bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            to="/news/"
          >Show news</g-link>
        </div>
      </div>
      <div class="hidden md:block">
        <g-image src="~/assets/images/undraw_newspaper.svg" class="max-w-xs" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
