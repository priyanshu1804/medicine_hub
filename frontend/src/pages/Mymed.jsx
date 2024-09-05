import axios from "axios";
import { useEffect, useState } from "react"
import Card, { CardContainer } from "../components/Card";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Mymed(){
  const navigate = useNavigate();
  const [med,setMed] = useState([]);
  useEffect(()=>{
    async function fetch(){
      const {data} =await axios.get("https://medicine-hub-tau.vercel.app/medicine/my",{
        headers:{
          Authorization:localStorage.getItem('token')
        }
      });
      setMed(data.data);
    }
    fetch();
  },[])

  return <div>
    <div className="flex w-full justify-end pt-2 pr-2">
      <div>
        <Button label={"Home"} onPress={()=>navigate("/dashboard")}></Button>
      </div>
    </div>
    <CardContainer med={med}></CardContainer>
      {/* {med.map(medicine=><Card name={medicine.name} salt={medicine.salt}></Card>)} */}
  </div>
}
