import { useState } from "react";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Signup(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
   
    return <div className="bg-slate-500 h-screen flex justify-center">
        <div className="flex flex-col justify-center"> 
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Signup"}></Heading>
                <Subheading label= {"Enter your infromation to create an account"}></Subheading>
                <Inputbox label ={"Name"} placeholder={"rajat gupta"} set={setName}></Inputbox>
                <Inputbox label ={"Email"} placeholder={"rajat@gmail.com"} set={setEmail}></Inputbox>
                <Inputbox label ={"Password"} placeholder={"12345"} set={setPassword}></Inputbox>
                <div className="pt-4">
                    <Button label={"Sign up"} onPress={ async ()=>{
                        const res =await axios.post(`https://medicine-hub-alpha.vercel.app/user/signup`,
                        {
                            name:name,
                            email:email,
                            password:password
                        })
                        localStorage.setItem("token", "bearer "+res.data.token);
                        navigate("/");
                    }}></Button>
                </div>
                <Bottom label ={"Already have an account?"} buttonText={"Signin"} to={'/signin'}></Bottom>
            </div>

        </div>

    </div>
};
