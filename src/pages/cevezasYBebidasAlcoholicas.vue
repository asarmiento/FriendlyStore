<template>
  <q-page >
        <lists-products menu="CERVEZAS Y BEBIDAS ALCOHOLICAS"></lists-products>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import listsProducts from '../components/ListsProducts.vue'
export default defineComponent({
  name: 'CervezasYBebidasAlcoholicas',
  components: { listsProducts }
})
</script>
