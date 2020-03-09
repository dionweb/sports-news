<template>
  <div class="leading- m-0 p-0">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6 mb-5 md:px-12">
      <strong>
        <g-link class="text-white text-lg font-medium" to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav text-white font-medium">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link ml-5" to="/news/">News</g-link>
      </nav>
    </nav>
    <slot />
    <footer class="mt-20 p-10 bg-blue-500">
      <div class="flex justify-center">
        <p class="text-white">Copyright © 2020 Sports News.</p>
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
</style>
