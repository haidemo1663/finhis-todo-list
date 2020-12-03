import React,{Component} from "react";
import wifi from "../../image/wifi.svg";
import battery from "../../image/charging.svg";   
import more from "../../image/more.svg";    
import threeline from "../../image/menu-of-three-lines.svg";
//import classNames from "classnames"     
import "./header.css";
class Header extends Component{
    submitForm(e){}
    render(){
        return (
            <div className="header">
               <div className="top">
                <div className="start-head">
                        <img src={more} alt="wifi"/>    
                        <img src={wifi} alt="wifi"/>
                    </div>
                    <div className="middle-head">
                        <p>9:41 AM</p>
                    </div> 
                    <div className="end-head">
                        <p>100%</p>
                        <img src={battery} alt="battery"/>
                    </div>
               </div>
               <div className="title">
                   <img src={threeline} alt="threeline" />
                   <h3>DAILIST</h3>
               </div>

            </div>
        );
    }
}
export default Header;