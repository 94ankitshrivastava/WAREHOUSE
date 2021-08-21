<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12"> <h4>{{ is_view ? 'VIEW' :'UPDATE' }} WAREHOUSE</h4> </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.name"
            :counter="50"
            label="Name"
            outlined
            dense
            :disabled="is_view"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-select
            :items="types"
            label="Types"
            v-model="form.type"
            outlined
            dense
            :disabled="is_view"
          ></v-select>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.city"
            :counter="20"
            label="City"
            outlined
            dense
            :disabled="is_view"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.cluster"
            outlined
            dense
            label="Cluster"
            :disabled="is_view"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.space_available"
            outlined
            dense
            label="Space Available"
            :disabled="is_view"
          ></v-text-field>
        </v-col>

        <!-- <v-col cols="12" sm="6" md="4">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="form.dob"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="form.dob"
                label="Date Of Birth"
                readonly
                v-bind="attrs"
                v-on="on"
                outlined
                dense
              ></v-text-field>
            </template>
            <v-date-picker v-model="form.dob" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(form.dob)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col> 

        <v-col cols="12" md="4">
          <v-select
            v-model="form.type"
            :items="types"
            label="Select"
            multiple
            chips
            outlined
            dense
            hint="Select type of warehouse"
            persistent-hint
          ></v-select>
        </v-col>-->
      </v-row>

      <v-row>
        <v-col v-if="!is_view" sm="1" offset-sm="10">
          <v-btn
            class="float-right"
            @click="handleUpdateWarehouse"
            depressed
            color="primary"
          >
            Update
          </v-btn>
        </v-col>

        <v-col v-else sm="1" offset-sm="10">
          <v-btn
            class="float-right"
            @click="handleEnableEdit"
            depressed
            color="primary"
          >
            Edit
          </v-btn>
        </v-col>

        <v-col sm="1">
          <v-btn class="float-left" @click="handleCloseForm" color="error">
            Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      types: ["Leasable Space", "Warehouse Service"],
    };
  },
    computed: {
      is_view() {
        return this.$store.getters["warehouses/is_warehouse_view_visible"];
      },
    },

  methods: {
    init() {
      const warehouse = this.$store.getters["warehouses/get_selected_warehouse"];

      console.log(warehouse, 'warehouse');

      if (Object.keys(warehouse).length > 0) {
        this.form = Object.assign({}, {}, warehouse);
      }
    },

    /*
      handleCloseForm() => close the form UI and enable the Warehouse listing
    */

    handleCloseForm() {
      this.$store.commit("warehouses/TOGGLE_WAREHOUSE_LIST", true);
      this.$store.commit("warehouses/TOGGLE_WAREHOUSE_FORM", false);
    },

    /*
      handleUpdateWarehouse() => update value of json and store it on vuex store and toggle the warehouse list
        & close form UI panel
    */
    handleUpdateWarehouse() {
      this.$store.commit("warehouses/HANDLE_UPDATE_WAREHOUSE", this.form);
      this.handleCloseForm();
    },

    /*
      handleEnableEdit() => toggle the edit option
    */
    handleEnableEdit(){
      this.$store.commit("warehouses/TOGGLE_WAREHOUSE_VIEW", false);
    }
  },

  mounted() {
    this.init();
  },
  beforeDestroy(){
    this.$store.commit("warehouses/TOGGLE_WAREHOUSE_VIEW", false);
  }
};
</script>
