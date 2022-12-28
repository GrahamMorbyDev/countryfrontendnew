<template>
  <div>
    <Navbar></Navbar>
    <div>
      <img class="h-32 w-full object-cover lg:h-48" :src="'topbar.jpg'" alt="" />
    </div>
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="'tempArtist.jpg'" alt="" />
        </div>
        <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
          <div class="mt-6 min-w-0 flex-1 sm:hidden md:block">
            <h1 class="truncate text-2xl font-bold text-gray-900">Graham Morby</h1>
          </div>
          <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">

          </div>
        </div>
      </div>
      <div class="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
        <h1 class="truncate text-2xl font-bold text-gray-900">{{ profile.name }}</h1>
      </div>
    </div>
    <div class="mt-12 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

      <div>
        <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Singer Songwriter</h3>
        <p class="mt-8 text-lg text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p class="mt-8 text-lg text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      
        <div class="mt-8 grid grid-cols-3 gap-4 content-center">
          <iframe src="https://www.youtube.com/embed/nk-MSbZPqTM" width="100%" height="305" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
          <iframe src="https://www.youtube.com/embed/nk-MSbZPqTM" width="100%" height="305" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/nk-MSbZPqTM" width="100%" height="305" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      
      <div class="mt-5 mb-5">
        <photosGridVue></photosGridVue>
      </div>
    </div>
    <footerBottomVue></footerBottomVue>
  </div>
</template>
  
<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import Navbar from '../components/navBar';
import footerBottomVue from '@/components/footerBottom.vue';
import photosGridVue from '@/components/photosGrid.vue';
const profile = {
  name: 'Ricardo Cooper',
  email: 'ricardo.cooper@example.com',
  avatar:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  backgroundImage:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'ricardocooper@example.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1990'],
  ],
}
</script>
<style>

</style>