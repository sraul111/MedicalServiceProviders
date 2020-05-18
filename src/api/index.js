import axios from 'axios';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const API = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/';
const fAPI = proxyurl+API;
const headers = {
                  'Accept' : 'application/json',
}


export const  fetchServicesData = async () => {
  try {
    const { data } = await axios.get(`${fAPI}/services`);
    //  console.log(data);
    //return data;
     return data.map(({id,attributes})=>({id,attributes:attributes.name}));
    // return data.map(({ confirmed, deaths, reportDate: date }) =>
    // ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};