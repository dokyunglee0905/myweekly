import React, { useState } from "react"
import {useHistory} from "react-router-dom"

import "./App.css"

const Weeks = (props) =>{
    const [list,Setlist] = useState([0,1,2,3,4])
    const history = useHistory();
    
    return(
        <div>
            <div className="wrap">
                 <h1 className="title">나의 일주일?</h1>
                {props.day.map((a,i)=>{
                    let num = Math.floor(Math.random() * 5+1);
                    return (
                        <div className="contents">
                            <h2 className="day">{props.day[i]}</h2>
                            <div className="Starlist">
                            {list.map((a,i)=>{
                                return(
                                    <div className="Star" style={{
                                        backgroundColor: num < i + 1 ? "gray" : "yellow"}}></div>
                                )
                            }
                            )}
                            </div>
                            <button onClick={()=>{
                                history.push("/Detail/"+i)
                            }}
                            >
                            </button>

                        </div>
                    )
                }
                
                )}

            </div>
        </div>       
    )
}
export default Weeks;
