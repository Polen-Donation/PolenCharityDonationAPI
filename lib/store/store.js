import api from "../utils.js";

/**
 * Função que retorna os detathes de uma loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getStoreDetail = async (params) => {
  try {
    return await api.get(`/store/detail`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna todas as lojas de uma conta
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getStoreList = async (params) => {
  try {
    return await api.get(`/store/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que atualiza os dados de uma loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { Object } body é um objeto com os dados de atualização
 */
export const updateStore = async (params, body) => {
  try {
    return await api.put(`/store/update`,body,{ params }).then(res => res.data)
  }catch (err) {
    return(err);
  }
}

/**
 * Função que adiciona ou ativa uma ong na loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { [string] } body é um array com com a lista de causas
 */
export const addCause = async (params, body) => {
  try {
    return await api.post(`/store/cause/add`, body,{params: params}).then(res => res.data)
  }catch (err) {
    return(err);
  }
}

/**
 * Função que cria uma nova loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { Object } body é um objeto com os dados de atualização
 */
export const createStore = async (params, body) => {
  try {
    return await api.post(`/store/create`, body,{params: params}).then(res => res.data)
  }catch (err) {
    return(err);
  }
}

/**
 * Função que cria uma nova loja
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { [string] } body é um array com causas a serem removidas
 */
export const removeCause = async (params, body) => {
  try {
    return await api.post(`/store/cause/remove`, body,{params: params}).then(res => res.data)
  }catch (err) {
    return(err);
  }
}
