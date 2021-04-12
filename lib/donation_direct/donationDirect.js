import api from "../utils.js";

/**
 * Função que cria uma doação direta
 *
 * @param {{
 *   api_token: string,
 * }} params é um objeto de parametros para configurações do retorno da api
 * @param {{
 *   storeId: string,
 *   tags: [],
 *   isTest: boolean,
 *   campaignId: string,
 *   paymentMethod: 1 | 2 | 3 | 4,
 *   orderId: string,
 *   bankFeeCovered: number,
 *   hasMatchFunding: boolean,
 *   matchingDonation: number,
 *   notes: string,
 *   donor : {
 *     identifier: string,
 *     email: string,
 *     name: string,
 *     phone: string,
 *     document: string,
 *     gender: string,
 *     birthDate: string,
 *     verified: boolean,
 *     optIn: boolean,
 *   },
 *   creditCardData: {
 *     paymentSystem: 0 | 1 | 2 | 3 | 4 | 5
 *     fullName: string,
 *     cardNumber: string,
 *     expirationDate: string,
 *     cardNumber: string,
 *     expirationDate: string,
 *     securityCode: string,
 *     installmentQuantity: number
 *   },
 *   bankSlipData: {
 *     paymentSystem: 0 | 1 | 2 | 3 | 4 | 5,
 *     dueDate: number
 *   },
 *   address: {
 *     zipCode: string,
 *     street: string,
 *     number: string,
 *     complement: string,
 *     district: string,
 *     city: string,
 *     state: string,
 *     country: string
 *   },
 *   causes: [{
 *     causeId: string,
 *     donation: number
 *   }]
 * }} body é um objeto com configurações para a doação
 */
export const createDirectDonation = async (params, body) => {
  try {
    return await api.post(`/donation/direct`, {params: params}).then(res => res.data);
  }catch (err) {
    return(err);
  }
}
