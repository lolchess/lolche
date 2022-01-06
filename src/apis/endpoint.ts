// const proxy: string = "https://cors.bridged.cc/"; // NOTE: 회원가입 후 승인을 받아야하는 것 같아서 사용하지 않기로...
// const proxy: string = "https://cors-anywhere.herokuapp.com/"; // NOTE: https://github.com/Rob--W/cors-anywhere
const proxy: string = "https://api.allorigins.win/raw?url="; // NOTE: 429 에러로 인해... https://allorigins.win/ 로 옮김.
const url: string = "https://kr.api.riotgames.com/";

export const endpoint: string = proxy + url;
export const apiKey: string = "?api_key=" + process.env.REACT_APP_RIOT_API_KEY;
