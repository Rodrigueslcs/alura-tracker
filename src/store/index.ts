import { INotificacao } from "@/intefaces/INotificacao";
import IProjeto from "@/intefaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";

interface Estado {
    projetos: IProjeto[]
    notificacoes: INotificacao[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()


export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificao: INotificacao){
         novaNotificao.id = new Date().getTime()
         state.notificacoes.push(novaNotificao) 
         setTimeout(()=>{
            state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificao.id)
         },3000)  
        }

    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}