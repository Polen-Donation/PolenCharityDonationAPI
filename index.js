import PolenCharityDonationAPI from "./lib/PolenCharityDonationAPI.js";

export default function polenCharityDonationAPI(token) {
  return new PolenCharityDonationAPI(token);
}
