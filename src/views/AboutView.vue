<template>
  <div>
    <navbar></navbar>
    <div class="relative">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img class="h-56 w-full object-scale-down sm:object-cover lg:absolute lg:h-full" src="@/assets/aboutus.jpg" alt="Country on the Coast was founded in 2018" />
        </div>
      </div>
      <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div class="lg:col-start-2 lg:pl-8">
          <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-indigo-900 sm:text-4xl">Our story</h3>
            <p class="mt-8 text-lg text-gray-900">
              Country on the Coast was founded in 2018 by Business Development Mentor, Hannah Roper, also known as Lily Garland.
            </p>
            <div class="prose prose-indigo mt-5 text-gray-900">
              <p class="mt-8 text-lg text-gray-900">
                As an award winning Country singer songwriter herself, Hannah knew the importance of live gigs and being
                able to connect with your audience to grow as a musician and also as a brand.
              </p>
              <p class="mt-8 text-lg text-gray-900">
                Finding it harder and harder to travel to gigs due to family commitments, Hannah thought outside the box
                as to how she could still be a major contributor to the UK country music scene without the toll of
                performing and travelling herself.  Most major Country festivals were north of London and it was
                rare for UK country music to break into the southern area other than small one off gigs, so what does
                someone with a solution based focus do…..they create their own opportunities!
              </p>
              <p class="mt-8 text-lg text-gray-900">From that thought, Country on the Coast was born! </p>
              <p class="mt-8 text-lg text-gray-900">And for anyone who knows Hannah, knows she doesn’t do things by half so not content with just a gig
                format, Hannah set about to create a 3 day festival to bring all the artists she loves to the South
                Coast!</p>
              <p class="mt-8 text-lg text-gray-900">
                Now, having successfully completed a second year (should have been the 4th but that’s thanks to covid!)
                The focus of Country on the Coast is to create a weekend of fun, laughter and love for the UK country
                music community.
              </p>
              <p class="mt-8 text-lg text-gray-900">It provides opportunities to perform, to not only seasoned performers but also the up and coming
                artists wanting to increase their experience and audience base.</p>
              <p class="mt-8 text-lg text-gray-900">It is the place to come to meet old friends and new and feel that community spirit with like minded people.</p>
              <p class="mt-8 text-lg text-gray-900">As well as incredible music, the Gaiety, Southsea supports the event through a special festival food menu
                , a constant flow of drinks, including speciality cocktails and a venue that most events would be envious of!
                There are traders selling the most wonderful country style products and of course there is the opportunity to
                buy the artist’s merchandise too!</p>
              <p class="mt-8 text-lg text-gray-900">Plus all performing artists have a plethora of PR opportunities from professional photographs,
                radio and podcast interviews, video recordings and more!</p>

              <h3 class="mt-5 text-3xl font-bold leading-8 tracking-tight text-indigo-900 sm:text-4xl">The Gaiety Southsea</h3>
              <p class="mt-8 text-lg text-gray-900">Set on South Parade, steeped in history, The Gaiety is an iconic but not typically 
                your first association with a country music festival!</p>
              <p class="mt-8 text-lg text-gray-900">
                South Parade Pier has a very colourful and eventful history opening for the first time in 1879.  It has been destroyed 
                by fire 3 times, the most infamous being in 1974 during the making of the film 'Tommy'; it was requisitioned during
                World War II for the preparation and embarkation of troops for the D-Day landings; and has served as an entertainment
                venue drawing in many famous faces to  perform there, such as, Frankie Howerd, Peter Sellers, David Bowie and Genesis. 
                After years of neglect, this much loved Victorian structure has been restored once more, and it's time to start making 
                history again!
              </p>
              <p class="mt-8 text-lg text-gray-900">With views across the solent, a large bar and modern decor, The Gaiety transforms 
                into an indoor music festival for Country on the Coast and works in a way you could never have imagined!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <three-page-blog-vue></three-page-blog-vue>
    <footer-bottom-vue></footer-bottom-vue>
  </div>
</template>
<script>
import Navbar from '../components/navBar';
import threePageBlogVue from '@/components/threePageBlog.vue';
import footerBottomVue from '@/components/footerBottom.vue'
export default {
  components: {
    Navbar,
    threePageBlogVue,
    footerBottomVue
    },
  data() {
    return {
    };
  },
};
</script>