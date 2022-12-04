<template>
    <div class="py-8 flex justify-center">

        <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="stripe_public_key"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="v => loading = v"
        />        
        <button @click="submit">Pay now!</button>
    </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import axios from "axios";

export default {
    components: {
        StripeCheckout,
    },

    data() {
        return {
            api_url:          process.env.VUE_APP_API_URL,

            token:            null,

            stripe:   null,
            elements: null,

            stripe_public_key: "pk_test_51LzRbIB57ZsEf8xAdmMu1QY0Fud2JQp0wBpQ7f99QKXlZz1YUVHbQfPLmhDsttQERhwbjr6A62juyXSGdQFn8RyD00bX6P5MNH",
            stripe_session_id: null,

            loading: false,
            successURL: '/demo_stripepay_approved',
            cancelURL: '/demo_stripepay_cancelled',
        };
    },

    created() {
        this.token = this.$route.params.token;
    },

    mounted() {
        console.log("Component mounted.");
        this.initStripe();
        //this.getSession()
    },

    methods: {
        submit () {
            // You will be redirected to Stripe's secure checkout page
            this.$refs.checkoutRef.redirectToCheckout();
        },
    }
};
</script>