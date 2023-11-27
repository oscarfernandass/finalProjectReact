    import React from "react";
    import './Main.css';
    import { useState } from "react";
    import 'react-toastify/dist/ReactToastify.css';
    const Biller=(props)=>{
        const[qnty,Setqnty]=useState(0);
        
        const increaser=()=>{
            props.showToast1();
            Setqnty(qnty+1);
            props.onQuantityChange(qnty + 1);
        };
        const decreaser=()=>{
            if(qnty>0){
                props.showToast2();
            Setqnty(qnty-1);
            props.onQuantityChange(qnty - 1);
            }
        };
        return(
            <div id="billmain">
                <div>
                    <h3>${props.amt}</h3>
                </div>

                <div>
                    <input type="button" value="Add To Cart" id="addbutt" onClick={increaser}></input>
                </div>

                <div>
                    <h3>{qnty}X</h3>
                </div>

                <div>
                    <input type="button" value="-" id="removebutt" onClick={decreaser}></input>
                </div>
            </div>
        );
    }
    export default Biller;