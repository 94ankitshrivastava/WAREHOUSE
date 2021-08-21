<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">
              ID
            </th>
            <th class="text-center">
              Type
            </th>
            <th class="text-center">
              Name
            </th>

            <th class="text-center">
              City
            </th>
            
            <th class="text-center">
              Space Available
            </th>

            <th class="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in warehouse_list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <!-- <v-avatar>
                <img :src="item.avatar" :alt="item.first_name" />
              </v-avatar> -->
              {{ item.type }}
            </td>
            <td>{{ item.name }} </td>
            <td>{{ item.city }} </td>
            <td>{{ item.space_available }} </td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <!-- <div class="text-center">
      <v-pagination
        v-model="current_page"
        :length="getPaginationRecord"
      ></v-pagination>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      current_page: 1,
    };
  },
  computed: {
    warehouse_list() {
      return this.$store.getters["warehouses/getWarehouseList"];
    },
    getPaginationRecord() {
      return this.$store.getters["warehouses/getPaginationRecord"];
    },
  },

  watch: {
    current_page(val) {
      if (val) {
        this.getWarehouseList({ current_page_index: val });
      }
    },
  },
  methods: {
    /*
      getWarehouseList() => Call the API to get the user list and store it 
      into vuex store
    */

    getWarehouseList(payload) {
      this.$store
        .dispatch("warehouses/getWarehouseListing", payload)
        .then((response) => {
          console.log(response, "response data");
        })
        .catch((err) => {
          console.log(err);
        });
    },

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
  mounted() {
    this.getWarehouseList();
    console.log(this.warehouse_list, 'warehouse_list');
  },
};
</script>

<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 0.875rem;
  height: 80px;
  text-align: center;
}

.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > thead
  > tr:last-child
  > th {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  font-size: 16px;
}
</style>
