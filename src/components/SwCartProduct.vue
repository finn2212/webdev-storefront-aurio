<template>
  <SfCollectedProduct v-model="quantity" :image="productImage" :title="product.label"
    :regular-price="filterPrice(regularPrice)" :special-price="filterPrice(specialPrice)" :link="productUrl"
    :stock="stock" class="sw-collected-product" :class="{
      promotion: isPromotion,
      'sw-collected-product--hidden-remove-btn': hiddenRemoveButton,
    }" @click:remove="removeItem(product)">
    <template #configuration>
      <div class="sw-collected-product__configuration" v-if="options">
        <SfProperty v-for="option in options" :key="`${option.group}-${option.option}`" :name="option.group"
          :value="option.option" />
      </div>
    </template>
    <template #price>
      <div class="sw-collected-product__configuration" v-if="options">
        <SwPluginSlot name="collected-product-price" :slot-context="product">
          <SfPrice v-if="regularPrice" :regular="filterPrice(regularPrice)" :special="filterPrice(specialPrice)" />
        </SwPluginSlot>
      </div>
      <div v-if="product.label != 'capellaprint Musterheft mit kostenfreiem Versand in Deutschland'"
        style="margin-top: -20px;">
        <p class="m-0" style="font-size: 12px;" v-for="el in propertieStrings">{{ el.id }}: {{ el.name }} </p>
      </div>
      <button @click="removeItem(product)"
        style=" border: 0px; background-color: black; color: white;  border-radius: 15px;">
        Entfernen
      </button>
    </template>
    <template #image>
      <SwImage v-if="!isPromotion" :src="productImage" :alt="product.label" :width="140" :height="200" />
      <div v-else>
        <svg viewBox="0 0 24 24" preserveAspectRatio="none" class="sf-icon-path">
          <path
            d="M18.6 8.40005H15.8734C16.0794 8.04639 16.1997 7.63715 16.1997 7.19981C16.1997 5.88005 15.1204 4.80005 13.7999 4.80005C13.0841 4.80005 12.4407 5.11926 11.9999 5.6206C11.559 5.11926 10.9157 4.80005 10.1999 4.80005C8.87942 4.80005 7.80012 5.88005 7.80012 7.19981C7.80012 7.63645 7.92036 8.04567 8.12637 8.40005H5.40027C5.03956 8.40005 4.7998 8.63981 4.7998 8.99981V11.4003C4.7998 11.7603 5.03956 12 5.39957 12V18.6003C5.39957 18.9596 5.63933 19.2 5.99933 19.2H17.9996C18.3596 19.2 18.6 18.9596 18.6 18.6003V12C18.9593 12 19.1998 11.7603 19.1998 11.4003V8.99981C19.1998 8.63981 18.9593 8.40005 18.6 8.40005ZM17.9996 10.7998H12.5996V9.60028H17.9996V10.7998ZM13.7999 6.0003C14.4594 6.0003 15.0001 6.5403 15.0001 7.20054C15.0001 7.86008 14.4594 8.40007 13.7999 8.40007H12.5996V7.19984C12.5996 6.5403 13.1403 6.0003 13.7999 6.0003ZM8.99961 7.19983C8.99961 6.53959 9.53961 5.99959 10.1999 5.99959C10.8601 5.99959 11.4001 6.53959 11.4001 7.19983V8.40007H10.1999C9.53961 8.40007 8.99961 7.86007 8.99961 7.19983ZM6.00001 9.60031H11.4V10.7999H6.00001V9.60031ZM6.59981 12.0001H11.4001V17.9998H6.59981V12.0001ZM17.3999 17.9998H12.5996V12.0001H17.3999V17.9998Z"
            fill="var(--icon-color)" style="height: 100%"></path>
        </svg>
        <div class="sw-collected-product__caption">
          {{ $t("Promotion code") }}
        </div>
      </div>
    </template>
    <template #input>
      <div class="sf-collected-product__quantity-wrapper">
        <SfComponentSelect v-if="purchaseStepsOptions" v-model="quantity"
          class="sf-collected-product__quantity-selector sw-select sf-select-quantity sw-select sw-form__input">
          <SfComponentSelectOption v-for="step in purchaseStepsOptions" :key="step" :value="step">
            {{ step }}
          </SfComponentSelectOption>
        </SfComponentSelect>
        <SfQuantitySelector v-else :qty="quantity" class="sf-collected-product__quantity-selector"
          @input="$emit('input', $event)" />
      </div>
    </template>
  </SfCollectedProduct>
