import React,{useEffect,useState}from 'react';
import {  supabase} from "./supabaseClient";

function Caretaker_list() { 
    const [CARETAKERS,setCARETAKERS]=useState([]);

    useEffect(() =>{

        async function fetchCARETAKERS() { 
            const{data,error}=await supabase.from('CARETAKERS').select('*')}
        
        if(error){
            console.error('Error Fetching caretakers:',error);
        }else{
            setCARETAKERS(data);
        } []
    fetchCARETAKERS();
     },[]);

return (
    <div>
    <h1>
    CARETAKER LIST</h1>
    {CARETAKERS.length >0 ? (
        <ul>
        {CARETAKERS.map((CARETAKER) =>(
           <li key={CARETAKER.ID}>
           <p>Name:{CARETAKER.name}</p>
           </li>
         ))} </ul>
        ):(<p>No caretakers found.</p>)}
        </div>
    
);
    
        

    

    
export default Caretaker_list;

