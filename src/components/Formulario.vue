<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário">
                <input type="text" class="input" placeholder="Iniciar" v-model="descricao" />
            </div>
            <div class="column">
                <TemporizadorCronometro @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorCronometro from "./Temporizador.vue";

export default defineComponent({
    name: 'FormularioPrincipal',
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorCronometro
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundo: tempoDecorrido,
                descricao: this.descricao,

            });
    
            this.descricao = ''
        }
    }
})
</script>

<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>