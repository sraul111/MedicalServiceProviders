import {FETCH_MEDISERVICES,FETCH_MEDIPROVIDERS,fetchErrors} from './types';
import axios from 'axios';

const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const API = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/';
const fAPI = proxyurl+API;
const headers = {
                  'Accept' : 'application/json',
}

export  function fetchMediServices () {
const URL = `${fAPI}/services`;
  const request =  axios.get(URL,{headers});

  return dispatch => {
        return request.then((data) => {
          dispatch({
            type : FETCH_MEDISERVICES,
            payload : data
          })
        })
        .then((error) =>{
             throw(error);
        })
        .catch(error => {
          dispatch(fetchErrors(error));
        })
  }

} 

export const abc = () => dispatch => {
    var proxyurl = 'https://cors-anywhere.herokuapp.com/';
    var url = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services';

  fetch(proxyurl+url)
    .then(res => res.json())
    .then(mediservices =>
      dispatch({
        type: FETCH_MEDISERVICES,
        payload: mediservices
      })
    );

    
        console.log('sujit');
};


export const fetchMediProvider = () => dispatch => {
    var proxyurl = 'https://cors-anywhere.herokuapp.com/';
    var url = 'https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&amp;page%5Bnumber%5D=1&amp;page%5Bsize%5D=10';

  fetch(proxyurl+url)
    .then(res => res.json())
    .then(mediproviders =>
      dispatch({
        type: FETCH_MEDIPROVIDERS,
        payload: mediproviders
      })
    );
};