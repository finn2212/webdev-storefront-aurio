<template>
  <div>
  </div>
</template>
<script>
import { SfAlert, SfAddToCart, SfLoader, SfComponentSelect } from "@storefront-ui/vue"
import {
  getProductNumber,
  getProductOptions,
  getProductUrl,
  getTranslatedProperty,
  getProductQtySteps,
  SfButton
} from "@shopware-pwa/helpers"
import {
  useAddToCart,
  useProductConfigurator,
  useNotifications,
} from "@shopware-pwa/composables"
import { computed, watch, toRefs } from "@vue/composition-api"
import SwButton from "@/components/atoms/SwButton.vue"
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"

export default {
  name: "SwProductDetails",
  components: {
    SfAlert,
    SfAddToCart,
    SfLoader,
    SwProductHeading: () => import("@/components/SwProductHeading.vue"),
    SwProductSelect: () => import("@/components/SwProductSelect.vue"),
    SwPluginSlot,
    SwButton,
    SfComponentSelect
  },
  props: {
    product: {
      type: Object,
    },
    quantityInput: {
      type: Number,
    }
  },
  setup(props, { root }) {
    const { product } = toRefs(props)
    const { addToCart, quantity } = useAddToCart({ product })
    const { pushInfo } = useNotifications()
    quantity.value = Number(props.quantityInput)

    addToCart()

    return {
      
      addToCart,
      getProductNumber
    }
  },

}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

@mixin for-iOS {
  @supports (-webkit-overflow-scrolling: touch) {
    @content;
  }
}

.product-details-wrapper {
  @include for-desktop {
    height: 0;
    transition: height 0.66s ease-out;
  }

  &__loaded {
    @include for-desktop {
      height: auto;
    }
  }
}

.product-details {
  &__action {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: var(--spacer-base) 0 calc(var(--spacer-base) / 2);
  }

  &__action-button {
    padding: var(--spacer-xs) 0;
  }

  &__add-to-cart {
    margin: 1.5rem 0;

    @include for-desktop {
      margin: var(--spacer-xl) 0;
    }

    .sf-add-to-cart__select-quantity {
      border: 1px solid var(--c-dark-variant);
      padding: 0;
      margin: 0;

      ::v-deep .sf-component-select__chevron {
        top: calc(50% + 3px);
      }
    }

    ::v-deep {
      .sf-component-select__error-message {
        display: none;
      }

      .sf-component-select-option {
        padding-left: 16px;
      }
    }
  }

  &__alert {
    margin-top: 1.5rem;
  }

  &__attribute {
    margin-bottom: var(--spacer-base);
  }

  &__description {
    margin: var(--spacer-xl) 0;
    font-family: var(--font-family--secondary);
    font-size: var(--font-size--sm);
  }

  &__heading {
    margin: var(--spacer-base) 0 0 0;

    @include for-desktop {
      margin: var(--spacer-lg) 0 0 0;
    }
  }

  &__mobile-bar {
    display: none;
    padding: var(--spacer-sm) 0;
    box-sizing: border-box;

    .product--is-active & {
      display: block;

      @include for-desktop {
        display: none;
      }
    }

    @include for-desktop {
      display: none;
    }
  }

  &__mobile-top {
    display: flex;
    align-items: center;

    @include for-desktop {
      display: block;
    }
  }

  &__product-number {
    p {
      font-size: var(--font-size--sm);
      font-weight: bold;

      span {
        font-weight: var(--font-size--light);
      }
    }
  }

  &__section {
    padding-bottom: 10px;
    padding-top: 20px;

    @include for-desktop {
      padding-bottom: 0;
    }

    // &-attributes {
    //   height: 50px;
    // }
  }

  &__review {
    padding-bottom: var(--spacer-base);
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);

    &:last-of-type {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    @include for-desktop {
      padding-bottom: var(--spacer-xl);
    }
  }

  &__product-property {
    padding: var(--spacer-2xs) 0;
  }
}
</style>
