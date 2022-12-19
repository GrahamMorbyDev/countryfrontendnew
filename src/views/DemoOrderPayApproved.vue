<template>
    <div class="pt-2 pb-8 bg-white flex justify-center">
        <div class="w-4/5 bg-white border-rounded border-2 border-gray-500">
            ORDER PAYMENT STRIPE APPROVED
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
        };
    },

    mounted() {
    },

    methods: {
    }
};
</script>