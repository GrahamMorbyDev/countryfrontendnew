<template>
  <div>
    <navbar></navbar>
    <div class="relative">
      <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
          <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="@/assets/aboutus.jpg" alt="Country on the Coast was founded in 2018" />
        </div>
      </div>
      <div class="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div class="lg:col-start-2 lg:pl-8">
          <div class="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
            <h2 class="font-semibold leading-6 text-white">About us </h2>
            <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl">Our story</h3>
            <p class="mt-8 text-lg text-white">
              Country on the Coast was founded in 2018 by Business Development Mentor, Hannah Roper, also known as Lily Garland.
            </p>
            <div class="prose prose-indigo mt-5 text-white">
              <p>
                As an award winning Country singer songwriter herself, Hannah knew the importance of live gigs and being
                able to connect with your audience to grow as a musician and also as a brand.
              </p>
              <p>
                Finding it harder and harder to travel to gigs due to family commitments, Hannah thought outside the box
                as to how she could still be a major contributor to the UK country music scene without the toll of
                performing and travelling herself.  Most major Country festivals were north of London and it was
                rare for UK country music to break into the southern area other than small one off gigs, so what does
                someone with a solution based focus do…..they create their own opportunities!
              </p>
              <p>From that thought, Country on the Coast was born! </p>
              <p>And for anyone who knows Hannah, knows she doesn’t do things by half so not content with just a gig
                format, Hannah set about to create a 3 day festival to bring all the artists she loves to the South
                Coast!</p>
              <p>
                Now, having successfully completed a second year (should have been the 4th but that’s thanks to covid!)
                The focus of Country on the Coast is to create a weekend of fun, laughter and love for the UK country
                music community.
              </p>
              <p>It provides opportunities to perform, to not only seasoned performers but also the up and coming
                artists wanting to increase their experience and audience base.</p>
              <p>It is the place to come to meet old friends and new and feel that community spirit with like minded people.</p>
              <p>As well as incredible music, the Gaiety, Southsea supports the event through a special festival food menu
                , a constant flow of drinks, including speciality cocktails and a venue that most events would be envious of!
                There are traders selling the most wonderful country style products and of course there is the opportunity to
                buy the artist’s merchandise too!</p>
              <p>Plus all performing artists have a plethora of PR opportunities from professional photographs,
                radio and podcast interviews, video recordings and more!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/navBar';
export default {
  components: {
    Navbar,
    },
  data() {
    return {
    };
  },
};
</script>