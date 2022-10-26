<template>
  <!-- Hero section -->
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2" />
    <div class="mx-auto">
      <div class="relative shadow-xl sm:overflow-hidden w-full">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="@/assets/homepage.png" alt="Girl bound and gagged in a chair" />
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-600 mix-blend-multiply" />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span class="block text-white"><slot name="title"></slot></span>
          </h1>
          <p class="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl"><slot name="tag"></slot></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>