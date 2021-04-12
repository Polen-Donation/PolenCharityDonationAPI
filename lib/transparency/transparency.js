import api from "../utils.js";

/**
 * Função que retorna dados das doações da sua empresa e o impacto causado com a doação
 *
 * @param {{
 *   api_token: string,
 *   storeId: string
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getConsolidatedImpact = async (params) => {
  try {
    return await api.get(`/transparency/impact/consolidated`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna dados do conteúdo postado por uma instituição
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   indentifier: string
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getContentDetail = async (params) => {
  try {
    return await api.get(`/transparency/content/detail`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna todos os recibos de doação assinados pelas instituições
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   causeId: string,
 *   starDate?: string,
 *   endDate?: string,
 *   page?: number,
 *   pageSize?: number
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getReceipts = async (params) => {
  try {
    return await api.get(`/transparency/receipts`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}

/**
 * Função que retorna ttodos os conteúdos postados pelas causas e instituições que a empresa apoia
 *
 * @param {{
 *   api_token: string,
 *   storeId: string,
 *   causeId: string,
 *   starDate?: string,
 *   endDate?: string,
 *   page?: number,
 *   pageSize?: number
 * }} params é um objeto de parametros para configurações do retorno da api
 */
export const getContentList = async (params) => {
  try {
    return await api.get(`/transparency/content/list`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
