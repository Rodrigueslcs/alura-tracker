<template>
    <BoxTarefa>
        <div class="columns">
            <div class="column is-7">
                {{tarefa?.descricao || 'Descrição Padrão'}}
            </div>
            <div class="column">
                <CronometroForm :tempoEmSegundos="tarefa?.duracaoEmSegundo"/>
            </div>
        </div>
    </BoxTarefa>
</template>

<script lang="ts">
    import ITarefa from "@/intefaces/ITarefa";
import { defineComponent, PropType } from "vue";
    import CronometroForm from "./Cronometro.vue";
    import BoxTarefa from "./Box.vue";
    export default defineComponent({
        name:'TarefaList',
        components:{
            CronometroForm,
            BoxTarefa
        },
        props:{
            tarefa: {
                type: Object as PropType<ITarefa>,
                require: true
            }
        }
    })
</script>

<style scoped>

</style>