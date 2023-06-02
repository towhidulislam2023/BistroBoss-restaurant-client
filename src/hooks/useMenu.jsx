import { useContext } from "react";
import { useEffect, useState } from "react"
import { AuthProviderContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu=()=>{
    // const [menu,setMenu]=useState([])
    const {loading}=useContext(AuthProviderContext)
    const [axiosSecure]=useAxiosSecure()
    // const [loading,setLoading]=useState(true)
    const { isLoading, refetch, data: menu = [] } = useQuery({
        queryKey: ["carts",],
        enabled: !loading,
        queryFn: async () => {
                const res = await axiosSecure(`/allFoodMenu`)
                console.log('res from axios', res)
                return res.data;    
        },
    });
    return [menu, refetch];
};



//     useEffect(()=>{
//         fetch("http://localhost:5000/allFoodMenu")
//         .then(res=>res.json())
//         .then(data=>{
//             setMenu(data)
//             setLoading(false)
//         })
//     },[])
//     return []
// }
export default useMenu