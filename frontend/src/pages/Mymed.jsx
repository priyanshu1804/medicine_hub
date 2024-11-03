import axios from "axios";
import { useEffect, useState } from "react"
import Card, { CardContainer } from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import { MymedcardContainer } from "../components/MymedCard";

export default function Mymed(){
 
  const navigate = useNavigate();
  const [med,setMed] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    async function fetch(){
      const {data} =await axios.get(`https://medicine-hub-alpha.vercel.app/medicine/my`,{
        headers:{
          Authorization:localStorage.getItem('token')
        }
      });
      setMed(data.data);
      setLoading(false);

    }
    fetch();
  },[])

  if(loading){
    return <Loading></Loading>
  }
  return <div>
    <div className="">
      <div className=" h-[10rem]">  
      <NavBar></NavBar>
      
      <h1 className="text-center text-4xl font-bold underline">My Donated Medicines</h1>
      </div>
    </div>
    <MymedcardContainer med={med}></MymedcardContainer>

      {/* {med.map(medicine=><Card name={medicine.name} salt={medicine.salt}></Card>)} */}
  </div>
}