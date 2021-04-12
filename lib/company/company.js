import api from "../utils.js";

/**
 * Função que retorna os detathes da empresa
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getCompanyDetails = async (params) => {
  try {
    return api.get(`/company/detail`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna todas as empresas de uma conta
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getCompanyList = async (params) => {
  try {
    return await api.get(`${baseURL}${version}/company/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna todas as lojas de uma empresa
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 */
export const getCompanyStores = async (params) => {
  try {
    return await api.get(`/company/stores`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que atualiza os dados de uma empresa
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { Object } body é um objeto com os dados de atualização
 */
export const updateCompany = async (params, body) => {
  try {
    return await api.put(`/company/update`,body,{params: params}).then(res => res.data)
  }catch (err) {
    return(err);
  }
}

/**
 * Função que cria uma nova empresa
 *
 * @param { Object } params é um objeto de parametros para configurações do retorno da api
 * @param { Object } body é um objeto com os dados de atualização
 */
export const createCompany = async (params={}, body) => {
  try {
    return await api.post(`/company/create`, body,{params: params}).then(res => res.data)
  }catch (err) {
    return(err);
  }
}

