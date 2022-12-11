<template>
    <div class="py-8 flex justify-center">
        STRIPE APPROVED
    </div>
</template>

<script>
import axios from "axios";
export default {
    components: {
    },

    data() {
        return {
            api_url:          process.env.VUE_APP_API_URL,
        };
    },

    mounted() {
        console.log("Stripe Pay Approved mounted.");
    },

    methods: {
    }
};
</script>