<template>
    <h1>CRUD Productos</h1>

        {{producto}}
    <form @submit.prevent="funGuardarProducto()">
        <label for="">Ingrese Nombre:</label>
        <input type="text" v-model="producto.nombre">
        <br>
        <label for="">Ingrese Precio:</label>
        <input type="text" v-model="producto.precio">
        <br>
        <label for="">Ingrese descripción:</label>
        <textarea v-model="producto.descripcion"></textarea>
        <br>
        <label for="">Ingrese Imagen:</label>
        <input type="text" v-model="producto.imagen">
        <br>
        <button type="submit">Guardar</button>

    </form>


    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>PRECIO</th>
                <th>DESCRIPCIÓN</th>
                <th>IMAGEN</th>
                <th>ACCIÓN</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(prod, posicion) in productos" :key="prod.id">
                <td>{{ posicion + 1 }}</td>
                <td>{{ prod.nombre }}</td>
                <td>{{ prod.precio }}</td>
                <td>{{ prod.descripcion }}</td>
                <td>
                    <img :src="prod.imagen" alt="" width="100px">
                </td>
                <td>
                    <button @click="funEditar(prod, posicion)">editar</button>
                    <button @click="funEliminar(posicion)">eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
    <pre>{{ productos }}</pre>
</template>

<script setup>
    import { ref } from 'vue';


    // declaramos variables
    const productos = ref([
        {id: 1, nombre: "Laptop", precio: 2590.99, descripcion: "", imagen: "https://app.compucenter.store/products/ew3eiJN2hUPYxSk5VuFMOEsCo3bHfkstfzGLnCSF.png"},
        {id: 2, nombre: "Teclado", precio: 290.98, descripcion: "", imagen: "https://png.pngtree.com/png-clipart/20250421/original/pngtree-a-computer-keyboard-with-rgb-backlighting-png-image_20757315.png"},
    ]);

    const producto = ref({nombre: "", precio: 0, descripcion: "", imagen: ""});

    const posicion = ref(-1)


    function funGuardarProducto(){
        if(posicion.value > -1){
            // editar
            const aux = producto.value;
            productos.value[posicion.value] = aux;
            producto.value = {nombre: "", precio: 0, descripcion: "", imagen: ""}
            posicion.value = -1

        }else{
            productos.value.push(producto.value);
            producto.value = {nombre: "", precio: 0, descripcion: "", imagen: ""}
        }
    }

    function funEditar(prod, pos){
        producto.value = prod;
        posicion.value = pos;
    }

    function funEliminar(pos){
        productos.value.splice(pos, 1);
    }
</script>