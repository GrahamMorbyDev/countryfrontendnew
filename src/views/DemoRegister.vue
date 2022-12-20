<template>
    <div>
        <div class="py-8 flex justify-center">
            DEMO REGISTER
        </div>
        <div class="py-8 w-1/2 mx-auto">
            <div class="mt-3">
                <label for="email" class="block text-sm font-medium text-gray-700"
                    >Email</label
                >
                <div class="mt-1">
                    <input
                        type="text"
                        v-model="formData.email"
                        name="email"
                        id="email"
                        class="p-2 w-full block border-gray-300 ring-gray-300 rounded
                               focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Email"
                    />
                    <span class="font-small text-gray-800">{{ errors['email'] }}</span>
                </div>
            </div>

            <div class="mt-3">
                <label for="password" class="block text-sm font-medium text-gray-700"
                    >Password</label
                >
                <div class="mt-1">
                    <input
                        type="password"
                        v-model="formData.password"
                        name="password"
                        id="password"
                        class="p-2 w-full block border-gray-300 ring-gray-300 rounded
                               focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Must be a minimum of six characters"
                    />
                    <span class="font-small text-gray-800">{{ errors['password'] }}</span>
                </div>
            </div>

            <div class="mt-3">
                <label for="password" class="block text-sm font-medium text-gray-700"
                    >Confirm Password</label
                >
                <div class="mt-1">
                    <input
                        type="password"
                        v-model="formData.c_password"
                        name="confirmPassword"
                        id="confirmPassword"
                        class="p-2 w-full block border-gray-300 ring-gray-300 rounded
                               focus:ring-gray-500 focus:border-gray-500"
                        placeholder="Must match your password"
                    />
                    <span class="font-small text-gray-800">{{ errors['c_password'] }}</span>
                </div>
            </div>
            
            <!-- Submit Button -->
            <div class="mt-3">
                <button
                    type="submit"
                    @click="register"
                    class="mt-2 px-4 py-2
                           flex justify-center
                           border border-transparent rounded-md shadow-sm text-sm font-medium
                           text-white bg-indigo-700
                           hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Continue
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    components: {
    },

    data() {
        return {
            api_url: process.env.VUE_APP_API_URL,

            formData: {
                email:      "",
                password:   "",
                c_password: "",
            },
            errors: [],
        };
    },

    created() {
    },

    methods: {
        register() {
            axios
            .post(this.api_url + '/api/register', this.formData)
            .then((response) => {
                console.log('response data = ', response.data);
                var token = response.data.token;
                this.$router.push({ path: '/demo_register_pay/' + token });
            });
            /*
            .catch((error) => {
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
            });
            */
        }
    },
};
</script>
  
<style>
</style>