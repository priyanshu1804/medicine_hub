import axios from "axios";
import { useEffect, useState } from "react"
import { CardContainer } from "../components/Card";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const [filter,setFilter] = useState("");
  const navigate = useNavigate();
  const [med,setMed] = useState([]);
  useEffect(()=>{
    async function fetch(){
      
      try{
        const {data} =await axios.get(`https://medicine-hub.onrender.com/medicine/all?filter=${filter}`,{
          headers:{
            Authorization:localStorage.getItem('token')
          }
        });
        setMed(data.data);
      }catch(e){
        navigate("/signup");
      }
      
    }
    fetch();
  },[filter])


  return <div>
    <NavBar></NavBar>
      <div className="flex items-center justify-center">

        <input className="border-2 text-black mb-10 mt-10 w-52 flex justify-center items-center pl-5 pb-2 " placeholder="Search medicine" onChange={(e)=>setFilter(e.target.value)}></input>
      </div>
       <CardContainer med={med}></CardContainer>
  </div>
}