import { GET_FLIGHT_API_URL } from "../../utils/endpoint";
import travimatev2 from "../tavimatev2";
import travimate from "../travimate";

// Contoh misal ngambil api building

const APIFlights = {
    async getAllFlight() {
        try {
            const response = await travimatev2.get(`${GET_FLIGHT_API_URL}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async createFlights(data:any) {
        try {
            const response = await travimate.post("/admin/offices/create", data, {
                headers: {
                    // "Content-Type": "multipart/form-data",
                    // Authorization: '',
                },
            });
            return response;
        } catch (err) {
            console.log(err);
        }
    },

    async updateFlights(data:any) {
        try {
            const id = data.id;
            const response = await travimate.patch(`/endpoint/:${id}`, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteFlights(id:any) {
        try {
            const response = await travimate.delete(`/endpoint/:${id}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    //   Kalo misalkan ada yang lain tinggal tambahin disini
};

export default APIFlights;