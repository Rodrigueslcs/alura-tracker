<template>
    <FormularioPrincipal @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">

        <TarefaPrincipal v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />

        <BoxTarefa v-if="listaEstaVazia">
            Você não esta produtivo Hoje
        </BoxTarefa>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import FormularioPrincipal from "../components/Formulario.vue"
import TarefaPrincipal from "../components/Tarefa.vue"
import ITarefa from '../intefaces/ITarefa';
import BoxTarefa from '../components/Box.vue';
export default defineComponent({
    name: 'TarefasView',
    components: {
        FormularioPrincipal,
        TarefaPrincipal,
        BoxTarefa
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
     
        }

    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    
    }
});

</script>

