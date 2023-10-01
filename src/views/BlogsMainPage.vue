<template>
    <div>
        <Navbar></Navbar>
        <div class="relative bg-amber-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div class="absolute inset-0">
        <div class="h-1/3 bg-amber-50 sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">Latest News</h2>
        </div>
        <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="post.image_url" alt="" />
            </div>
            <div class="flex flex-1 flex-col justify-between bg-white p-6">
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                  
                </p>
                <a :href="'/news-page?id=' + post.id" class="mt-2 block">
                  <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                  <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author }}</span>
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.datetime">{{ post.created_at }}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{{ post.mins_read }} minutes read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <footerBottomVue></footerBottomVue>
    </div>
</template>
<script>
    import Navbar from '../components/navBar';
    import footerBottomVue from '@/components/footerBottom.vue';
    import axios from "axios";
  export default {
    components:{Navbar, footerBottomVue},
    data() {
        return {
            api_url:  process.env.VUE_APP_API_URL,
            posts: []
        };
    },
    created() {
      this.getPosts();
    },
    methods: { 
      getPosts() {
        axios.get(this.api_url + '/api/blog', this.formData)
            .then(response => {
                this.posts = response.data.records
            })
      }
    }
  }
</script>