<template>
  <v-row>
    <v-col cols="12" sm="4" v-for="item in warehouse_list" :key="item.id">
      <v-card class="mx-auto" max-width="374">
        <v-img height="250" src="@/assets/warehouse.svg" aspect-ratio="1">
          <v-card-title style="color:#009688;">{{ item.name }} </v-card-title>
        </v-img>

        <v-card-text>
          <div class="text-subtitle-1">
            City: {{ item.city }} <br />
            Space Available: {{ item.space_available }}
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            class="ma-2"
            color="success lighten-2"
            fab
            x-small
            dark
            @click="handleEditandView(item, true)"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>

           <v-btn
            class="ma-2"
            color="deep-purple lighten-2"
            fab
            x-small
            dark
            @click="handleEditandView(item, false)"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

          <v-btn 
            class="ma-2"
            color="error" 
            @click="handleDelete(item)"
            fab
            x-small
            dark
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    warehouse_list() {
      return this.$store.getters["warehouses/getWarehouseList"];
    },
    getPaginationRecord() {
      return this.$store.getters["warehouses/getPaginationRecord"];
    },
  },
  methods: {
     /*
      handleEditandView() => Take item as parameter, store it on vuex store and toggle the user list
        & user form UI panel
    */
    handleEditandView(item, isView) {
      this.$store.commit("warehouses/SET_SELECTED_WAREHOUSE", item);
      this.$store.commit("warehouses/TOGGLE_WAREHOUSE_LIST", false);
      this.$store.commit("warehouses/TOGGLE_WAREHOUSE_FORM", true);

      if(isView){
        this.$store.commit("warehouses/TOGGLE_WAREHOUSE_VIEW", true);
      }
    },

    /*
      handleDelete() => Responsible for delete items from the list without calling the API
    */
    handleDelete(item) {
      this.$store.commit("warehouses/HANDLE_DELETE_WAREHOUSE", item);
    },
  },
};
</script>
