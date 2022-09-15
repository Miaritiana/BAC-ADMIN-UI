import axios from "axios"

const deleteRequest = async (link:string) => {
    try {
        const response = await axios.delete(link);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default deleteRequest;