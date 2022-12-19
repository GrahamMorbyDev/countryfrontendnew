<template>
    <div class="pt-2 pb-8 bg-white flex justify-center">
        <div class="w-4/5 bg-white border-rounded border-2 border-gray-500">
            <div class="py-8 flex justify-center">
                DEMO ORDER
            </div>
            <div class="py-8 w-1/2 mx-auto">
                <!-- Item -->
                <div class="mt-3 border-gray-200">
                    <label for="item1" class="block text-sm font-medium text-gray-700"
                        >Item1</label
                    >
                    <div class="mt-1">
                        <select id="item1" v-model="item1" name="item1" 
                                class="p-2 w-full block border-gray-300 rounded-md
                                       focus:ring-gray-500 focus:border-gray-500"
                                placeholder="Please select an item">

                            <option v-for="item in items" 
                                    :key="item.id"
                                    :value="item.id">{{ item.title }} (£ {{ item.price }})
                            </option>
                        </select>
                    </div>
                </div>

                
                <!-- Item -->
                <div class="mt-3 border-gray-200">
                    <label for="item1" class="block text-sm font-medium text-gray-700"
                        >Item2</label
                    >
                    <div class="mt-1">
                        <select id="item2" v-model="item2" name="item2" 
                                class="p-2 w-full block border-gray-300 rounded-md
                                       focus:ring-gray-500 focus:border-gray-500"
                                placeholder="Please select an item">

                            <option v-for="item in items" 
                                    :key="item.id"
                                    :value="item.id">{{ item.title }} (£ {{ item.price }})
                            </option>
                        </select>
                    </div>
                </div>

                
                <!-- Submit Button -->
                <div class="mt-3">
                    <button id="submit"
                            type="submit"
                            @click="order"
                            class="mt-2 px-4 py-2
                                   flex justify-center
                                   border border-transparent rounded-md shadow-sm text-sm font-medium
                                   text-white bg-indigo-700
                                   hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >Order</button>
                </div>
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
            api_url:  process.env.VUE_APP_API_URL,

            items:    [],
            item1:    null,
            item2:    null,
            formData: {
                item_ids: [],
                price:    0,
            },
            errors: [],
        };
    },

    created() {
        this.getItems();
    },

    methods: {
        async getItems() {
            const config = {
            };

            var url = this.api_url + '/api/store?per_page=99';

            await axios.get(url, config).then(response => {
                this.items = response.data.records;
            })
        },  
        
        order() {
            var price = 0;
            var ids   = [];
            var item  = '';

            if (this.item1 != null) {
                item = this.items.filter(e => e.id === this.item1);
                ids.push(item[0].id);
                price += parseFloat(item[0].price);
            }
            if (this.item2 != null) {
                item = this.items.filter(e => e.id === this.item2);
                ids.push(item[0].id);
                price += parseFloat(item[0].price);
            }
            this.formData.item_ids = ids;
            this.formData.price    = price;


            axios
            .post(this.api_url + '/api/orders/create', this.formData)
            .then((response) => {
                console.log('response data = ', response.data);
                var token = response.data.token;
                this.$router.push({ path: '/demo_order_pay/' + token });
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
body {
    background-color: white;
}
</style>