<script setup>
</script>
<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
       
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/favorites">Favorites</RouterLink>
        <RouterLink to="/humans">Humans</RouterLink>
        
      </nav>
      
  </header>

  <body>
    <img id="banner" src="../assets/img/Image20240701122155.png" alt="banner">
  </body>  

  
</template>

<style lang="scss" scoped>

header {
  background: linear-gradient(45deg, #FF0000, #0000FF);
  padding: 10px 20px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  
}

#banner {

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 50%;
  height: 150px;
  background:transparent;
  margin-left: 25%;
  

}

nav {
  width: 100%;
  font-size: 10px;
  text-align: center;
  margin-top: 10rem;
  display: flex;
  justify-content: space-around; 
  align-items: center; 
  
  
  
 
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-size: 15px;
 
  
  
  
}

nav a.router-link-exact-active:hover {
  background-color:  #1120ee;
}

nav a {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
  text-decoration:dotted;
  color: white;
  background-color: rgba(232, 183, 20, 0.678); 
  border: 1px solid #f07e7e; 
  border-radius: 10px; 
  font-size: 10px;
  box-shadow: 0 3px 8px black; 
  transition: background-color 0.1s ease, border-color 0.1s ease, transform 0.1s ease;
 
  
  
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>