<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <todo-spinner v-if="loading" />
            <template v-else>
                
                <todo-form-add />

                <todo-items />

                <todo-empty />

            </template>

        </div>
    </div>
</template>

<script>
import TodoEmpty from "./components/TodoEmpty.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoSpinner from "./components/TodoSpinner.vue";

import axios from "axios";

export default {
    name: "App",
    components: { TodoSpinner, TodoFormAdd, TodoItems, TodoEmpty },

    data() {
        return {
            loading: false,
        };
    },

    created() {
        this.loading = true;
        axios
            .get("http://127.0.0.1:3000/todos")
            .then((response) => {
                this.$store.commit("storeTodos", response.data);
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<style>
</style>
