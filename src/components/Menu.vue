<template>
    <div class="menu">
        <RouterLink to="/">INICIO</RouterLink> |
        <router-link to="/servicios">SERVICIOS</router-link> |
        <RouterLink to="/blog">MI BLOG</RouterLink> |
        <RouterLink to="/contactos">CONTACTOS</RouterLink> |
        <RouterLink to="/producto">PRODUCTO</RouterLink>
    </div>
</template>

<style scoped>
.menu{
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 15px 25px;
    background: #222;
}

.menu a{
    color: aliceblue;
    text-decoration: none;
}
.menu a:hover{
    color: #42b883;
    text-decoration: none;
}

</style>