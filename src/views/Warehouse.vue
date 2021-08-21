<template>
  <div>
    <WarehouseHeader v-if="!is_warehouse_form_visible" />

    <v-row>
      <v-col cols="12" sm="12">
        <WarehouseList v-show="is_warehouse_list_visible && !is_warehouse_grid_view_visible" />
        <WarehouseForm v-if="is_warehouse_form_visible" />
        <WarehouseGrid v-show="is_warehouse_list_visible && is_warehouse_grid_view_visible" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    is_warehouse_list_visible() {
      return this.$store.getters["warehouses/is_warehouse_list_visible"];
    },

    is_warehouse_form_visible() {
      return this.$store.getters["warehouses/is_warehouse_form_visible"];
    },

    is_warehouse_grid_view_visible() {
      return this.$store.getters["warehouses/is_warehouse_grid_view_visible"];
    },
  },
  components: {
    WarehouseHeader: () =>
      import(
        /* webpackChunkName: "warehouse-components" */ "@/components/warehouse/warehouse-header.vue"
      ),
    WarehouseList: () =>
      import(
        /* webpackChunkName: "warehouse-components" */ "@/components/warehouse/warehouse-list.vue"
      ),
    WarehouseGrid: () =>
      import(
        /* webpackChunkName: "warehouse-components" */ "@/components/warehouse/warehouse-grid.vue"
      ),
    WarehouseForm: () =>
      import(
        /* webpackChunkName: "warehouse-components" */ "@/components/warehouse/warehouse-form.vue"
      ),
  },
};
</script>