</template>
<script>
import { getProductMainImageUrl, getProductUrl, getProductQtySteps } from "@shopware-pwa/helpers"
import { useCart, useCartItem } from "@shopware-pwa/composables"
import { ref, watch, computed } from "@vue/composition-api"
import { SfCollectedProduct, SfProperty, SfPrice, SfQuantitySelector, SfComponentSelect } from "@storefront-ui/vue"
import getResizedImage from "@/helpers/images/getResizedImage.js"
import SwImage from "@/components/atoms/SwImage.vue"
import { usePriceFilter } from "@/logic/usePriceFilter.js"
import SwPluginSlot from "sw-plugins/SwPluginSlot.vue"

export default {
  name: "SwCartProduct",
  components: {
    SfCollectedProduct,
    SfProperty,
    SwImage,
    SfPrice,
    SwPluginSlot,
    SfQuantitySelector,
    SfComponentSelect
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    additionalItemsData: {
      type: Array,
      default: () => [],
    },
    hiddenRemoveButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      propertieStrings: []
    }
  },
  setup(props) {
    const {
      removeItem,
      changeItemQuantity,
      itemRegularPrice,
      itemSpecialPrice,
      itemOptions,
      itemStock,
      itemQuantity,
      itemType,
      itemImageThumbnailUrl,
      isProduct,
      isPromotion,
      getProductItemSeoUrlData,
      getProductQtySteps
    } = useCartItem({ cartItem: props.product })

    // get the URL from async loaded product data - passed by the parent component
    const productUrl = computed(() => {
      const matchingProductAdditionalData = props.additionalItemsData.find(
        ({ id }) => id === props.product.referencedId
      )
      return getProductUrl(matchingProductAdditionalData)
    })
    const quantity = ref(itemQuantity.value)
    const productImage = computed(() =>
      getResizedImage(getProductMainImageUrl(props.product), {
        width: 140,
        height: 200,
      })
    )

    const propertyIds = ref(props.product.payload.propertyIds)
    watch(quantity, async (qty) => {
      // in future we may want to have debounce here
      if (qty === props.product.quantity) return
      await changeItemQuantity(qty)
    })
    watch(
      () => props.product.quantity,
      (qty) => {
        quantity.value = qty
      }
    )
    return {
      productImage,
      removeItem,
      quantity,
      regularPrice: itemRegularPrice,
      specialPrice: itemSpecialPrice,
      productUrl,
      options: itemOptions,
      stock: itemStock,
      isPromotion,
      propertyIds,
      filterPrice: usePriceFilter(),
      purchaseStepsOptions: getProductQtySteps
    }
  },

  mounted() {
    this.getPropertieNames();
  },
  methods: {
    getPropertieNames() {
      this.propertieStrings = [];
      if (this.propertyIds) {
        this.propertyIds.forEach(id => {
          if (id == 'a2dcd3008de644c784d2cdfec32d91d0') {
            this.propertieStrings.push({ "id": 'Projekt Typ', 'name': 'Notenheft ohne Instrumentalstimmen' })
          }
          if (id == '92c1ed6e0a11440aa5c544d87fc780c9') {
            this.propertieStrings.push({ "id": 'Projekt Typ', 'name': 'Notenheft mit Instrumentalstimmen' })
          }
          if (id == '587a3d6981404ed4b9de471d120e14ad') {
            this.propertieStrings.push({ "id": 'Projekt Typ', 'name': 'Stimmensatz / Chorsatz' })
          }
          if (id == 'bb3741f73af54d46b1d0808f74f3923d') {
            this.propertieStrings.push({ "id": 'Ausrichtung', 'name': 'Hochformat' })
          }
          if (id == 'e1d6ac670a3442448644bc34a7f0d469') {
            this.propertieStrings.push({ "id": 'Ausrichtung', 'name': 'Querformat' })
          }
          if (id == '7c2ad08862fb4011ae45d912c1ca4c3d') {
            this.propertieStrings.push({ "id": 'Farbigkeit', 'name': 'Schwarz Weiß' })
          }
          if (id == 'cfdae0f64bf240a6ae5202db7579f8a0') {
            this.propertieStrings.push({ "id": 'Farbigkeit', 'name': 'Farbig' })
          }
          if (id == 'bdac9a79733341129bdc32cceaa29ddb') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'DIN A4 (21 x 29,7 cm)' })
          }
          if (id == 'afe5b55949fc41d399ac39e5ff24f4b6') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'Klavierauszug (19 x 27 cm)' })
          }
          if (id == '6753f984ea17467794b4068f294053be') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'Concert (22,8 x 30,5 cm)' })
          }
          if (id == '4ddf6e278920458cba821346e53b04e9') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'DIN B4 (25 x 35,3 cm)' })
          }
          if (id == '2866e65da9a749cd88a84412e212f12a') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'DIN A3 (29,7 x 42 cm)' })
          }
          if (id == '378502b6aa384914b27369996fabd0bc') {
            this.propertieStrings.push({ "id": 'Format', 'name': 'Dirigent (31,5 x 46 cm)' })
          }
          if (id == 'd5e18caaadd34f70877e38b742ad22ff') {
            this.propertieStrings.push({ "id": 'Bindungsart', 'name': 'Klammerheftung' })
          }
          if (id == 'b5559576c3634ab0ba178c92194b5691') {
            this.propertieStrings.push({ "id": 'Bindungsart', 'name': 'Spiralbindung' })
          }
          if (id == '242e68c2dfde4ec2afe3fd478e2a0f85') {
            this.propertieStrings.push({ "id": 'Umschlag', 'name': 'Ohne' })
          }
          if (id == '28e2313979804380b8f303e0f21ffcad') {
            this.propertieStrings.push({ "id": 'Umschlag', 'name': 'Mit' })
          }
        });
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.sw-collected-product {
  min-height: 12.5rem;
  margin-bottom: var(--spacer-sm);
  --collected-product-width: 100%;
  --collected-product-actions-display: none;
  --collected-product-configuration-display: flex;
  --collected-product-padding: var(--spacer-xs);
  --collected-product-background: var(--c-white);
  --collected-product-title-margin: 0;

  &.sf-collected-product {
    --collected-product-remove-text-display: var(--sw-collected-product-remove-btn-display,
        none);
    --collected-product-remove-opacity: 1;
    --collected-product-remove-circle-icon-display: none;
    --collected-product-remove-right: var(--spacer-xs);
    --collected-product-remove-bottom: var(--spacer-sm);

    &::after {
      display: none;
    }
  }

  &:hover {
    z-index: unset;
    box-shadow: unset;
  }

  ::v-deep .sf-price {
    margin-bottom: var(--spacer-base);
  }

  ::v-deep .sf-quantity-selector {
    --quantity-selector-background: var(--collected-product-quantity-background,
        var(--c-white));
  }

  ::v-deep .sf-collected-product__quantity-wrapper {
    z-index: initial;
  }

  @include for-mobile {
    --property-name-font-size: var(--font-size--base);
    --property-value-font-size: var(--font-size--base);
  }

  &--hidden-remove-btn {
    --sw-collected-product-remove-btn-display: none;
  }

  &--small {
    min-height: 8rem;
    --collected-product-quantity-background: var(--c-light);

    ::v-deep .sf-collected-product__aside {
      position: initial;
      flex: 0 0 5rem;
    }

    ::v-deep .sf-image {
      --image-height: 8rem;
      --image-width: 5rem;
    }
  }

  &__caption {
    text-align: center;
    line-height: 1rem;
  }

  &.promotion::v-deep {
    .sf-collected-product__quantity-wrapper {
      display: none;
    }
  }

  .sf-select-quantity {
    border: 1px solid var(--c-dark-variant);
    padding: 0;
    margin: 0;
    background: var(--c-white);
    width: var(--quantity-selector-width, 6.75rem);

    ::v-deep .sf-component-select__chevron {
      top: calc(50% + 5px);
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
</style>
