import { createContext } from "react";

//Contexto para gerenciar o estado dos dados
export default createContext({
    leads: [],
    users: [],
    moveLead: (lead) => {
        switch (lead.status) {
            case "cliente_em_potencial":
                lead.status = "dados_confirmados";
                break;
            case "dados_confirmados":
                lead.status = "reuniao_agendada";
                break;
            default:
                return;
        }
    },
});
