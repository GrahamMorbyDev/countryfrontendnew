<template>
    <admin-layout>
        <div class="flex items-center justify-between mb-2 bg-white rounded-t-lg">
            <div class="min-w-0 mr-3">
                <h2 class="text-2xl leading-7 text-blue-600 sm:text-3xl sm:truncate">All Blog Posts</h2>
            </div>
            <div class="flex-1">
                <form class="w-full flex ml-0" action="#" method="GET">
                    <label for="search-field" class="sr-only">Search</label>
                    <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                            <SearchIcon class="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input id="search-field" type="search" name="search"
                            class="block w-full h-full pl-8 pr-3 py-2 text-gray-900 placeholder-gray-400 
                                   rounded-md border-gray-300 border-2 shadow-sm
                                   focus:border-indigo-500 focus:outline-none sm:text-sm" 
                            placeholder="Search" />
                    </div>
                </form>
            </div>
            <div class="mt-4 flex mt-0 ml-4">
                <button type="button" 
                        class="inline-flex items-center px-4 py-2 
                               border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                               bg-green-400 hover:bg-green-600" 
                        @click="addBlog">Add Post</button>
                <p class="mt-2 pr-2 text-indigo-600 font-bold">Page {{ page }} of {{ page_count }}</p>
                <button type="button" 
                        :disabled="isFirstPage == true"
                        class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 
                               disabled:bg-red-200
                               hover:bg-gray-700 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" 
                        @click="getLastPage">Previous</button>
                <button type="button" 
                        :disabled="isLastPage == true"
                        class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 
                               disabled:bg-red-200
                               hover:bg-indigo-600 
                               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500" 
                        @click="getNextPage">Next</button>
            </div>
        </div>

        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-2 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col" class="py-1 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
                                        <th scope="col" class="px-3 py-1 text-left text-sm font-semibold text-gray-900">Author</th>
                                        <th scope="col" class="px-3 py-1 text-left text-sm font-semibold text-gray-900">Date</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="post in posts" :key="post.id">
                                        <td class="whitespace-nowrap      py-1 pl-4 pr-3"><img :src="post.image_url"  class="h-8" /></td>
                                        <td class="whitespace-nowrap      py-1 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ post.title }}</td>
                                        <td class="whitespace-nowrap px-3 py-1 text-sm text-gray-500">{{ post.author }}</td>
                                        <td class="whitespace-nowrap px-3 py-1 text-sm text-gray-500">{{ post.created_at }}</td>
                                        <td class="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <router-link :to="'/admin/posts/' + post.id + '/edit'" class="text-indigo-600 hover:text-indigo-900"
                                            >Edit</router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </admin-layout>
</template>

<script>
import AdminLayout from '@/layouts/adminLayout.vue'
import axios from "axios";
import { getStorage } from "@/saveStorage";
export default {
    components: {
        AdminLayout
    },
    data() {
      return {
        api_url:    process.env.VUE_APP_API_URL,
        token:      null,

        posts:      [],
        page:       0,
        page_count: 0,
        search:     '',
      }
    },

    created() {
        this.token = getStorage('token')
        this.search = this.$route.query.search;
    },
    mounted() {
        this.getAllPosts()
    },

    computed: {
        isFirstPage() {
            return (this.page == 1);
        },
        isLastPage() {
            return (this.page == this.page_count);
        }
    },

    methods: {
        addPost() {
        },

        async getAllPosts() {
            const config = {
                headers: { Authorization: `Bearer ` + this.token.replace(/^"(.+(?="$))"$/, '$1') }
            };
            const bodyParameters = {
                key: "value"
            };

            var url = this.api_url + '/api/blog';
            url = url + '?q=' + (this.search || '');
            url = url + '&page=1';

            await axios.get(url, config).then(response => {
                //console.log(response.data)
                this.posts      = response.data.records;
                this.page       = response.data.pagination.page;
                this.page_count = response.data.pagination.page_count;
                this.search     = response.data.search.q;
            });
        },

        async getNextPage() {
            const config = {
                headers: { Authorization: `Bearer ` + this.token }
            };

            const bodyParameters = {
                key: "value"
            };

            var url = this.api_url + '/api/blog';
            url = url + '?q=' + (this.search || '');
            url = url + '&page=' + parseInt(this.page + 1);

            await axios.get(url, config).then(response => {
                this.posts      = response.data.records;
                this.page       = response.data.pagination.page;
                this.page_count = response.data.pagination.page_count;
                this.search     = response.data.search.q;
            })
        },

        async getLastPage() {
            const config = {
                headers: { Authorization: `Bearer ` + this.token }
            };

            const bodyParameters = {
                key: "value"
            };

            var url = this.api_url + '/api/blog';
            url = url + '?q=' + (this.search || '');
            url = url + '&page=' + parseInt(this.page + 1);

            await axios.get(url, config).then(response => {
                this.posts      = response.data.records;
                this.page       = response.data.pagination.page;
                this.page_count = response.data.pagination.page_count;
                this.search     = response.data.search.q;
            })
        },
    },
}
</script>

<style>

</style>