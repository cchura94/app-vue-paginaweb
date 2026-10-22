<template>
    <h1>Mi BLOG</h1>
    <div class="contenido">
        <div v-for="publi in publicaciones" class="tarjeta">
            <h1>{{ publi.title }}</h1>
            <p>{{ publi.tag_list }}</p>
            <img :src="publi.cover_image" alt="">
            <hr>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios"


const publicaciones = ref([]);

onMounted(() => {
    listar()
})

// funcion simple
async function listar(){
    const { data } = await axios.get("https://dev.to/api/articles");
    console.log(data);
    publicaciones.value = data;
}
// funcion anonima
const listar2 = function(){

}
// funcion flecha
const listar3 = () => {

}

</script>

<style>
.contenido{
    max-width: 900px;
    margin: 30px auto;
    padding: 0 15px;
}
.tarjeta{
    display: flex;
    gap: 20px;
    background-color: azure;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px #ddd;
}
.tarjeta img{
    width: 200px;
    height: 140px;
    object-fit: cover;
    border-radius: 8px;
}
</style>