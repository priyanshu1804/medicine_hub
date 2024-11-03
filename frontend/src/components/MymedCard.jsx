import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import axios from 'axios';

export default function MymedCard({name,salt,id}) {
    const navigate = useNavigate();
    
    return (
        <div className="w-80 mb-3 bg-gray-100 border border-gray-600 rounded-lg shadow-md bg-blue-300 pl-2 pt-1 pl-1 pr-2">
            <img src="https://www.verywellhealth.com/thmb/JA2aeqlRra4nIu-rXfiLVRcTW14=/6048x4032/filters:fill(87E3EF,1)/medicine-pills-463594335-ba46b2f34a764be6a9c0e56a308cb938.jpg" alt="" />
            <div className="text-black mb-2 text-3xl font-bold">{name}</div>
            <div className=" font-medium text-gray-800">{salt}</div>
            <div className=" font-medium text-gray-800 flex">
                <h1 className="font-bold mt-2">Quantity : </h1>
                <h2 className="mt-2">10</h2>
            </div>
            <div className="w-full flex flex-row space-x-4 pt-10">
                <div className="w-full">
                    
                    <button className=' flex justify-center items-center w-full text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 truncate' onClick={async ()=>{
                         try{
                            const {data} =await axios.delete(`https://medicine-hub-alpha.vercel.app/medicine/${id}`,{
                              headers:{
                                Authorization:localStorage.getItem('token')
                              }
                            });
                            window.location.reload();
                            
                          }catch(e){
                            console.log(e);
                            navigate("/signup");
                          }

                    }}> Delete</button>
                </div>
            </div>
        </div>
    );
}

export function MymedcardContainer({ med }) {
    return (
        <div className="h-fit grid grid-cols-4 gap-4">
            {med.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3">
                    <MymedCard name={card.name} salt={card.salt} id={card._id} />
                </div>
            ))} 
        </div>
    );
}