<template>
  <div>
    <v-app-bar color="orange accent-4" scroll-target="#scrolling-techniques" fixed>
      <v-toolbar-title class="tool-font-color">Korat Strong Delivery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    <br/>
    <br/>
    <div id="scrolling-techniques" class="overflow-y-auto">
      <v-card
        class="card-list"
        v-for="(item, index) in marketList"
        v-bind:key="index"
      >
        <div class="d-flex flex-no-wrap justify-space-start">
             <v-avatar class="ma-3" size="110" tile>
            <v-img :src="item.imageURL"></v-img>
          </v-avatar>
          <div align="left">
            <v-card-title class="font-title"  v-text="item.name"></v-card-title>
            <v-card-subtitle class="font-subtitle" v-text="item.descripts" ></v-card-subtitle>
            <v-row class="font-distance"> <v-col cols="2"><v-icon class="box" size="18">mdi-bike</v-icon></v-col> <v-col class="rm-paddng">{{item.distance}} กม. </v-col></v-row>
          </div>

         
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
const mockMarket = require("../mock/marketlist.json");
export default {
  name: "cardlist",
  data() {
    return {
      marketList: [],
    };
  },
  mounted() {
    this.marketList = mockMarket;
  },
};
</script>
<style scoped>
.card-list {
  height: 130px;
  margin-top: 5px;
}
.font-title{
    font-size: 18px;
    text-align: left;
    padding-left:8px;
}
.font-subtitle{
    font-size: 15px;
    text-align: left;
    padding-bottom: 0px;
    padding-left:8px;
}
.tool-font-color{
    color: white;
}
.box{
     padding-left:17px;     
}
.font-distance{
    font-size: 15px;
}
.rm-paddng{
    padding-left: 2%;
}

</style>
