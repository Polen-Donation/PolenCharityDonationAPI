import api from "../utils.js";

/**
 * Função que retorna os detalhes de um usuário
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   identifier: string
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getUserDetails = async (params) => {
  try {
    return await api.get(`/user/detail`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna os dados do impacto social gerado por um usuário
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   identifier: string
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getUserImpact = async (params) => {
  try {
    return await api.get(`/user/impact`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}


/**
 * Função que retorna os usuários de uma loja
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   page?: number,
 *   pageSize?: number
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getUserList = async (params) => {
  try {
    return await api.get(`/user/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função para a atualização de um usuário
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   userId: string,
 *   email: string,
 *   name: string,
 *   document: string,
 *   gender: string,
 *   birthdate: string,
 *   city: string,
 *   state: string,
 *   country: string,
 *   verifed: boolean,
 *   optIn: boolean
 * }} body é um objeto com os dados do usuário
 */
export const updateUser = async (params, body) => {
  try {
    return await api.put(`/user/update`, body, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função para a criação de um novo usuário
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   causesList: [string],
 *   userId: string,
 *   email: string,
 *   name: string,
 *   document: string,
 *   gender: string,
 *   birthdate: string,
 *   city: string,
 *   state: string,
 *   country: string,
 *   verifed: boolean,
 *   optIn: boolean
 * }} body é um objeto com os dados do usuário
 */
export const createUser = async (params, body) => {
  try {
    return await api.post(`/user/create`, body, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função para adicionar ou desabilitar causas associadas a um usuário
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   identifier: string
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   addCausesList: [string],
 *   disableCausesList: [string]
 * }} body é um objeto com arrays de causas
 */
export const updateUserCause = async (params, body) => {
  try {
    return await api.post(`/user/causes`, body, {params: params}).then(res => res.data);
  }catch (err) {
    return (err);
  }
}
