<template>
  <div>
    <br />
    <div>
      <v-img :src="image" aspect-ratio="1.7"></v-img>
      <h3>WELCOME</h3>
      <div class="card-login">
        <h3>เข้าสู่ระบบ </h3>
        <br/>
        <v-text-field
            label="Username"
            filled
            rounded
            small
          ></v-text-field>
          <v-text-field
            label="Password"
            filled
            rounded
          ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data() {
    return {
      image: require("../assets/KORAT.png")
    };
  }
};
</script>
<style scoped>
.card-login {
  border: 2px solid #B2EBF2;
  border-radius: 50px;
  background-color: #B2EBF2;
  height: 35vh;
  text-align: center;
  margin-top: 2% ;
  margin-right: 7% ;
  margin-left: 7% ;
  padding: 1%;
  padding-left:20px ;
  padding-right: 20px;

  
}
</style>
