import axios  from 'axios';
export const runCallback = (callback) => {
   callback('abc');
}

export const createObject = (classItem) => {
    new classItem();
}


export const getData = () => {
    return axios.get('https://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false').then(res =>res.data)
}