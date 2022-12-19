<template>
    <div class="pt-2 pb-8 bg-white flex justify-center">
        <div class="m-4 p-6 w-1/2 bg-white border-rounded border-2 border-gray-200">

            <form @submit.prevent="pay" id="payment-form">
                <div id="payment-element">
                    <!-- Elements will create form elements here -->
                </div>
                <div id="address-element">
                    <!-- Elements will create form elements here -->
                </div>
                <button id="submit"
                        type="submit"
                        class="mt-3 px-4 py-2
                            flex justify-center
                            border border-transparent rounded-md shadow-sm text-sm font-medium
                            text-white bg-indigo-700
                            hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >Submit</button>

                <div id="error-message">
                    <!-- Display error message to your customers here -->
                </div>
            </form>

        </div>
    </div>
</template>

<script>
//import { StripeElementPayment } from '@vue-stripe/vue-stripe';
import axios from "axios";

export default {
    components: {
    },

    data() {
        return {
            site_url:          process.env.VUE_APP_URL,
            api_url:           process.env.VUE_APP_API_URL,
            stripe_public_key: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
            stripe_pi_secret:  '',

            stripe: null,

            token:             null,
            elements:          null,

            confirm_params:    {
                return_url: '/demo_orderpay_approved',           // success url
            },
        };
    },

    created() {
        this.token = this.$route.params.token;
    },

    mounted() {
        let _self = this;

        _self.stripe = Stripe(_self.stripe_public_key);

        axios.get(this.api_url + '/api/get_pi/' + _self.token).then((res) => {
            //this.elements_options.clientSecret = res.data.pi_secret;
            _self.stripe_pi_secret = res.data.pi_secret;
            console.log('got clientSecret: ' + res.data.pi_secret);

            const options = {
                clientSecret: _self.stripe_pi_secret,
                appearance: {/*...*/},
            };

            // Set up Stripe.js and Elements to use in checkout form, passing the client secret obtained in step 3
            this.elements = _self.stripe.elements(options);

            // Create and mount the Payment Element
            const paymentElement = this.elements.create('payment');
            paymentElement.mount('#payment-element');

            // Create and mount the Address Element in shipping mode
            const addressElement = this.elements.create("address", {
                mode: "shipping",
            });
            addressElement.mount("#address-element");
        });

    },

    methods: {
        async pay() {
            console.log('Paying ...');

            const {error} = await this.stripe.confirmPayment({
                //`Elements` instance that was used to create the Payment Element
                elements: this.elements,
                confirmParams: {
                    return_url: this.site_url + '/demo_order_pay_approved',
                },
            });

            console.log('Stripe Error?', error);

            if (error) {
                // This point will only be reached if there is an immediate error when
                // confirming the payment. Show error to your customer (for example, payment
                // details incomplete)
                const messageContainer = document.querySelector('#error-message');
                messageContainer.textContent = error.message;
            } else {
                // Your customer will be redirected to your `return_url`. For some payment
                // methods like iDEAL, your customer will be redirected to an intermediate
                // site first to authorize the payment, then redirected to the `return_url`.
            }
        },
    }
};
</script>
