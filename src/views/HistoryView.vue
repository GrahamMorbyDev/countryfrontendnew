<template>
  <div>
    <navbar></navbar>
    <div class="relative">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img class="h-56 w-full object-scale-down sm:object-cover lg:absolute lg:h-full" src="@/assets/history.jpg" alt="History of Country on the coast" />
        </div>
      </div>
      <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div class="lg:col-start-2 lg:pl-8">
          <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">History</h3>
            <p class="mt-8 text-lg text-gray-500">
              Country on the Coast was founded in 2018 by Hannah Roper, also known as Lily Garland, with the view to bringing 
              country music artists and south coast fans closer together.
              With most country music festivals being far from Portsmouth,
              Hannah worked with a local venue, The Gaiety, to bring her vision to life with a twist!
            </p>
            <p class="mt-8 text-lg text-gray-500">I mean how often do you get country music on a pier?! </p>
            <p class="mt-8 text-lg text-gray-500">2019 was our first live festival.  The line up consisted of</p>
            <img src="@/assets/history/2019Poster.jpg" alt="2019 Country on the coast line up" class="mt-2">
            <p class="mt-8 text-lg text-gray-500">Following postponement after postponement due to the global Pandemic we finally came back with a bang in April 2022!
              We had a little rebrand and had a fantastic line up plus we went all out on the decor this year! Really bringing the
              country to the pier!</p>
            <p class="mt-8 text-lg text-gray-500">The line up was as follows;</p>
            <img src="@/assets/history/2022Poster.jpg" alt="2019 Country on the coast line up" class="mt-2">
          </div>
        </div>
      </div>
    </div>
    <photos-grid-vue></photos-grid-vue>
    <footer-bottom-vue></footer-bottom-vue>
  </div>
</template>
<script>
import Navbar from '../components/navBar';
import photosGridVue from '@/components/photosGrid.vue';
import footerBottomVue from '@/components/footerBottom.vue';
export default {
  components: {
    Navbar,
    photosGridVue,
    footerBottomVue
  },
  data() {
    return {
    };
  },
};
</script>