<script setup>


</script>

<template>
  <div>
    <h1>pagina de login</h1>
    <form @submit.prevent="login">
      <label for="login-username">Username</label>
      <input type="text" name="login-username" id="login-username" v-model="loginUsername">

      <label for="login-password">Password</label>
      <input type="password" name="login-password" id="login-password" v-model="loginPassword">

      <button type="submit" class="btn btn-primary">Login</button>
    </form>
 
  </div>
</template>



<style scoped lang="scss" >

</style>
