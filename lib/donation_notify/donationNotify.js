import api from "../utils.js";

/**
 * Função que retorna os detalhes de uma doação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   polenTransactionId?: string
 *   orderId?: string
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getNotifyDonationDetails = async (params) => {
  try {
    return await api.get(`/donation/notify/detail`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna os detalhes de uma doação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   orderId?: string,
 *   ngoId?: string,
 *   fromDate?: string,
 *   toDate?: string,
 *   page?: number,
 *   pageSize: number
 * }} params é um objeto de parametros para configurações do retorno da api
 *
 */
export const getNotifyDonationList = async (params) => {
  try {
    return await api.get(`/donation/notify/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que atualiza o status da doação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   polenTransactionId: string,
 *   orderId: string,
 *   status: 1 | 2 | 3 | 4
 * }} body é um objeto com configurações para a doação
 *
 */
export const updateNotifyDonation = async (params, body) => {
  try {
    return await api.put(`/donation/notify/update`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que cria uma doação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   companyId: string
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   storeName: string,
 *   storeUrl: string,
 *   orderId: string,
 *   tags: [],
 *   currency: string,
 *   donation: number,
 *   userDonation: number,
 *   purchase: number,
 *   ngoId: string,
 *   userId: string,
 *   userEmail: string,
 *   userPhone: string,
 *   userDocument: string,
 *   userGender: string,
 *   userBirthDate: string,
 *   userName: string,
 *   city: string,
 *   state: string,
 *   country: string,
 *   paymentMethod: string,
 *   notes: string,
 *   status: 1 | 2 | 3 | 4
 *   createAt: string,
 *   test: boolean
 * }} body é um objeto com configurações para a doação
 *
 */
export const createNotifyDonation = async (params, body) => {
  try {
    return await api.post(`/donation/notify/create`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
