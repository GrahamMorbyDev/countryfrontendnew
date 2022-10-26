<template>
  <navbar></navbar>

    <page-header>
      <template v-slot:title>Country On The Coast</template>
      <template v-slot:tag>
        Welcome to the South Coast’s only indoor country music festival on a pier! Yep you read it right!<br>
        Country on the Coast was founded by Hannah Roper, aka Lily Garland, in conjunction with The Gaiety Southsea in 2018.<br>
        April 2019 saw the debut of the festival drawing in artists from across the UK and internationally and attendees from all over the UK.<br>
        As with all live music and events, Country on the Coast was hit by the global pandemic of 2020 but after 2 years of postponements and countless hours of effort, Country on the Coast 2022 went ahead and was a roaring success!
      </template>
    </page-header>
    <pricing-component></pricing-component>


  <div class="container m-auto">
    <HomeBlog></HomeBlog>
  </div>
</template>

<script>
import Navbar from '../components/navBar';
import HomeBlog from '../components/homepage/homepageBlogs';
import PageHeader from "@/components/pageHeader";
import PricingComponent from '@/components/pricingComponent';
export default {
  components: {
    Navbar,
    HomeBlog,
    PageHeader,
    PricingComponent
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>