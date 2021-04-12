import api from "../utils.js";

/**
 * Função que atualiza os dados da transação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   orderId: string,
 *   status: number,
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const attTransaction = async (params) => {
  try {
    return await api.get(`/transaction/update/status`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
