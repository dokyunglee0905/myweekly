import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom"


const Detail = (props) => {
    const [count, Setcount] = useState([0, 1, 2, 3, 4])
    let history = useHistory();
    let { id } = useParams();
    let [star, starchange] = useState()
    
    
    return (
        <div className="Detailwrap">
            <h1> <span>{props.day[id]}요일</span> 평점 남기기</h1>
            <div className="Starlist">
                {count.map((a, i) => {
                    return (
                        <div className="Star" onClick={() => {
                            starchange(i + 1)
                        }} style={{ backgroundColor: star < i + 1 ? "gray" : "yellow" }} ></div>
                    )
                }
                )}
            </div>
            <button id="random" className="starbtn" onClick={() => { history.push("/") }}  >평점남기기</button>
        </div>
    )
}


export default Detail;

