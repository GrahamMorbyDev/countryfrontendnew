<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0  bg-gray-100"/>
    <div class="h-screen w-full justify-center">
      <div class="relative h-full sm:overflow-hidden">
        <div class="absolute inset-0">
          <img class="h-full w-full object-cover" src="@/assets/background.jpg" alt=""/>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 mix-blend-multiply"/>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>