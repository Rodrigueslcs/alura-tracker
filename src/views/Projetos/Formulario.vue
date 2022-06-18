<template>
    <section>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/intefaces/INotificacao";
import { useStore } from "@/store";
import { defineComponent } from "vue";
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from "../../store/tipo-mutacoes";


export default defineComponent({
    name: 'FormularioProjeto',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id === this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: "",

        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })
            } else {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            }
            this.nomeDoProjeto = "";
            this.store.commit(NOTIFICAR, {
                titulio: "Novo projeto foi salvo",
                texto:'Prontinho ;) seu projeto já está disponível',
                tipo: TipoNotificacao.SUCESSO
            })
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    }
})

</script>
