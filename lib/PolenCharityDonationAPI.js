import { getCategories, getAllCauses, getOwnCauses } from "./cause/cause.js";
import { getCompanyDetails, getCompanyStores, getCompanyList, updateCompany, createCompany } from "./company/company.js";
import { createDirectDonation } from "./donation_direct/donationDirect.js";
import { getNotifyDonationDetails, getNotifyDonationList, updateNotifyDonation, createNotifyDonation } from "./donation_notify/donationNotify.js";
import { getBilling } from "./finance/finance.js";
import { getPlatform } from "./platform/platform.js";
import { getStoreDetail, getStoreList, createStore, updateStore, removeCause, addCause } from "./store/store.js";
import { getContentDetail, getContentList, getReceipts, getConsolidatedImpact } from "./transparency/transparency.js";
import { attTransaction } from "./transaction/transaction.js";
import { getUserImpact, getUserList, getUserDetails, updateUser, updateUserCause, createUser } from "./user/user.js";

export default function PolenCharityDonationAPI(api_token) {
  this.api_token = api_token;

  //Causes

  /**
   * Função que retorna todas as categorias cadastradas
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getCategories = (params={}) => {
    params.api_token = api_token;
    return  getCategories(params);
  }

  /**
   * Função que retorna a lista de todas as ongs cadastadas
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getAllCauses = (params={}) => {
    params.api_token = api_token;
    return getAllCauses(params);
  }

  /**
   * Função que retorna as causas e ongs apoiadas por uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getOwnCauses = (params) => {
    params.api_token = api_token;
    return getOwnCauses(params);
  }

  //Company

  /**
   * Função que retorna os detathes da empresa
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getCompanyDetails = (params) => {
    params.api_token = api_token;
    return getCompanyDetails(params);
  }

  /**
   * Função que retorna todas as empresas de uma conta
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getCompanyList = (params={}) => {
    params.api_token = api_token;
    return getCompanyList(params);
  }

  /**
   * Função que retorna todas as lojas de uma empresa
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getCompanyStores = (params) => {
    params.api_token = api_token;
    return getCompanyStores(params);
  }

  /**
   * Função que atualiza os dados de uma empresa
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com os dados de atualização
   */
  this.updateCompany = (params, body) => {
    params.api_token = api_token;
    return updateCompany(params, body);
  }

  /**
   * Função que cria uma nova empresa
   *
   * @param { Object } body é um objeto com os dados de atualização
   */
  this.createCompany = (body) => {
    return createCompany({api_token}, body)
  }

  //Direct Donation

  /**
   * Função que cria uma doação direta
   *
   * @param { Object } body é um objeto com configurações para a doação
   */
  this.createDirectDonation = (body) => {
    return createDirectDonation({api_token}, body);
  }

  //Notify Donation

  /**
   * Função que retorna os detalhes de uma doação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getNotifyDonationDetails = (params) => {
    params.api_token = api_token;
    return getNotifyDonationDetails(params);
  }

  /**
   * Função que retorna os detalhes de uma doação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   *
   */
  this.getNotifyDonationList = (params) => {
    params.api_token = api_token;
    return getNotifyDonationList(params);
  }

  /**
   * Função que atualiza o status da doação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com configurações para a doação
   *
   */
  this.updateNotifyDonation = (params, body) => {
    params.api_token = api_token;
    return updateNotifyDonation(params, body);
  }

  /**
   * Função que cria uma doação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com configurações para a doação
   *
   */
  this.createNotifyDonation = (params, body) => {
    params.api_token = api_token;
    return createNotifyDonation(params, body);
  }

  //Finance

  /**
   * Função que retorna as faturas de uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getBilling = (params) => {
    params.api_token = api_token;
    return getBilling(params);
  }

  //Platform

  /**
   * Função que retorna as plataformas cadastradas
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getPlatform = (params) => {
    params.api_token = api_token;
    return getPlatform(params);
  }

  //Store

  /**
   * Função que retorna os detathes de uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getStoreDetail = (params) => {
    params.api_token = api_token;
    return getStoreDetail(params);
  }

  /**
   * Função que retorna todas as lojas de uma conta
   *
   */
  this.getStoreList = () => {
    return getStoreList({api_token});
  }

  /**
   * Função que cria uma nova loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com os dados de atualização
   */
  this.createStore = (params, body) => {
    params.api_token = api_token;
    return createStore(params, body);
  }

  /**
   * Função que atualiza os dados de uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com os dados de atualização
   */
  this.updateStore = (params, body) => {
    params.api_token = api_token;
    return updateStore(params, body);
  }

  /**
   * Função que adiciona ou ativa uma ong na loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { [string] } body é um array com com a lista de causas
   */
  this.addCause = (params, body) => {
    params.api_token = api_token;
    return addCause(params, body);
  }

  /**
   * Função que remove  causas de uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { [string] } body é um array com causas a serem removidas
   */
  this.removeCause = (params, body) => {
    params.api_token = api_token;
    return removeCause(params, body);
  }

  //Transparency

  /**
   * Função que retorna dados do conteúdo postado por uma instituição
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getContentDetail = (params) => {
    params.api_token = api_token;
    return getContentDetail(params);
  }

  /**
   * Função que retorna dados das doações da sua empresa e o impacto causado com a doação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getConsolidatedImpact = (params) => {
    params.api_token = api_token;
    return getConsolidatedImpact(params)
  }

  /**
   * Função que retorna todos os recibos de doação assinados pelas instituições
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getReceipts = (params) => {
    params.api_token = api_token;
    return getReceipts(params);
  }

  /**
   * Função que retorna ttodos os conteúdos postados pelas causas e instituições que a empresa apoia
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getContentList = (params) => {
    params.api_token = api_token;
    return getContentList(params)
  }

  //Transaction

  /**
   * Função que atualiza os dados da transação
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.attTransaction = (params) => {
    params.api_token = api_token;
    return attTransaction(params);
  }

  //User

  /**
   * Função que retorna os detalhes de um usuário
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getUserDetails = (params) => {
    params.api_token = api_token;
    return getUserDetails(params);
  }

  /**
   * Função que retorna os dados do impacto social gerado por um usuário
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getUserImpact = (params) => {
    params.api_token = api_token;
    return getUserImpact(params);
  }

  /**
   * Função que retorna os usuários de uma loja
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   */
  this.getUserList = (params) => {
    params.api_token = api_token;
    return getUserList(params);
  }

  /**
   * Função para a atualização de um usuário
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com os dados do usuário
   */
  this.updateUser = (params, body) => {
    params.api_token = api_token;
    return updateUser(params, body);
  }

  /**
   * Função para a criação de um novo usuário
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com os dados do usuário
   */
  this.createUser = (params, body) => {
    params.api_token = api_token;
    return createUser(params, body);
  }

  /**
   * Função para adicionar ou desabilitar causas associadas a um usuário
   *
   * @param { Object } params é um objeto de parametros para configurações do retorno da api
   * @param { Object } body é um objeto com arrays de causas
   */
  this.updateUserCause = (params, body) => {
    params.api_token = api_token;
    return createUser(params, body);
  }
}
