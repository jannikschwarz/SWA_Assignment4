import 'axios'
import axios from 'axios';
let userToken = ''
let username = ''
let Game = {
    id: '',
    user: '',
    score: '',
    completed: false
}

export function setUsername(name: string){
    username = name;
}

export function getUsername(){
    return username;
}

export function setUserToken(token: string){
    userToken = token;
}

export function getUserToken() : string{
    return userToken;
}

export async function getGames() {
    const res = await axios.post('http://localhost:9090/games?token=' + userToken);

    if(res.status != 403){
        return res.data;
    }else{
        return undefined;
    }
}