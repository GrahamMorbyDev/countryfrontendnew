<template>
    <admin-layout>
        <div>
            <div class="border-b border-gray-200 pb-5 mb-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    {{ mode }} Blog Post
                </h3>
            </div>

            <!-- IMAGE -->
            <div class="flex mb-2">
                <div class="w-1/3">
                    <div class="p-2 block text-right text-base text-gray-700 mr-2">
                        Image
                    </div>
                    <div class="flex justify-end">
                        <div v-if="image_file == null"
                             class="w-2/3 flex justify-center
                                    border-2 border-gray-300 border-dashed rounded-md
                                    hover:border-blue-500"
                             :class="{'border-blue-500': imageDropZoneActive}"
                             @dragover.prevent="imageDropZoneActive = true"
                             @dragenter.prevent="imageDropZoneActive = true"
                             @dragleave.prevent="imageDropZoneActive = false"
                             @drop.prevent="handleImageFileDrop"
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
                                        <span @click="chooseFile('image')">Choose a file</span>
                                        <input id="image_file" name="image_file" type="file" ref="image_file" 
                                            class="sr-only"
                                            @change="chooseImageFileSelected"
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
                                      @click="cancelFile('image')">cancel</span>.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-2/3">
                    <img :src="new_image_url"  class="p-2 h-36" />
                    <div class="w-full p-2">
                        <span class="text-sm text-red-500">{{ errors['image'] }}</span>
                    </div>
                </div>
            </div>

            <!-- TITLE -->
            <div class="flex">
                <div class="w-1/3">
                    <label for="name" 
                        class="p-2 block text-right text-base text-gray-700 mr-2">
                        Title
                    </label>
                </div>
                <div class="w-2/3">
                    <input v-model="post.title" type="text" name="title" id="title"
                        class="p-2 w-full min-w-0
                                rounded-md shadow-sm border-gray-100 border-2
                                focus:ring-indigo-500 focus:border-indigo-500
                                sm:text-sm" />
                    <div class="w-full p-2">
                        <span class="font-small text-red-500">{{ errors['title'] }}</span>
                    </div>
                </div>
            </div>

            <!-- BODY -->
            <div class="flex">
                <div class="w-1/3">
                    <label for="email" 
                            class="p-2 block text-right text-base text-gray-700 mr-2">
                        Body
                    </label>
                </div>
                <div class="w-2/3">
                    <div class="p-0 m-0 w-full min-w-0
                                shadow-sm sm:text-sm">
                        <ckeditor :editor="editor" v-model="post.body" :config="editorConfig"></ckeditor>
                    </div>
                    <div class="w-full p-2">
                        <span class="font-small text-red-500">{{ errors['body'] }}</span>
                    </div>
                </div>
            </div>

            <!-- CREATED AT -->
            <div v-if="mode == 'Edit'"
                 class="flex">
                <div class="w-1/3">
                    <label for="type"  
                        class="p-2 block text-right text-base text-gray-700 mr-2">
                        Created
                    </label>
                </div>
                <div class="w-2/3">
                    <input v-model="post.created_at" type="text" name="created_at" id="created_at"
                        disabled="true"
                        class="p-2 w-full min-w-0
                                rounded-md shadow-sm border-gray-100 border-2
                                focus:ring-indigo-500 focus:border-indigo-500
                                sm:text-sm" />
                    <div class="w-full p-2">
                        <span class="font-small text-red-500">{{ errors['created_at'] }}</span>
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
import ClassicEditor   from '@ckeditor/ckeditor5-build-classic';


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
            editor:       ClassicEditor,
            editorData:   '<p>Content of the editor.</p>',
            editorConfig: {
                toolbar: [ 
                    'heading', '|', 
                    'bold', 'italic', 'link', '|',
                    'bulletedList', 'numberedList', 'decreaseIndent', 'increaseIndent', '|',
                    'blockQuote', 'insertTable', 'undo', 'redo'
                ],
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                    ]
                },
                alignment: {
                    options: [ 'left', 'right', 'center' ]
                },
                language: 'en'
            },

            imageDropZoneActive:  false,
            image_file:           null,

            errors:               [],
            max_size_allowed:     (20 * 1024 * 1024),

            post:                 {},
        };
    },

    created() {
        this.mode  = this.$route.meta.mode;
        this.token = getStorage('token');

        if (this.mode == 'Edit') {
            this.getPost(this.$route.params.id);
        }
        else {
            this.post = {
                'is_draft':  false,
                'title':     '',
                'body':      '',
                'image_url': null
            };
        }
    },
    
    computed: {
        new_image_url() {
            if (this.image_file == null) {
                return this.post.image_url;
            }
            else {
                return URL.createObjectURL(this.image_file);
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
            if (item == 'image') {
                this.image_file = null;
            }
        },

        chooseFile(item) {
            const fileInput = document.getElementById(item + '_file');
            fileInput.click();
        },

        chooseImageFileSelected(event) {
            return this.handleFileDrop(document.getElementById('image_file').files, 'image');
        },
    
        handleImageFileDrop(event) {
            return this.handleFileDrop(event.dataTransfer.files, 'image');
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
                if (item == 'image') {
                    this.image_file = file;
                }
                else {
                    this.background_file = file;
                }
            }
        },


        async getPost(id) {
            this.post = {};

            const headers = {
                "Authorization": "Bearer " + this.token
            }

            await axios.get(this.api_url + '/api/blog/' + id, {headers: headers})
            .then((res) => {
                this.post = res.data;
                //console.log('user = ', this.user);
            })
            .catch(error => {
                console.log('Blog post not retrieved', error);
                this.$router.push({name: 'adminPosts'})
            });
        },

        cancel() {
            this.$router.push({name: 'adminPosts'});
        },

        submit() {
            const headers = {
                "Content-Type":  "multipart/form-data",
                "Authorization": "Bearer " + this.token
            }
            

            let formData = new FormData();

            formData.append("is_draft", this.post.is_draft);
            formData.append("title",    this.post.title);
            formData.append("body",     this.post.body);

            if (this.image_file != null) {
                formData.append("image_file", this.image_file);
            }

            let url = '';
            if (this.mode == 'Edit') {
                url = this.api_url + '/api/blog/' + this.post.id +'/update';
            }
            else {
                url = this.api_url + '/api/blog/create';
            }

            axios.post(url, formData, { headers: headers })
            .then((response) => {
                this.alert('Blog post updated successfully', 'Success', 'success');
                this.$router.push({name: 'adminPosts'})
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