import React,{Component} from "react";
import classNames from "classnames";
import check from "../../../image/check.svg";
import "./item.css";
class Item extends Component{
    constructor(props){
        super(props);
        this.state=props.item;
    }
    render(){
        const {item,index,onClick}=this.props;
        return(
            <div className="container">
                    <div className={classNames("item",(item.isComplete)? "iscompleted" : "uncompleted")}>
                    {index +" . "+item.content}
                    </div>
                    {
                        (item.isComplete)?"": <div className="activity" onClick={onClick} >
                        <img src={check} alt="done" />
                    </div>
                    }
            </div>
        );

    }
}
export default Item;