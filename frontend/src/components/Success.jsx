import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function (){
    const navigate = useNavigate();
    return <div className="w-full h-screen bg-gray-800 flex justify-center items-center">
        <div className="bg-zinc-950 w-[32rem] h-[22rem] text-white pt-10 rounded-md" >
            <div className="w-full h-[10rem] flex justify-center">
                <img src="https://img.icons8.com/?size=100&id=70yRC8npwT3d&format=png&color=000000" alt="" />
            </div>

            <div className=" h-[10rem] pt-9">
                <h1 className="text-4xl font-semibold text-center">Successfully Added !! </h1>
                <div className="flex justify-center pt-3">
                    <div className="w-[28rem]">
                        <Button label={"Home"} onPress={()=>navigate("/")}></Button>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>
}   