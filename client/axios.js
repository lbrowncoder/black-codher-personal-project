const axios = require('axios');
import { response } from 'express';

const sendData = () => {
    axios.post('http://localhost:5000/api/review',{
        name:'test',
        number: '08739',
        email: 'email@hotmail.com'
    })
    .then(res=> {
        console.log(re);
    });
    };

    