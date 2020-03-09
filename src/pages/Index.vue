<template>
  <Layout class="bg-blue-100">
    <div
      class="showcase text-center md:text-left md:flex justify-around items-center mt-20 container mx-auto px-4"
    >
      <div>
        <h1 class="font-medium text-2xl md:text-3xl text-blue-900">
          Get the latest
          <span class="text-blue-500">sports news</span>.
        </h1>
        <h2 class="font-light text-xl md:text-2xl text-blue-900 mt-4">
          This website provides the latest US sports news
          <br />using
          <span class="italic">Gridsome</span> and
          <span class="italic">News API</span>.
        </h2>
        <div class="inline-flex mt-4">
          <a
            class="duration-500 text-base cursor-pointer rounded-md shadow bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded border-none"
            href="#credits"
          >Credits</a>
          <g-link
            class="duration-500 ml-4 text-base rounded-md shadow bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded border-none"
            to="/news/"
          >Show news</g-link>
        </div>
      </div>
      <div>
        <g-image src="~/assets/images/undraw_newspaper.svg" class="mt-8 mx-auto w-40 md:w-64" />
      </div>
    </div>
    <div class="newsletter py-10 mt-8 bg-blue-800">
      <form
        class="flex items-center py-4 w-full max-w-md container mx-auto px-10 py-2 bg-white rounded-md shadow"
      >
        <input
          class="appearance-none bg-transparent border-none w-full text-blue-900 mr-3 py-1 leading-tight focus:outline-none"
          type="text"
          placeholder="Subscribe to our Newsletter"
          aria-label="Full name"
        />
        <button
          class="ml-0 md:ml-32 duration-500 text-base flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-sm border-4 text-white py-2 px-4 rounded border border-blue-500 hover:border-transparent border-none"
          type="button"
        >Subscribe</button>
      </form>
    </div>
    <div
      id="credits"
      class="md:flex container mx-auto justify-around py-0 mb-0 md:py-10 md:mb-14 mt-12 items-center"
    >
      <div>
        <g-image src="~/assets/images/undraw_web_developer.svg" class="m-auto h-64 w-64" />
      </div>
      <div class="right">
        <div
          v-for="(credit, index) in credits"
          :key="index"
          class="transform :hover:-translate-y-0 :hover:scale-100 md:transform md:hover:-translate-y-1 md:hover:scale-105 hover:bg-gray-200 duration-500 max-w-sm mx-auto mt-3 md:mt-5 flex items-center px-6 py-4 bg-white rounded-lg shadow-xl"
        >
          <div class="flex-shrink-0">
            <g-image v-bind:src="credit.image" class="h-10 w-10" />
          </div>
          <div class="ml-6 pt-1">
            <h4 class="text-xl text-gray-900">{{credit.title}}</h4>
            <p class="text-base text-gray-600">{{credit.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact bg-blue-900">
      <div class="md:flex container mx-auto justify-around mt-12 py-10 items-center">
        <form class="bg-white rounded-lg p-6 shadow-xl m-auto md:m-0 w-full max-w-sm">
          <div class="my-6">
            <input
              class="rounded-md placeholder-blue-900 bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-blue-900 duration-500 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="my-6">
            <input
              class="rounded-md placeholder-blue-900 bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-blue-900 duration-500 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-username"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="mt-6 mb-2">
            <textarea
              class="rounded-md placeholder-blue-900 bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-blue-900 duration-500 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-username"
              type="text"
              placeholder="Enter your message"
              rows="6"
            />
          </div>
          <div class="mt-0">
            <label class="block text-blue-900 font-bold">
              <input class="outline-none mr-2 leading-tight" type="checkbox" />
              <span class="text-base font-normal">I have read and agree to the privacy policy</span>
            </label>
          </div>

          <button
            class="mt-4 mb-2 shadow bg-blue-500 hover:bg-blue-600 duration-500 text-base focus:outline-none text-white font-semibold py-2 px-4 rounded"
            type="button"
          >Submit</button>
        </form>
        <div class="hidden md:block right">
          <g-image src="~/assets/images/undraw_newsletter.svg" class="m-auto h-64 w-64" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      credits: [
        {
          image: require("~/assets/images/logo-circle-dark.svg"),
          alt: "Grisome logo",
          title: "Gridsome",
          description: "Modern Site Generator for Vue.js."
        },
        {
          image: require("~/assets/images/tailwind-css.png"),
          alt: "Tailwind CSS logo",
          title: "Tailwind CSS",
          description: "A utility-first CSS framework."
        },
        {
          image: require("~/assets/images/api.png"),
          alt: "API logo",
          title: "News API",
          description: "For live news and blog articles."
        }
      ]
    };
  }
};
</script>

<style>
.showcase {
  height: calc(100vh - 339px);
}

.newsletter,
.contact {
  background-color: #2c5282;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233182ce' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
