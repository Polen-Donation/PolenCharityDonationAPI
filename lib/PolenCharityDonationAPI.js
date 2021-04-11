import { getCategories, getAllCauses, getOwnCauses } from "./cause/cause.js";

export default function PolenCharityDonationAPI(api_token) {
  this.api_token = api_token
  this.getCategories = async function(){
    return await getCategories({api_token})
  }
  this.getAllCauses = async function () {
    return await getAllCauses({api_token})
  }
  this.getOwnCauses = async function(storeId){
    return await getOwnCauses({api_token, storeId})
  }
}
