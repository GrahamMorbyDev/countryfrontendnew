<template>
  <div>
    <Navbar></Navbar>

    <div class="bg-amber-50">
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <img src="@/assets/banner.png" alt="">
            <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-900 sm:text-4xl">Introducing the
              Country on the Coast Launch Party!</p>
            <p class="mt-8 text-lg text-gray-9000">
              The excitement is building for Country on the Coast 2024, and we've got some thrilling
              news to share. In response to your valuable feedback, this year, we're introducing
              something special: the Country on the Coast Launch Party!
            </p>
            <p class="mt-8 text-lg text-gray-900">
              On Friday, April 12th, 2024, we're kicking off the Country on the Coast weekend with a
              bang at the all-new Country on the Coast Launch Party and VIP event. We've chosen an
              exciting new venue to make this occasion even more memorable - the Staggeringly Good
              Brewery, another fantastic addition to the Portsmouth scene, known for its in-house
              brewery and fantastic atmosphere. In collaboration with Scarlet River PR, we are
              thrilled to be able to offer this amazing new addition to the Country on the Coast
              weekend!
            </p>
            <p class="mt-2 text-1xl font-bold leading-8 tracking-tight text-indigo-900 sm:text-2xl">What to Expect</p>

            <p class="mt-8 text-lg text-gray-900">
              <span class="text-indigo-900 font-bold">Live Performances:</span> Get ready to be serenaded by some of the
              incredible artists who
              will be gracing the Country on the Coast stage over the weekend. It's a sneak peek
              into the musical magic that awaits you at the festival.
            </p>

            <p class="mt-8 text-lg text-gray-900">
              <span class="text-indigo-900 font-bold">VIP Event:</span> For those seeking an exclusive experience, our VIP
              event begins at 6pm,
              offering a chance to mingle with artists, enjoy special amenities, and immerse
              yourself in the world of country music. Limited tickets available to be purchased
              alongside the Launch Party
            </p>

            <p class="mt-8 text-lg text-gray-900">
              <span class="text-indigo-900 font-bold">Launch Party:</span> The main event, the Country on the Coast Launch
              Party, kicks off at
              7.30pm. It's a night of music, fun, and community that's open to all. General
              tickets are available for this part of the evening without the VIP bolt on.
              Artist announcements coming soon!
            </p>

            <p class="mt-8 mb-8 text-lg text-gray-900">
              Get Your Tickets: Tickets for the VIP event, Launch Party, and general admission
              can be
              <a href="https://www.skiddle.com/whats-on/Portsmouth/Staggeringly-Good-Brewery/Country-on-the-Coast-Launch-Party/36654557/"
                target="_blank" class="text-indigo-900">purchased here</a>.
              Be sure to secure your spot for this unforgettable evening.
            </p>
            <div class="pt-8">
              <a href="https://www.skiddle.com/whats-on/Portsmouth/Staggeringly-Good-Brewery/Country-on-the-Coast-Launch-Party/36654557/"
                target="_blank" class="bg-pink-700 text-white font-bold py-4 px-4 rounded">
                Get Launch Party Tickets
              </a>
            </div>
          </div>
        </div>
      </div>
      <footerBottomVue></footerBottomVue>
    </div>

  </div>
</template>
  
<script>
import Navbar from '../components/navBar';
import threePageBlogVue from '@/components/threePageBlog.vue';
import footerBottomVue from '@/components/footerBottom.vue';

export default {
  components: {
    Navbar,
    threePageBlogVue,
    footerBottomVue
  },
  data() {
    return {
      people: [


        // More people...
      ]
    }
  }
}
</script>