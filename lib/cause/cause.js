import api from "../utils.js";

/**
 * Função que retorna as causas e ongs apoiadas por uma loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getOwnCauses = async (params) => {
    try {
        return await api.get('/cause', {params: params}).then(res => res.data);
    } catch (err) {
        return(err);
    }
}

/**
 * Função que retorna a lista de todas as ongs cadastadas
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getAllCauses = async (params) => {
    try {
        return await api.get('/cause/all',{params}).then(res => res.data);
    } catch (err) {
        return(err);
    }
}

/**
 * Função que retorna todas as categorias cadastradas
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getCategories = async (params) => {
    try {
        return await api.get('/cause/categories',{params}).then(res => res.data);
    } catch (err) {
        return(err);
    }
}
