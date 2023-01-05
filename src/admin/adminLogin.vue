<template>
    <form-layout>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img  class="mx-auto h-24 w-auto"  src="@/assets/logo.png" alt="" />
                <p class="mt-2 text-center text-sm text-white">
                    Admin login
                </p>
            </div>
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <div class="space-y-6">
                        <!-- Birth Day -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input type="text"
                                       v-model="formData.email"  name="email"  id="email"
                                       class="p-2 shadow-sm block w-full border-gray-300 rounded-md
                                              focus:ring-indigo-500 focus:border-indigo-500
                                              sm:text-sm"
                                    placeholder="you@example.com"
                                />
                                <span class="font-small text-indigo-800">{{ errors['email'] }}</span>
                            </div>
                        </div>

                        <!-- Birth Month -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input type="password"
                                       v-model="formData.password"  name="password"  id="password"
                                       class="p-2 shadow-sm block w-full border-gray-300 rounded-md
                                              focus:ring-indigo-500 focus:border-indigo-500
                                              sm:text-sm"
                                />
                                <span class="font-small text-indigo-800">{{ errors['password'] }}</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="text-sm">
                                    <span class="font-medium text-indigo-600 hover:text-indigo-500">
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div>
                            <button type="submit"
                                    @click="loginToAccount"
                                    class="py-2 px-4 w-full flex justify-center
                                        border border-transparent rounded-md shadow-sm
                                        text-sm font-medium text-white
                                        bg-pink-700
                                        hover:bg-pink-900
                                        focus:outline-none
                                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form-layout>
</template>

<script>
import { useStore } from "vuex";
import axios from "axios";
import { saveStorage } from "@/saveStorage";
import formLayout from '@/layouts/formLayout'
export default {
    data() {
        return {
            api_url:  process.env.VUE_APP_API_URL,
            formData: {
                email:    '',
                password: ''
            },
            store:    useStore(),
            errors:   [],
        };
    },

    components: {
        formLayout
    },

    methods: {
        loginToAccount() {
            axios.post(this.api_url + '/api/login', this.formData)
            .then(response => {
                this.error = false
                saveStorage('auth', response.data)
                saveStorage('token', response.data.token)
                saveStorage('isAdmin', response.data.is_admin)
                this.$router.push({name: 'adminHome'})
            })
            .catch(error => {
                var error_msg     = '';
                var error_details = '';
                if (error.response.data.message) {
                    error_msg = error.response.data.message;	
                }
                
                if (error.response.data.errors) {
                    Object.keys(error.response.data.errors).forEach(key => {
                        error_details = error_details + error.response.data.errors[key].toString() + "<br>";

                        // load api errors into client errors
                        this.errors[key] = error.response.data.errors[key].toString();
                    });
                }

                this.$swal({
                    title:              error_msg,
                    html:               error_details,
                    confirmButtonColor: '#be185d',
                    confirmButtonText:  'Close',
                    icon:               'error',
                    background:         '#3f3f46',
                })
            });
        }
    }
};
</script>

<style>
</style>