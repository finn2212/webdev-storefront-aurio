<template>
  <div class="sw-checkout-summary">
    <div class="sw-checkout-summary__addresses">
      <SwAddressManager v-if="shippingAddress" :title-text="$t('Shipping address')"
        class="sw-checkout-summary__addresses-wrapper" :addresses="addresses" :active-address="shippingAddress"
        @change="changeActiveShippingAddress" @added="changeActiveShippingAddress" />

      <SwAddressManager v-if="sessionContext" :title-text="$t('Billing address')"
        class="sw-checkout-summary__addresses-wrapper" :addresses="addresses" :active-address="sessionContext.customer.defaultBillingAddress"
        @change="changeActiveBillingAddress" @added="addedActiveBillingAddress" />

      <SwAddressManager v-else :title-text="$t('Billing address')" class="sw-checkout-summary__addresses-wrapper"
        :addresses="addresses" :active-address=" shippingAddress " @change="changeActiveBillingAddress"
        @added="addedActiveBillingAddress" />
    </div>
    <PaymentSection class="sw-checkout-summary__payment" />
    <ShippingSection class="sw-checkout-summary__shipping" />
  </div>
</template>

<script>
import PaymentMethodSummary from "@/components/checkout/summary/PaymentMethodSummary.vue"
import ShippingSection from "@/components/checkout/ShippingSection.vue"
import PaymentSection from "@/components/checkout/PaymentSection.vue"
import SwAddressManager from "@/components/forms/SwAddressManager.vue"
import {
  useCart,
  useCustomerAddresses,
  useSessionContext,
  useUser,
  useOrderDetails,
  useCheckout
} from "@shopware-pwa/composables"
import {  ref, computed } from "@vue/composition-api"

export default {
  name: "CheckoutSummary",
  components: {
    PaymentMethodSummary,
    ShippingSection,
    PaymentSection,
    SwAddressManager,
  },
  setup() {
    const { addresses, loadAddresses, markAddressAsDefault} = useCustomerAddresses()
    loadAddresses()
    const {  shippingAddress, billingAddress } = useCheckout()  

    const {
      activeShippingAddress,
      setActiveShippingAddress,
      activeBillingAddress,
      setActiveBillingAddress,
      sessionContext
    } = useSessionContext()

    const changeActiveShippingAddress = async (addressId) => {
      loadAddresses()
      setActiveShippingAddress({ id: addressId });
    }
    const addedActiveShippingAddress = async (addressId) => {
      setActiveShippingAddress({ id: addressId });
      loadAddresses()
    }

    const changeActiveBillingAddress = async (addressId) => {
      loadAddresses()
      await setActiveShippingAddress({ id: addressId });

    }
    const addedActiveBillingAddress = async (addressId) => {
      loadAddresses()
      setActiveBillingAddress({ id: addressId })
    }

    return {
      addresses,
      sessionContext,
      activeShippingAddress,
      changeActiveShippingAddress,
      addedActiveShippingAddress,
      activeBillingAddress,
      changeActiveBillingAddress,
      addedActiveBillingAddress,
      billingAddress,
      shippingAddress
    }
  },
  computed: {
    shipping() {
      return {} // this.order.shipping
    },
    shippingMethod() {
      return { label: "" }
    },
    payment() {
      return {} // this.order.payment
    },
    paymentMethod() {
      return { label: "" }
    },
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-checkout-summary {
  &__addresses {
    @include for-mobile {
      &-wrapper {
        &:last-child {
          margin-top: var(--spacer-base);
        }
      }
    }

    @include for-desktop {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      &-wrapper {
        width: 48%;
      }
    }
  }
}
</style>
A