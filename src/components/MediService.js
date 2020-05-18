import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { fetchMediServices } from '../actions/mediActions';
import { fetchServicesData } from '../api';

 class MediService extends Component {

    componentWillMount(){
      const fetchServices = async() =>{
        const data =  await fetchServicesData();

      console.log(data);
      }
      fetchServices();
    
    }


    render() {
        return (
          <h1>medi services</h1>
       );
    }
    
};

    export default  MediService;
