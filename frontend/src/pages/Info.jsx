import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import Button from "../components/Button";

export default function Info(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [med,setMed] = useState({})
    useEffect(()=>{
        const fetch = async()=>{
            const {data} = await axios.get(`http://medicine-hub-nu.vercel.app/medicine/info/${id}`,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            });
            setMed(data.medicine);
        }   
        fetch()
    },[])

    
    return <div >
        <div className="flex w-full justify-end pt-2 pr-2">
      <div>
        <Button label={"Home"} onPress={()=>navigate("/dashboard")}></Button>
      </div>
        </div>
        <div className="w-full flex justify-center items-center">
        <div className="pl-4 pr-4 bg-zinc-300 w-96 h-96 flex flex-col justify-center items-center rounded-md border-0 border-black text-3xl text-left mb-4">
            <div className="w-full mb-4">Name: {med.name}</div>
            <div className="w-full mb-4">Salt: {med.salt}</div>
            <div className="w-full mb-4">Donated By: {med.donatedBy}</div>
        </div>


        </div>
        
        
    </div>
}