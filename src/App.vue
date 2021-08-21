<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="grey lighten-3 mt-5">
      <v-container>
        <v-row>
          <v-col sm="8" offset-sm="2" style="background:#fff;">
            <!-- <v-sheet min-height="70vh" rounded="lg"> -->
            <router-view class="box" />
            <!-- </v-sheet> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Warehouses"],
  }),
};
</script>

<style scoped>
.box {
  padding: 10px 15px;
}
</style>
