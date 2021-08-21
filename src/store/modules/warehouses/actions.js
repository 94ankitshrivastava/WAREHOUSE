/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import api from "@/api/index";

export default {
  getWarehouseListing({ state, commit }) {
    return new Promise((resolve, reject) => {
      try {
        api.warehouse
          .getWarehouseData()
          .then((response) => {
            commit("SET_WAREHOUSE_LIST", response);
            commit("SET_WAREHOUSE_LIST_FOR_SEARCH", response);
            commit("SET_PAGINATION_LENGTH", response.length);
            resolve(response);
          })
          .catch((err) => {
            if (err.status == 500) {
              reject({
                message: {
                  0: "Internal Error. Please contact system administrator.",
                },
              });
            } else {
              console.log(err);
              reject(err.data.error);
            }
          });
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  },
};
