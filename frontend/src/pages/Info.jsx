import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";

export default function Info(){
   
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [med,setMed] = useState({})
    const [loading , setLoading] = useState(true);
    useEffect(()=>{
        const fetch = async()=>{
            const {data} = await axios.get(`https://medicine-hub-alpha.vercel.app/medicine/info/${id}`,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            });
            setMed(data.medicine);
            setLoading(false);
        }   
        fetch()
    },[])
    if(loading){
        return <Loading></Loading>
    }
    
    return <div className="bg-gray-900 h-screen">
        <div className="flex w-full">
            <div className=" w-full h-[8rem]">
                <NavBar></NavBar>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
        <div className="text-white pl-4 pr-4 bg-gray-800 w-96 h-fit flex flex-col rounded-md border-0 border-black text-3xl text-left ">
            <h1 className="text-center mb-5 pt-2 underline"> Medicine Information</h1>
            <img className="mb-7" src="https://www.verywellhealth.com/thmb/JA2aeqlRra4nIu-rXfiLVRcTW14=/6048x4032/filters:fill(87E3EF,1)/medicine-pills-463594335-ba46b2f34a764be6a9c0e56a308cb938.jpg" alt="" />
            <div className="w-full mb-4 text-4xl font-semibold">Name: {med.name}</div>
            <div className="w-full mb-4 text-4xl font-semibold">Salt: {med.salt}</div>
            <div className="w-full mb-4 text-4xl font-semibold">Donated By: {med.donatedBy}</div>
        </div>


        </div>
        
        
    </div>
}