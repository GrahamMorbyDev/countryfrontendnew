<template>
    <div>
      <navbar></navbar>
      <div class="relative">
        <div class="lg:absolute lg:inset-0">
          <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="@/assets/contact.jpg" alt="History of Country on the coast" />
          </div>
        </div>
        <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div class="lg:col-start-2 lg:pl-8">
            <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Contact Country On The Coast</h3>
            <p class="text-sm mt-3 text-gray-900">Please allow 2 to 3 days for us to reply to any emails we recieve</p>
            <div class="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full-name" class="sr-only">Full name</label>
              <input type="text" name="full-name" id="full-name" autocomplete="name" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Full name" />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Email" />
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Phone" />
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" class="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Message" />
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-cyan-900 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
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