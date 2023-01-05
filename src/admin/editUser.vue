<template>
    <admin-layout>
        <div>
            <div class="border-b border-gray-200 pb-5 mb-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ mode }} User
                </h3>
            </div>

            <!-- BACKGROUND -->
            <div class="flex mb-2">
                <div class="w-1/3">
                    <div class="p-2 block text-right text-base text-gray-700 mr-2">
                        Background
                    </div>
                    <div class="flex justify-end">
                        <div v-if="background_file == null"
                             class="w-2/3 flex justify-center
                                    border-2 border-gray-300 border-dashed rounded-md
                                    hover:border-blue-500"
                             :class="{'border-blue-500': bgDropZoneActive}"
                             @dragover.prevent="bgDropZoneActive = true"
                             @dragenter.prevent="bgDropZoneActive = true"
                             @dragleave.prevent="bgDropZoneActive = false"
                             @drop.prevent="handleBackgroundFileDrop"
                        >
                            <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"  fill="none"  viewBox="0 0 48 48"
                                    aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" />
                                </svg>

                                <div class="flex text-sm text-gray-600">
                                    <label for="file-upload"
                                           class="relative cursor-pointer
                                                  bg-white rounded-md
                                                  font-medium text-indigo-600
                                                  hover:text-indigo-500
                                                  focus-within:outline-none  focus-within:ring-2  
                                                  focus-within:ring-offset-2  focus-within:ring-indigo-500"
                                    >
                                        <span @click="chooseFile('background')">Choose a file</span>
                                        <input id="background_file" name="background_file" type="file" ref="background_file" 
                                            class="sr-only"
                                            @change="chooseBackgroundFileSelected"
                                        />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 20MB
                                </p>
                            </div>
                        </div>
                        <div v-else
                             class="w-2/3 flex justify-center
                                    border-2 border-gray-300 border-dashed rounded-md
                                    hover:border-blue-500"
                        >
                            <div class="space-y-1 text-center text-sm">
                                Click update button to apply or 
                                <span class="cursor-pointer
                                             text-indigo-600
                                             hover:text-indigo-500"
                                      @click="cancelFile('background')">cancel</span>.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/3">
                    <img :src="new_background_url"  class="p-2 h-36" />
                    <div class="w-full p-2">
                        <span class="text-sm text-red-500">{{ errors['background'] }}</span>
                    </div>
                </div>
            </div>

            <!-- AVATAR -->
            <div class="flex mb-2">
                <div class="w-1/3">
                    <div class="p-2 block text-right text-base text-gray-700 mr-2">
                        Avatar
                    </div>
                    <div class="flex justify-end">
                        <div v-if="avatar_file == null"
                             class="w-2/3 flex justify-center
                                    border-2 border-gray-300 border-dashed rounded-md
                                    hover:border-blue-500"
                            :class="{'border-blue-500': avatarDropZoneActive}"
                            @dragover.prevent="avatarDropZoneActive = true"
                            @dragenter.prevent="avatarDropZoneActive = true"
                            @dragleave.prevent="avatarDropZoneActive = false"
                            @drop.prevent="handleAvatarFileDrop"
                        >
                            <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"  fill="none"  viewBox="0 0 48 48"
                                    aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" />
                                </svg>

                                <div class="flex text-sm text-gray-600">
                                    <label for="file-upload"
                                        class="relative cursor-pointer
                                                bg-white rounded-md
                                                font-medium text-indigo-600
                                                hover:text-indigo-500
                                                focus-within:outline-none  focus-within:ring-2  
                                                focus-within:ring-offset-2  focus-within:ring-indigo-500"
                                    >
                                        <span @click="chooseFile('avatar')">Choose a file</span>
                                        <input id="avatar_file" name="avatar_file" type="file" ref="avatar_file" 
                                            class="sr-only"
                                            @change="chooseAvatarFileSelected"
                                        />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 20MB
                                </p>
                            </div>
                        </div>
                        <div v-else
                             class="w-2/3 flex justify-center
                                    border-2 border-gray-300 border-dashed rounded-md
                                    hover:border-blue-500"
                        >
                            <div class="space-y-1 text-center text-sm">
                                Click update button to apply or 
                                <span class="cursor-pointer
                                             text-indigo-600
                                             hover:text-indigo-500"
                                      @click="cancelFile('avatar')">cancel</span>.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/3">
                    <img :src="new_avatar_url"  class="p-2 h-36" />
                    <div class="w-full p-2">
                        <span class="text-sm text-red-500">{{ errors['avatar'] }}</span>
                    </div>
                </div>
            </div>


            <div class="flex">
                <div class="w-1/2">
                    <!-- NAME -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="name" 
                                class="p-2 block text-right text-base text-gray-700 mr-2">
                                Name
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="user.name" type="text" name="name" id="name"
                                class="p-2 w-full min-w-0
                                        rounded-md shadow-sm border-gray-100 border-2
                                        focus:ring-indigo-500 focus:border-indigo-500
                                        sm:text-sm" />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['name'] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- EMAIL -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="email" 
                                    class="p-2 block text-right text-base text-gray-700 mr-2">
                                Email
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="user.email" type="text" name="email" id="email"
                                class="p-2 w-full min-w-0
                                        rounded-md shadow-sm border-gray-100 border-2
                                        focus:ring-indigo-500 focus:border-indigo-500
                                        sm:text-sm" />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['email'] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- EMAIL VERIFIED AT -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="type"  
                                class="p-2 block text-right text-base text-gray-700 mr-2">
                                Email Verified
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="user.email_verified_at" type="text" name="email_verified_at" id="email_verified_at"
                                disabled="true"
                                class="p-2 w-full min-w-0
                                        rounded-md shadow-sm border-gray-100 border-2
                                        focus:ring-indigo-500 focus:border-indigo-500
                                        sm:text-sm" />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['email_verified_at'] }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-1/3">
                    <!-- PASSWORD -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="name" 
                                class="p-2 block text-right text-base text-gray-700 mr-2">
                                Password
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="new_password" type="text" name="new_password" id="new_password"
                                class="p-2 w-full min-w-0
                                        rounded-md shadow-sm border-gray-100 border-2
                                        focus:ring-indigo-500 focus:border-indigo-500
                                        sm:text-sm" />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['new_password'] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- IS_CREATOR -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="name" 
                                class="p-2 block text-right text-base text-gray-700 mr-2">
                                Is Creator
                            </label>
                        </div>
                        <div class="w-2/3 pt-2">
                            <input type=checkbox name="is_creator" id="is_creator"
                                :checked="user.is_creator == true"
                                @click="user.is_creator = !user.is_creator;" />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['is_creator'] }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- MEMBERSHIP STARTED AT -->
                    <div class="flex">
                        <div class="w-1/3">
                            <label for="type"  
                                class="p-2 block text-right text-base text-gray-700 mr-2">
                                Membership Started
                            </label>
                        </div>
                        <div class="w-2/3">
                            <Datepicker v-model="user.membership_started_at" 
                                        :enableTimePicker="true"  :clearable="false" 
                                        :format="'yyyy-MM-dd HH:mm:ss'"
                                        />
                            <div class="w-full p-2">
                                <span class="font-small text-red-500">{{ errors['membership_started_at'] }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="mt-5 pt-2">
            <div class="flex justify-end">
                <button @click="cancel"
                        class="ml-3 inline-flex justify-center py-2 px-4
                               border border-transparent
                               shadow-sm font-medium rounded-md
                               text-gray-900 bg-gray-300 
                               hover:bg-gray-500">
                    Cancel
                </button>
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

    </admin-layout>
</template>

<script>
import { getStorage }  from "@/saveStorage";
import AdminLayout     from "@/layouts/adminLayout.vue";
import axios           from "axios";
import Datepicker      from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
    components: {
        AdminLayout,
        Datepicker
    },

    data() {
        return {
            api_url:      process.env.VUE_APP_API_URL,
            token:        null,

            mode:                 '',

            bgDropZoneActive:     false,
            avatarDropZoneActive: false,
            avatar_file:          null,
            background_file:      null,

            errors:               [],
            max_size_allowed:     (20 * 1024 * 1024),

            user:         {},
            password_in:  '********',
        };
    },

    created() {
        this.mode  = this.$route.meta.mode;
        this.token = getStorage('token');

        this.getUser(this.$route.params.id);
    },
    
    computed: {
        new_background_url() {
            if (this.background_file == null) {
                return this.user.background_url;
            }
            else {
                return URL.createObjectURL(this.background_file);
            }
        },

        new_avatar_url() {
            if (this.avatar_file == null) {
                return this.user.avatar_url;
            }
            else {
                return URL.createObjectURL(this.avatar_file);
            }
        },
    },

    methods: {
        alert(html, title = 'Error', icon = 'error') {
            this.$swal({
                    color:              'gray-900',
                    title:              title,
                    html:               html,
                    confirmButtonColor: 'indigo-600',
                    confirmButtonText:  'OK',
                    icon:               icon,
                    background:         'grey-300',
                });
        },


        cancelFile(item) {
            if (item == 'avatar') {
                this.avatar_file = null;
            }
            else {
                this.background_file = null;
            }
        },

        chooseFile(item) {
            const fileInput = document.getElementById(item + '_file');
            fileInput.click();
        },

        chooseBackgroundFileSelected(event) {
            return this.handleFileDrop(document.getElementById('background_file').files, 'background');
        },
        chooseAvatarFileSelected(event) {
            return this.handleFileDrop(document.getElementById('avatar_file').files, 'avatar');
        },
    
        handleBackgroundFileDrop(event) {
            return this.handleFileDrop(event.dataTransfer.background_file, 'background');
        },
        handleAvatarFileDrop(event) {
            return this.handleFileDrop(event.dataTransfer.avatar_file, 'avatar');
        },
        handleFileDrop(files, item) {
            this.errors[item] = '';

            if (files.length > 1) {
                this.alert('Only 1 ' + item + ' can be uploaded');
                return;
            }
    
            // Go through dropped files and handle pre-upload-checks
            for (let i = 0; i < files.length; i++) {
                let file = files.item(i);
                let max_size     = 0;
                // Check selected file-types
                if (file.type.substr(0, 5) == 'image') {
                    if (file.size > this.max_size_allowed) {
                        this.alert('File is too large');
                        return;
                    }
                }
                else {
                    this.alert('File must be an image-type');
                    return;
                }

                // Add to list
                if (item == 'avatar') {
                    this.avatar_file = file;
                    document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])
                }
                else {
                    this.background_file = file;
                }
            }
        },


        async getUser(id) {
            this.user = {};

            const headers = {
                "Authorization": "Bearer " + this.token
            }

            await axios.get(this.api_url + '/api/admin/users/' + id, {headers: headers})
            .then((res) => {
                this.user = res.data;
                //console.log('user = ', this.user);
            })
            .catch(error => {
                console.log('user not retrieved', error);
                this.$router.push({name: 'adminUsers'})
            });
        },

        cancel() {
            this.$router.push({name: 'adminUsers'});
        },

        submit() {
            const headers = {
                "Content-Type":  "multipart/form-data",
                "Authorization": "Bearer " + this.token
            }
            

            let formData = new FormData();

            formData.append("name",         this.user.name);
            formData.append("email",        this.user.email);
            formData.append("is_creator",   this.user.is_creator);

            if (this.new_password != null) {
                formData.append("new_password", this.new_password);
            }
            if (this.background_file != null) {
                formData.append("background_file", this.background_file);
            }
            if (this.avatar_file != null) {
                formData.append("avatar_file", this.avatar_file);
            }


            axios.post(this.api_url + '/api/admin/users/' + this.user.id +'/update', 
                       formData, 
                       { headers: headers })
            .then((response) => {
                this.alert('User updated successfully', 'Success', 'success');
                this.$router.push({name: 'adminUsers'})
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
    }
}
</script>