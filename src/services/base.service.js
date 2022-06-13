import axios from "axios"
const API_URL = 'http://localhost:3001/api'
export default class BaseService {
    constructor(props) {
        this.api = API_URL
        this.endpoint = props.endpoint
    }
    GetAll = async (params) => {
        var result = await axios({
            method: 'GET',
            url: `${this.api}/${this.endpoint}?skip=${params.skip}&limit=${params.take}&orderBy=${params.orderBy}`,
            data: null
        })
        return result;
    }
}