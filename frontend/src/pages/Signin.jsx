import axios from "axios";
import Bottom from "../components/Bottom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import { useState } from "react";

export default function Signin(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleSignin =async ()=>{
        console.log("hello1");
        const res =await axios.post("http://medicine-hub-nu.vercel.app/api/v1/user/signin",
            {
                username:username,
                password:password
            }
        );
        console.log("hello2");
        console.log(res.data);

    }

    
    return <div className="bg-slate-500 h-screen flex justify-center">
    <div className="flex flex-col justify-center"> 
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label = {"Sign in"}></Heading>
            <Subheading label= {"Enter your infromation to signin account"}></Subheading>
            <Inputbox label ={"user name"} placeholder={"rajatgupta05"} set ={setUsername}></Inputbox>
            <Inputbox label ={"Password"} placeholder={"12345"} set ={setPassword}></Inputbox>
            <div className="pt-4">
                <Button label={"Sign in"} onPress={handleSignin}></Button>
            </div>
            <Bottom label ={"Dont have an account?"} buttonText={"Signup"} to={'/signup'}></Bottom>

        </div>

    </div>
    

</div>
};