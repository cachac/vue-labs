# 1. vue-labs <!-- omit in toc -->


# 1. Instalar Node.js


# 2. Crear proyecto
```sh
npm install -g @vue/cli
vue create my-app
cd my-app
npm run serve
```
## 2.1. Explorar proyecto
- package.json
- node_modules
- public/index.html
- src/main.js
- src/App.vue
- devTools

## 2.2. NPM
[Documentación](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

# 3. Instalar extensiones
- Vue (Official)

# 4. Abrir proyecto en el browser
http://localhost:8080


# 5. Reactividad
## 5.1. Eliminar el componente HelloWorld
Crea el archivo `src/components/CounterDemo.vue`

## 5.2. Options API
```js
<template>
  <div>
    <h1>Contador</h1>
    <p>Contador: {{ counter }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  name: "CounterDemo",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementar() {
      this.counter++;
    },
  },
};
</script>

```

## 5.3. Composition API
```js
<template>
  <div>
    <h1>Contador</h1>
    <p>Contador: {{ counter }}</p>
    <button @click="incrementar">Incrementar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
const incrementar = () => {
  counter.value++;
};
</script>
```

# 6. Practica
Agrega un boton para decrementar el contador

# 7. Directivas
- v-if
- v-for
- v-bind
- v-on
- v-model
```js
<template>
  <div>
    <h1>Contador</h1>
    <p>Contador: {{ counter }}</p>

		<!-- v-on -->
    <button @click="incrementar">Incrementar</button>

    <!-- v-if -->
    <p v-if="counter > 0">Contador es mayor a 0</p>
    <p v-else>Contador es menor a 0</p>

    <!-- v-for -->
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>

    <!-- v-bind -->
    <img :src="image" alt="" />

		<!-- v-model -->
		<input v-model="name" type="text" />
		<p>{{ name }}</p>

  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
const items = ref([
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]);
const image = ref("https://blog.evanyou.me/images/logo.png");
const name = ref("Nombre");
const incrementar = () => {
  counter.value++;
};
</script>

```

# 8. Props
CounterDemo.vue
```js
import { ref, defineProps } from "vue";
const props = defineProps({
  name: String,
});
const name = ref(props.name);
```

App.vue
```js
<CounterDemo name="Test" />
```

# 9. Emits
CounterDemo.vue
```js
import { ref, defineProps, defineEmits } from "vue";
const emits = defineEmits(["incrementar"]);
const incrementar = () => {
  counter.value++;
	emits("incrementar", counter.value);
};
```

App.vue
```js
<CounterDemo name="Test" @incrementar="mensaje" />
```

```js
		mensaje(value) {
			alert("Incrementado: " + value);
		},
```


# 10. Practica, en un nuevo proyecto.
## 10.1. El padre (App.vue) tenga una lista de tareas y un contador de completadas
```js
tasks: [
        { id: 1, name: "Estudiar Vue.js", done: false },
        { id: 2, name: "Practicar props", done: false },
        { id: 3, name: "Hacer el ejercicio", done: false },
      ]
completedCount: 0
```

- Cada tarea se muestre con un componente hijo (TaskItem.vue). Y debe tener un boton para completarla.

- El padre le pase al hijo la tarea como prop.

- El hijo emita un evento cuando la tarea se complete.

- El padre actualice el contador de tareas completadas.

- El hijo muestra la tarea como completada (puede usar un estilo tachado y un emoji de "✅")
Ejemplo:
```js
<p :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
```

# 11. Fetch
- En un nuevo proyecto: Fetch
- Elimina HelloWorld.vue y assets/logo.png

El siguiente ejercicio muestra una tabla con datos de usuarios obtenidos de una API pública. En la tabla se muestra un botón para ver el detalle de cada usuario en un modal.

La lista de usuarios se carga cuando se monta el componente.

## 11.1. UserTable.vue
```js
```

## 11.2. UserModal.vue
```js
```

## 11.3. App.vue
```js
```

# 12. Vuetify
- En un nuevo proyecto: Vuetify

```js
npm create vuetify@latest
```
Abrir el proyecto en el browser
http://localhost:3000

## 12.1. Este tipo de proyecto utiliza un router para mostrar los vue de la carpeta pages
App.vue
```js
<router-view />
```

## 12.2. Agrega los componentes del ejercicio Fetch en pages/index.vue
- Elimina HelloWorld.vue y assets/logo.png

## 12.3. pages/index.vue
```js
```

## 12.4. components/UserTable.vue
```js
```

## 12.5. components/UserModal.vue
```js
```

