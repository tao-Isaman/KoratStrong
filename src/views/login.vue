<template>
  <div>
    <br />
    <div>
      <v-img :src="image" aspect-ratio="1.7"></v-img>
      <h3>WELCOME</h3>
      <div class="card-login">
        <br />
        <h3>เข้าสู่ระบบ</h3>
        <br />
        <v-text-field
          class="styled-input"
          label="Username"
          filled
          rounded
          small
        ></v-text-field>
        <v-text-field
          class="styled-input"
          label="Password"
          filled
          rounded
        ></v-text-field>
      </div>
      <div class="span-text">
        <span>ยังไม่ลงทะเบียน </span><span class="link-font">ลงทะเบียนที่นี่</span>
      </div>
      <v-btn class="ma-2" tile large color="blue" icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn class="ma-2" tile large  icon>
      <v-avatar size="30">
        <v-img :src="logoGoogle" aspect-ratio="1.7"></v-img>
      </v-avatar>
    </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data() {
    return {
      image: require("../assets/KORAT.png"),
      logoGoogle: require("../assets/google.png")
    };
  },
};
</script>
<style scoped>
.card-login {
  border: 2px solid #b2ebf2;
  border-radius: 50px;
  background-color: #b2ebf2;
  height: 38vh;
  text-align: center;
  margin-top: 2%;
  margin-right: 10%;
  margin-left: 10%;
  padding: 1%;
  padding-left: 20px;
  padding-right: 20px;
}
.styled-input {
  height: 70px;
  margin-top: 3%;
}
.span-text {
  margin-top: 5px;
}
.link-font{
  color: blue;
}
</style>
