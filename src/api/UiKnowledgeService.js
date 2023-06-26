/*
 * This module is in charge for all of the methods related to getting things
 * for the API. For instance, knowing the IP addresses, MAC addresses, or tags
 * in existence.
 */

import { api_url } from "./constants.js";

const axios = require("axios").default;

export function getAllIpAddresses() {
  return axios.post(api_url + "/all_ip_addresses", {});
}

export function getAllMacAddresses() {
  return axios.post(api_url + "/all_mac_addresses", {});
}

export function getAllTags() {
  return axios.post(api_url + "/all_tags", {});
}

export function getRecordingSettings()
{
  return axios.post(api_url + "/recording_settings", {});
}
