import { useContext } from "react";
import { AuthProviderContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const { user, loading } = useContext(AuthProviderContext);
    const token = localStorage.getItem("Token");
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, refetch, data: carts = [] } = useQuery({
        queryKey: ["carts", user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (user && user.email) {
                const res = await axiosSecure(`/carts?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
                
            }
        },
    });
    return [carts, refetch];
};

export default useCart;