import axios from 'axios';

const AuthService = {
    login: async (username, password) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/form-login`, { username, password });
            const token = response.data.token;
            localStorage.setItem('adminToken', token);
        } catch (error) {
            throw new Error('Invalid credentials');
        }
    },
    logout: () => {
        localStorage.removeItem('adminToken');
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('adminToken');
    },
};

export default AuthService;
