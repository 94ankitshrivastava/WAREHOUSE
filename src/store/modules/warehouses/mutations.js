export default {
  SET_WAREHOUSE_LIST(state, payload) {
    state.warehouseList = payload;
  },

  SET_WAREHOUSE_LIST_FOR_SEARCH(state, payload) {
    state.warehouseListSearch = payload;
  },

  SET_PAGINATION_LENGTH(state, payload) {
    state.pagination_total_records = payload;
  },

  TOGGLE_WAREHOUSE_LIST(state, toggle) {
    if (typeof toggle !== "undefined") {
      state.toggle.show_warehouse_list = toggle;
    } else {
      state.toggle.show_warehouse_list = !state.toggle.show_warehouse_list;
    }
  },

  TOGGLE_WAREHOUSE_FORM(state, toggle) {
    if (typeof toggle !== "undefined") {
      state.toggle.show_warehouse_form = toggle;
    } else {
      state.toggle.show_warehouse_form = !state.toggle.show_warehouse_form;
    }
  },

  TOGGLE_WAREHOUSE_GRID_VIEW(state, toggle) {
    if (typeof toggle !== "undefined") {
      state.toggle.show_warehouse_grid = toggle;
    } else {
      state.toggle.show_warehouse_grid = !state.toggle.show_warehouse_grid;
    }
  },

  SET_SELECTED_WAREHOUSE(state, payload) {
    state.selected_warehouse = payload;
  },

  TOGGLE_WAREHOUSE_VIEW(state, payload) {
    state.toggle.warehouse_view = payload;
  },

  HANDLE_UPDATE_WAREHOUSE(state, payload) {
    //use for loop inorder to break out of loop as soon as you find the respective object
    let newWarehouseListing = state.warehouseList;

    for (let i = 0; i < newWarehouseListing.length; i++) {
      let currentItem = newWarehouseListing[i];
      if (currentItem.id === payload.id) {
        currentItem = Object.assign({}, payload);
        newWarehouseListing[i] = currentItem;
        break;
      }
    }

    state.warehouseList = [...newWarehouseListing];
  },

  HANDLE_DELETE_WAREHOUSE(state, payload) {
    let newWarehouseList = state.warehouseList.filter((warehouse) => warehouse.id !== payload.id);
    state.warehouseList = newWarehouseList;
  },

  INITIAL_STATE() {
    const state = initialState();
    return state;
  },
};

function initialState() {
  return {
    toggle: {
      show_warehouse_list: true,
      show_warehouse_form: false,
      show_warehouse_grid: false,
      warehouse_view: false,
    },
    warehouseList: [],
    warehouseListSearch: [],
    pagination_total_records: 0,
    selected_user: {},
    current_page: 1,
  };
}
