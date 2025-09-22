import { createClient } from '@supabase/supabase-js';
const supabaseUrl =
import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl,supabaseAnonKey)


import { supabase } from "./supabaseClient";
const handleSignUp= async(email,password) =>
{
    const {data , error}= await
    supabase.auth.signUp({email,password});
};

const handleLogin=async (email,password)=>
{
    const {data,error}=await
    supabase.auth.signInWithPassword({email,password});
};

import React from "react";
import Caretaker_list from './caretakerlist';

function App(){
    PaymentRequestUpdateEvent(
        <div className="App"><Caretaker_list /></div>
    );
}

export default App;
