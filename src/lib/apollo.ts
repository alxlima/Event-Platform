import { ApolloClient, InMemoryCache } from "@apollo/client";

// incluindo a chamada da API-CMS - Graphcms - projeto IgniteLab - em  https://app.graphcms.com/
export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    headers:{
        'Authorizateion': `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}` 
    },
    cache: new InMemoryCache() //[InMemoryCache]- por padrão faz chache moemoria aplição com variavel
})