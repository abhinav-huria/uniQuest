import React from 'react';
import Navbar from './Navbar';

export default function Answers(){
    return(<>
    <Navbar/>
    <div>
    <section class="flex flex-1 w-3/5 h-screen ml-20 mt-10 mb-10">
        
        <div class="flex flex-1 w-10/12 h-16 m-10 border-2 rounded border-black shadow-lg grid-rows-1">
            question
        </div>
        
        
        <div class="flex flex-1 h-16 w-10/12 m-10 border-2 rounded border-black shadow-lg grid-rows-2">
            
        </div>
        </section>
    </div>
    </>);

}