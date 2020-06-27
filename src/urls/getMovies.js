import React from 'react';
import axios from 'axios';

const api =  axios.create({
        baseURL: 'https://marvel-heroes-api.vercel.app/api/all'
    });


export default api;