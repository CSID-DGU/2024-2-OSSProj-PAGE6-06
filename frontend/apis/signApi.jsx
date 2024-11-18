import axios from 'axios';
const API_URL = "http://3.39.46.222";

export async function loginPost(username, password) {
    try {
        const response = await axios.post(`${API_URL}/api/user/login/`, {
            username,
            password
        });

        const { token } = response.data; 
        if (token) {
            localStorage.setItem('accessToken', token); 
            console.log("로그인 성공");
        } else {
            console.error("로그인 실패: 토큰이 없습니다.");
        }
        
    } catch (error) {
        console.error("로그인 요청 중 오류 발생:", error.message);
    }
}