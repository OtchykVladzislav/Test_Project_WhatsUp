import axios from "axios";

export default class RequestList {
    static async auth(idInstance,apiTokenInstance) {
        const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
        return response;
    }

    static async send(idInstance,apiTokenInstance, data) {
        const response = await axios.post(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, 
                                            data, 
                                            { 
                                                headers: {
                                                    "Content-Type": 'application/json'
                                                } 
                                            })
    return response;
    }

    static async receive(idInstance,apiTokenInstance) {
        const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`, {maxRedirects: 0})
        return response;
    }

    static async delete(idInstance,apiTokenInstance, receiptId) {
        const response = await axios.delete(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/` + receiptId)
        return response;
    }
}