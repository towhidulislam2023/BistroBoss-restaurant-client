import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';


const useAxiosSecure = () => {
    const { logout } = useContext(AuthProviderContext)
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('Token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logout();
                    navigate('/');
                }
                return Promise.reject(error);
            }
        );
    }, [logout, navigate, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;