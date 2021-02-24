import axios from 'axios';

export const contactSend = axios.create({
  baseURL: 'https://webhook.site/df5a34e5-7c6a-47ac-9022-0c4a8085af46/',
})

export const getData = axios.create({
  baseURL: 'https://accenture-server-rn.herokuapp.com/',
})