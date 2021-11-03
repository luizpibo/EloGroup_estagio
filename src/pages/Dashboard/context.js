import { createContext } from "react";

//Contexto para gerenciar o estado dos dados
export default createContext({
    leads: [],
    users: [],
    moveLead: () => {},
});
