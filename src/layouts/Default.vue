<template>
  <div class="leading- m-0 p-0">
    <nav class="topnav flex items-center justify-between flex-wrap bg-blue-500 p-6 mb-5 md:px-12">
      <strong>
        <g-link
          class="outline-none text-white text-lg font-medium"
          to="/"
        >{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav text-white font-medium text-base md:text-lg">
        <g-link class="outline-none" to="/">Home</g-link>
        <g-link class="outline-none mx-5" to="/news/">News</g-link>
      </nav>
    </nav>
    <slot />
    <footer class="p-10 bg-blue-500">
      <div class="flex justify-center items-center flex-col">
        <a class="outline-none" href="https://github.com/dionweb/sports-news" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-1 stroke-current text-white inline-block h-8 w-8 feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
        <p class="mt-4 text-white text-center text-lg">Copyright © 2020 Sports News.</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}

html {
  scroll-behavior: smooth;
}

.topnav,
footer {
  background-color: #4299e1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%232b6cb0' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
