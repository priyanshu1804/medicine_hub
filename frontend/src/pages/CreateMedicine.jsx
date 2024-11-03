import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Success from "../components/Success";



export default function CreateMedicine(){
   
    const [name,setName] = useState("");
    const [salt,setSalt] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const [clicked,setClicked]=useState(false);

    if(clicked){
        return <Success></Success>
    }

    return <div className="bg-slate-500 h-screen">
        
            <div className="h-14 w-full flex flex-row-reverse pr-4 pt-4">
                <div className="w-20 ">
                    <Button label={"Home"} onPress={()=>navigate("/dashboard")}></Button>
                </div>
            </div>
        <div className="flex flex-row justify-center mt-24"> 

            <div className="rounded-lg bg-white w-80 text-center p-2 h-[32rem] w-[32rem] px-4">
               
                <Heading label = {"Add New Medicine Listing"}></Heading>
                <Subheading label= {"Please provide details about the medicine you wish to donate."}></Subheading>
                <Inputbox label ={"Name"} placeholder={"Paracetamol"} set={setName}></Inputbox>
                <Inputbox label ={"Salt"} placeholder={"Nacl"} set={setSalt}></Inputbox>
                <Inputbox label ={"Quantity"} placeholder={"5"} set={setSalt}></Inputbox>
                <Inputbox label ={"Expiry Date"} placeholder={"January/2024"} set={setSalt}></Inputbox>
                <div className="pt-4 flex justify-center h-fit">
                    <Button label={"Add"} onPress={ async ()=>{
                        const res =await axios.post(`https://medicine-hub-alpha.vercel.app/medicine/`,
                        {
                            name:name,
                            salt:salt
                        },
                        {
                            headers:{
                                Authorization:localStorage.getItem('token')
                            }
                        }
                    )
                    setClicked(true);
                    }}
                    ></Button>
                </div>
            </div>

        </div>

    </div>
};
