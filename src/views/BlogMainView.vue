<template>
    <div>
        <Navbar></Navbar>
        <div class="overflow-hidden bg-white">
            <div class="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
                <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
                <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    <div>
                         <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">{{blog.title}}</h3>
                    </div>
                </div>
                <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div class="relative lg:col-start-2 lg:row-start-1">
                        <svg class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block" width="404" height="384"
                            fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                                    patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                        </svg>
                        <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                            <figure>
                                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                                    <img class="rounded-lg object-cover object-center shadow-lg"
                                        :src="blog.image_url"
                                        :alt="blog.title" width="1184"
                                        height="1376" />
                                </div>
                                <figcaption class="mt-3 flex text-sm text-gray-500">
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="mt-8 lg:mt-0">
                        <div
                            class="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none" v-html="blog.body">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <threePageBlogVue></threePageBlogVue>
        <footerBottomVue></footerBottomVue>
    </div>
</template>

<script>
import Navbar from '../components/navBar';
import threePageBlogVue from '@/components/threePageBlog.vue';
import footerBottomVue from '@/components/footerBottom.vue';
import { CameraIcon } from '@heroicons/vue/20/solid'
import axios from 'axios';
export default {
    components: {
        Navbar, threePageBlogVue, footerBottomVue, CameraIcon
    },
    data() {
        return {
            api_url: process.env.VUE_APP_API_URL,
            blog: {},
            id: 1
        };
    },
    created() {
        this.id = this.$route.query.id
        this.getPost();
    },
    methods: {
        getPost() {
            axios.get(this.api_url + '/api/blog/' + this.id)
                .then(response => {
                    this.blog = response.data

                })
        }
    }
}
</script>