import travimate from "../travimate";


const APIUsers = {
    async registerUsers(data:any) {
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

    async updateProfile(data:any) {
        try {
            const id = data.id;
            const response = await travimate.patch(`/endpoint/:${id}`, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },    
};

export default APIUsers;