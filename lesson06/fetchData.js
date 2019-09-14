import axios from 'axios';

// export const fetchData = (fn) => {
//     axios.get('https://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false')
//     .then((response) =>{
//         fn(response.data.Success)
//     });
// }

//正常状态请求
// export const fetchData = () => {
//     return axios.get('https://rapi.qingting.fm/recommendations/0/channel_list?more=true&replay=false');
// }
//异常状态请求
export const fetchData = () => {
    return axios.get('https://rapi.qingting.fm/recommendation1s/001/channel_list?more=true&replay=false');
}









