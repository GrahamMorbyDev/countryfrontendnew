<template>
  <div>

    <navbar></navbar>

    <div class="grid grid-rows-1 grid-flow-col sm:block hidden hidden-xs">
      <div class="flex justify-center">
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative h-screen overflow-hidden md:h-screen">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="@/assets/replace/1.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="@/assets/replace/2.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="@/assets/replace/3.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="@/assets/replace/4.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="@/assets/replace/5.jpg"
                class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            </div>
          </div>
          <!-- Slider indicators -->
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
              data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
              data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
              data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
              data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
              data-carousel-slide-to="4"></button>
          </div>
          <!-- Slider controls -->
          <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 1 1 5l4 4" />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 9 4-4-4-4" />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="relative bg-indigo-900 mx-10 mt-16">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h1 class="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">Country on the Coast</h1>
            <p class="mt-6 text-lg leading-8 text-white">Welcome to the South Coast’s only indoor country music festival
              on a pier! Yep you read it right!</p>
            <p class="mt-6 text-lg leading-8 text-white">Country on the Coast was founded by Hannah Roper, aka Lily
              Garland, in
              conjunction with The Gaiety Southsea in 2018.</p>
            <p class="mt-6 text-lg leading-8 text-white">April 2019 saw the debut of the festival drawing in artists from
              across the
              UK and internationally and attendees from all over the UK</p>
            <p class="mt-6 text-lg leading-8 text-white">As with all live music and events, Country on the Coast was hit
              by the
              global pandemic of 2020 but after 2 years of postponements and countless hours of effort
              , Country on the Coast 2022 went ahead and was a roaring success!</p>
            <div class="mt-10 flex items-center gap-x-6">
              <a href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                Tickets</a>
            </div>
          </div>
        </div>
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="@/assets/replace/6.jpg" alt="" />
        </div>
      </div>
    </div>

    <three-page-blog-vue></three-page-blog-vue>


    <div class="bg-indigo-900 mt-16">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4">
        <p class="w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-white tracking-wider">
          Our Premium Sponsors
        </p>

        <span class="flex items-center justify-center text-gray-400 hover:text-gray-200" target="_blank" title="Ploi">
          <img src="@/assets/logo/Clewes.png" class="w-24" alt="Facebook" />
        </span>

        <span class="flex items-center justify-center text-gray-400 hover:text-gray-200" title="Agiledrop">
          <img src="@/assets/logo/Gaiety.png" class="w-24" alt="Disney" />
        </span>

        <span class="flex items-center justify-center text-gray-400 hover:text-gray-200" target="_blank"
          title="Codecourse">
          <img src="@/assets/logo/livingroom.png" class="w-24" alt="Airbnb" />
        </span>

        <span class="flex items-center justify-center text-gray-400 hover:text-gray-200" target="_blank" title="Laradir">
          <img src="@/assets/logo/scarlett.png" class="w-24" alt="Apple" />
        </span>

        <span class="flex items-center justify-center text-gray-400 hover:text-gray-200" target="_blank" title="Locale">
          <img src="@/assets/logo/stag.png" class="w-24" alt="Spark" />
        </span>
      </div>
    </div>

    <div class="relative bg-indigo-900 mx-10 my-16">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img class="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="@/assets/replace/7.jpg" alt="" />
        </div>

        <div class="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h1 class="mt-24 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-6xl">Our Story</h1>
            <p class="mt-6 text-lg leading-8 text-white">Country on the Coast was founded in 2018 by Business Coach and
              Mentor, Hannah Roper,
              also known as Lily Garland.</p>
            <p class="mt-6 text-lg leading-8 text-white">As an award winning Country singer songwriter herself, Hannah
              knew the importance of live gigs and being able to
              connect with your audience to grow as a musician and also as a brand.</p>
            <p class="mt-6 text-lg leading-8 text-white">Finding it harder and harder to travel to gigs due to family
              commitments, Hannah thought outside the box as to how
              she could still be a major contributor to the UK country music scene without the toll of performing and
              travelling
              herself. Most major Country festivals were north of London and it was rare for UK country music to break
              into the
              southern area other than small one off gigs, so what does someone with a solution based focus do…..they
              create
              their own opportunities!</p>
            <div class="mt-10 flex items-center gap-x-6">
              <router-link :to="'/history'"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
              More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer-bottom-vue></footer-bottom-vue>

</div></template>
<script>
import Navbar from '../components/navBar';
import ticketsStripVue from '@/components/ticketsStrip.vue';
import threePageBlogVue from '@/components/threePageBlog.vue';
import footerBottomVue from '@/components/footerBottom.vue'
export default {
  components: {
    Navbar,
    ticketsStripVue,
    threePageBlogVue,
    footerBottomVue
  },
  data() {
    return {
    };
  },
};
</script>