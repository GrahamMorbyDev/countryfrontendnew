<template>
  <div>

    <navbar></navbar>

    <div class="flex flex-row">
      <div class="lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="w-full p-10" src="@/assets/homepage.png" alt="Country on the Coast was founded in 2018" />
      </div>
      <div class="lg:inset-y-0 lg:left-0 lg:w-1/2">
        <div class=" max-w-prose text-base pt-6 lg:mr-0">
          <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-10">Country on the Coast
          </h3>
          <p class="prose prose-indigo mt-5">
            Welcome to the South Coast’s only indoor country music festival on a pier! Yep you read it right!<br>
          </p>
          <p class="prose prose-indigo mt-5">Country on the Coast was founded by Hannah Roper, aka Lily Garland, in
            conjunction with The Gaiety Southsea in 2018.</p>
          <p class="prose prose-indigo mt-5">April 2019 saw the debut of the festival drawing in artists from across the
            UK and internationally and attendees from all over the UK</p>
          <p class="prose prose-indigo mt-5">As with all live music and events, Country on the Coast was hit by the
            global pandemic of 2020 but after 2 years of postponements and countless hours of effort
            , Country on the Coast 2022 went ahead and was a roaring success!</p>
          <button
            class="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded mt-12 w-full block">Tickets</button>
        </div>
      </div>
    </div>

    <tickets-strip-vue></tickets-strip-vue>

    <div class="flex">
      <div class="lg:inset-y-0 lg:left-0 lg:w-full text-center">
        <img class="w-1/2 m-auto  p-10" src="@/assets/topbar.jpg" alt="Country on the Coast was founded in 2018" />
        <h3 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Our Story</h3>
        <p class="prose prose-indigo mt-5 text-center px-10">Country on the Coast was founded in 2018 by Business Coach and Mentor, Hannah Roper, also known as Lily Garland.</p>  

        <p class="prose prose-indigo mt-5 text-center">As an award winning Country singer songwriter herself, Hannah knew the importance of live gigs and being able to
        connect with your audience to grow as a musician and also as a brand.</p>  

        <p class="prose prose-indigo mt-5 text-center px-20">Finding it harder and harder to travel to gigs due to family commitments, Hannah thought outside the box as to how
        she could still be a major contributor to the UK country music scene without the toll of performing and travelling
        herself.  Most major Country festivals were north of London and it was rare for UK country music to break into the
        southern area other than small one off gigs, so what does someone with a solution based focus do…..they create
        their own opportunities!</p> 

        <p class="prose prose-indigo mt-5 text-center">From that thought, Country on the Coast was born!</p>

        <button class="bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded mt-12 text-center">Read more</button>
      </div>
    </div>

    <three-page-blog-vue></three-page-blog-vue>

    <footer-bottom-vue></footer-bottom-vue>

  </div>
</template>
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