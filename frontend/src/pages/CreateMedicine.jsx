import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function CreateMedicine(){

    const [name,setName] = useState("");
    const [salt,setSalt] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    

    return <div className="bg-slate-500 h-screen">
        
            <div className="h-8 w-full flex justify-end pr-4 pt-4">
                <div>
                    <Button label={"Home"} onPress={()=>navigate("/dashboard")}></Button>
                </div>
            </div>
        <div className="flex flex-row justify-center mt-24"> 

            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
               
                <Heading label = {"Signup"}></Heading>
                <Subheading label= {"Enter your infromation to create an account"}></Subheading>
                <Inputbox label ={"Name"} placeholder={"Paracetamol"} set={setName}></Inputbox>
                <Inputbox label ={"Salt"} placeholder={"Nacl"} set={setSalt}></Inputbox>
                <div className="pt-4">
                    <Button label={"Add"} onPress={ async ()=>{
                        const res =await axios.post("https://medicine-hub-nu.vercel.app/medicine/",
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
                        
                        // navigate("/dashboard");
                    }}></Button>
                </div>
                <Bottom label ={"Already have an account?"} buttonText={"Signin"} to={'/signin'}></Bottom>
            </div>

        </div>

    </div>
};
