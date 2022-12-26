<template>
    <admin-form-layout>
        <div>
            <div class="border-b border-gray-200 pb-5 mb-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    User edit
                </h3>
            </div>
            <div class="grid grid-cols-6 gap-3">
                <div class="col-span-2">
                    <label for="type"  class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        Type
                    </label>
                </div>
                <div class="col-span-2 rounded-md shadow-sm">
                    <input v-model="user.member_status" type="text" name="type" id="type"
                           disabled="true"
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-100
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                </div>
                <div class="col-span-2">
                </div>

                <div class="col-span-2">
                    <label for="name" 
                            class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        Username
                    </label>
                </div>
                <div class="col-span-3 rounded-md shadow-sm">
                    <input v-model="user.name" type="text"
                           name="name" id="name"
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-300
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                    <span class="font-small text-indigo-800">{{ errors['name'] }}</span>
                </div>
                <div class="col-span-1">
                </div>

                <div class="col-span-2">
                    <label for="email" 
                            class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        Email
                    </label>
                </div>
                <div class="col-span-4 rounded-md shadow-sm">
                    <input v-model="user.email" type="text"
                           name="email" id="email"
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-300
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                    <span class="font-small text-indigo-800">{{ errors['email'] }}</span>
                </div>

                <div class="col-span-2">
                    <label for="password" 
                            class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        Password
                    </label>
                </div>
                <div class="col-span-2 rounded-md shadow-sm">
                    <input v-model="password_in" type="text"
                           v-on:keydown="entering_password()"
                           name="password" id="password"
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-300
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                    <span class="font-small text-indigo-800 text-sm">{{ errors['password'] }}</span>
                </div>
                <div class="col-span-2">
                </div>

                <div class="col-span-2">
                    <label for="ccbill_subscription_id" 
                            class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        ccBill Subscription ID
                    </label>
                </div>
                <div class="col-span-2 rounded-md shadow-sm">
                    <input v-model="user.subscription_id" type="text" name="subscription_id" id="subscription_id"
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-300
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                    <span class="font-small text-indigo-800">{{ errors['subscription_id'] }}</span>
                </div>
                <div class="col-span-2">
                </div>

                <div class="col-span-2">
                    <label for="ccbill_expires_at" 
                            class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        ccBill Expiry Date
                    </label>
                </div>
                <div class="col-span-2 rounded-md shadow-sm">
                    <input v-model="user.expires_at" type="text"
                           name="expires_at" id="expires_at" 
                           class="flex-1 block w-full min-w-0
                                  rounded-none rounded-r-md border-gray-300
                                  focus:ring-indigo-500 focus:border-indigo-500
                                  sm:text-sm" />
                    <span class="font-small text-indigo-800">{{ errors['expires_at'] }}</span>
                </div>
                <div class="col-span-2">
                </div>
            </div>
        </div>


        <div class="mt-5 pt-5">
            <div class="flex justify-end">
                <button type="submit"  
                        @click="submit"
                        class="ml-3 inline-flex justify-center py-2 px-4
                                border border-transparent
                                shadow-sm font-medium rounded-md
                                text-white
                                bg-indigo-600 
                                hover:bg-indigo-700
                                disabled:opacity-50">
                    Update
                </button>
            </div>
        </div>


        <div>
            <div class="grid grid-cols-6 gap-3">
                <div class="col-span-2">
                    <div class="block text-right font-medium text-gray-700 mt-px pt-2 mr-2">
                        ccBill Subscription Info
                    </div>
                </div>
                <div class="col-span-2">
                </div>

                <div class="col-span-6 rounded-md shadow-sm">
                    <div      class="flex-1 block w-full min-w-0
                                     overflow-auto
                                     rounded-none rounded-r-md border-gray-300
                                     focus:ring-indigo-500 focus:border-indigo-500
                                     sm:text-sm">
                        <pre id="json">{{ JSON.stringify(user.membership_data, undefined, 2) }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </admin-form-layout>
</template>

<script>
import { getStorage }  from "@/saveStorage";
import AdminFormLayout from "@/layouts/adminFormLayout.vue";
import axios           from "axios";

export default {
    components: {
        AdminFormLayout,
    },

    data() {
        return {
            api_url:      process.env.VUE_APP_API_URL,
            token:        null,
            errors:       [],

            user:         {},
            password_in:  '********',
            entered_password: false,
        };
    },

    created() {
        this.token = getStorage('token');

        this.getUser(this.$route.params.id);
    },
    
    computed: {
    },

    methods: {
        async getUser(id) {
            this.user = {};

            const headers = {
                "Authorization": "Bearer " + this.token
            }

            axios.get(this.api_url + '/api/admin/users/' + id, {headers: headers})
            .then((res) => {
                this.user = res.data;
                //console.log('user = ', this.user);
            })
            .catch(error => {
                console.log('user not retrieved', error);
                this.$router.push({name: 'adminUsers'})
            });
        },

        submit() {
            const headers = {
                "Authorization": "Bearer " + this.token
            }
            
            if (this.entered_password == true) {
                var user_data = {
                    'name':            this.user.name,
                    'email':           this.user.email,
                    'password':        this.password_in,
                    'is_admin':        this.user.is_admin,
                    'subscription_id': this.user.subscription_id,
                    'expires_at':      this.user.expires_at,
                }
            }
            else {
                var user_data = {
                    'name':            this.user.name,
                    'email':           this.user.email,
                    'is_admin':        this.user.is_admin,
                    'subscription_id': this.user.subscription_id,
                    'expires_at':      this.user.expires_at,
                }
            }


            axios.post(this.api_url + '/api/admin/users/' + this.user.id +'/update',user_data, { headers: headers })
            .then((response) => {
                this.$swal({
                    title:              'User Updated',
                    confirmButtonColor: '#be185d',
                    confirmButtonText:  'Close',
                    icon:               'success',
                    background:         '#3f3f46',
                });
                this.$router.push({name: 'allUsers'})
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
            });
        },

        entering_password() {
            if (this.entered_password != true) {
                this.password_in      = '';
                this.entered_password = true;
            }
        }
    }
}
</script>