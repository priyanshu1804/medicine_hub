import React from "react"
import {useNavigate} from 'react-router-dom'
import Button from "../components/Button";
export default function NavBar(){
    const navigate = useNavigate();

    return <div>
        <div className="flex justify-end">
            <div className="flex h-14 w-60 pt-2 pb-2 pl-1 pr-1 ">
            {/* <Button label={"Create Med"} onPress={()=>navigate("/create")}></Button>
            <Button label={"My Med"} onPress={()=>navigate("/mymed")}></Button>         */}
            <div className="h-14 w-full flex flex-row-reverse pr-4 pt-4">
                <div className="w-20 ">
                    <Button label={"Home"} onPress={()=>navigate("/dashboard")}></Button>
                </div>
            </div>
            
            
            </div>
        </div>
    </div>
}