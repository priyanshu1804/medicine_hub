import { Avatar} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from "react";



export default function Dashboard(){
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }

  useEffect(()=>{
    if(localStorage.getItem('token') === null){
      navigate('/signup');
      window.location.reload();
      return;
    }

  },[])

   const [open,setOpen]= useState(false);
   const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    };
    const [islogin, setisLogin]= useState(false);
   const DrawerList = (
    <div className=" w-full flex flex-col">
      
     <Button className="text-white" onClick={()=>navigate("/myprofile")}>Profile</Button>
     <Button className="text-white" onClick={()=>navigate("/mymed")}>My Medicines</Button>
     <Button className="text-white" onClick={logout}>Logout</Button>
      </div>
  );

  
    return <div>
        <div className="bg-gray-800 flex flex-row-reverse pt-4 pr-5">
          <Avatar alt="Remy Sharp" src="/stat.jpg" onClick={toggleDrawer(true)}/>
          <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>

        </div>
          
        <div>
          
        </div>





       <div className="bg-gray-800 w-full h-[44rem] flex flex-col items-center justify-center space-y-5">
        <div className="">
            <h1 className="text-white font-semibold text-6xl text-center">Share Unused Medicine, Save Lives</h1>
            <h2 className="text-gray-500 text-center ">Connect donors with those in need. Reduce waste, increase access to vital medications.</h2>
        </div>
        <div className= "flex-row space-x-5">

        <Button variant="contained" onClick={()=>navigate("/create")}>Donate Medicine</Button>
        <Button variant="outlined"onClick={()=>navigate("/home")}>Find Medicine</Button>
    
        </div>
       </div>

       <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 text-white">
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                
                <h3 className="text-xl font-bold">List Your Unused Medicine</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Easily post details of your unused, unexpired medications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                
                <h3 className="text-xl font-bold">Find Needed Medication</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Search our database for available medicines in your area.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                
                <h3 className="text-xl font-bold">Connect and Share</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Communicate securely with donors to arrange medicine pickup.
                </p>
              </div>
            </div>
          </div>
        </section>


    </div>
}


