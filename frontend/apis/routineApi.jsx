import axios from 'axios';

const API_URL = "http://3.39.46.222";

export async function getRoutineList() {
    try {
        const token = localStorage.getItem("accessToken"); 
        const response = await axios.get(`${API_URL}/api/routinelist`, {
            headers: {
                Authorization: `Token ${token}`, 
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch routine list:", error);

        throw error;
    }
}