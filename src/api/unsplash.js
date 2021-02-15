import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID XeWVvZ58_wEpavnuhmzcSZhEAUQ3yEQn2ZLrXV4tc3k'
    }
})