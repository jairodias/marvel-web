import React from 'react';
import axios from 'axios';

function getUrl(){
    return axios.get('https://marvel-heroes-api.vercel.app/api/all');
}


export default getUrl;