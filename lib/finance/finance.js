import api from "../utils.js";

/**
 * Função que retorna as faturas de uma loja
 *
 * @param { {
 * api_token: string,
 * storeId: string,
 * starDate?: string,
 * endDate?: string,
 * page?: number,
 * pageSize?: number
 * } } params é um objeto de parametros para configurações do retorno da api
 */
export const getBilling = async (params) => {
  try {
    return await api.get(`/finance/billing/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
