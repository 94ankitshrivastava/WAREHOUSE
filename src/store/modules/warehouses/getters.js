export default {
  getWarehouseList: (state) => state.warehouseList,
  getWarehouseListSearch: (state) => state.warehouseListSearch,
  getPaginationRecord: (state) => state.pagination_total_records,
  is_warehouse_list_visible: (state) => state.toggle.show_warehouse_list,
  is_warehouse_form_visible: (state) => state.toggle.show_warehouse_form,
  is_warehouse_grid_view_visible: (state) => state.toggle.show_warehouse_grid,
  is_warehouse_view_visible: (state) => state.toggle.warehouse_view,
  get_selected_warehouse: (state) => state.selected_warehouse,
};
