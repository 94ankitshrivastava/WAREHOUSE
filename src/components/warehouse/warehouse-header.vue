<template>
  <v-row>
    <v-col cols="12" sm="4">
      <h4>WAREHOUSE LISTING</h4>
    </v-col>

    <v-col cols="12" sm="4">
      <v-text-field
        v-model="search"
        v-on:keyup="tableFilter"
        outlined
        dense
        label="Search By Name or City"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="2" offset-sm="2">
      <v-btn
        @click="toggleView('LIST')"
        class="ma-2"
        small
        fab
        color="deep-purple lighten-3"
      >
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>

      <v-btn
        @click="toggleView('GRID')"
        class="ma-2"
        small
        fab
        color="cyan lighten-3"
      >
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
    </v-col>

    <v-divider></v-divider>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    warehouse_list() {
      return this.$store.getters["warehouses/getWarehouseList"];
    },
    oldList() {
      return this.$store.getters["warehouses/getWarehouseListSearch"];
    },
  },

  methods: {
    /*
    toggleView() => Toggle the view of list type or Grid Type
    */

    toggleView(type) {
      if (type == "GRID") {
        this.$store.commit("warehouses/TOGGLE_WAREHOUSE_GRID_VIEW", true);
      } else {
        this.$store.commit("warehouses/TOGGLE_WAREHOUSE_GRID_VIEW", false);
      }
    },

    /*
    tableFilter() => Search the data by First Name, last Name, or Email
    return the filtered data
    */
    tableFilter() {
      let warehouses_list_clone = [...this.warehouse_list];

      if (this.search == "" || this.search == " ") {
        return this.$store.commit("warehouses/SET_WAREHOUSE_LIST", this.oldList);
      }

      let filtered_data = warehouses_list_clone.filter((warehouse) => {
        if (warehouse.name.toLowerCase().includes(this.search.toLowerCase())) {
          return warehouse.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
        } 
        else if (
          warehouse.city.toLowerCase().includes(this.search.toLowerCase())
        ) {
          return warehouse.city
            .toLowerCase()
            .includes(this.search.toLowerCase());
        } 
      });

      return this.$store.commit("warehouses/SET_WAREHOUSE_LIST", filtered_data);
    },
  },
};
</script>
