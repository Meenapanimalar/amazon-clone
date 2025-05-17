import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-2a9b0.cloudfunctions.net/api' //the api (cloud function) url
    // 'http://127.0.0.1:5001/clone-2a9b0/us-central1/api' //the local host url
});

export default instance;