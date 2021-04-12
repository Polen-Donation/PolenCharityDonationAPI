import api from "../utils.js";

/**
 * Função que retorna as plataformas cadastradas
 *
 * @param { {
 * api_token: string,
 * page?: number,
 * pageSize?: number
 * } } params é um objeto de parametros para configurações do retorno da api
 */
export const getPlatform = async (params) => {
  try {
    return await api.get(`/platform/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
