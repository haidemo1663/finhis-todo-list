import React,{Component} from "react";
//import poster from "../../image/poster.svg";
import plus from "../../image/plus.svg";
import Item from "./Item/item";
import "./todolist.css";
class Todolist extends Component{
    constructor(){
        super();
        this.state={
            todolist:[{
                content: "College",
                isComplete:true
            },
            {
                content: "Workout",
                isComplete:true
            },
            {
                content: "Working on Project",
                isComplete:false
            },
            {
                content: "Doing Homework",
                isComplete:false
            },
            {
                content: "Learn",
                isComplete:false
            },
            {
                content: "Call my mom",
                isComplete:false
            },
            {
                content: "Read A Book",
                isComplete:false
            }
        ],
        "searchbox":""
        }
        this.onKeyUp=this.onKeyUp.bind(this);
    }
    onItemClicked(item) {
        return () => {
          const  todoItems = this.state.todolist;
          this.setState({
            todoItems: todoItems.map((currentItem) => {
              if(currentItem.content===item.content) currentItem.isComplete=true;
               return currentItem;
            }),
          });
        }
      }
    
      onKeyUp(e) {
        if (e.keyCode === 13) {
          //enter code
          let text = e.target.value;
          if (!text) {
            return;
          }
          text = text.trim(); //delete space
          if (!text) {
            return;
          }
          console.log(e.target.value);
          this.setState({
            searchbox: "",
            todolist: [
              { content: text, isComplete: false },
              ...this.state.todolist,
            ],
          });
        }
      }
      submitForm(e) {
        //Chặn các event mặc định của form
        e.preventDefault();
     
       //Gọi hàm validationForm() dùng để kiểm tra form
        // const validation = this.validationForm()
     
        // //Kiểm tra lỗi của input trong form và hiển thị
        // if (validation.error) {
        //   alert(validation.msg)
        // }else{
        //   alert('Submit form success')
        // }
      }
    render(){
        const {todolist,searchbox}=this.state;
        console.log(this.state);
        return(
            <div className="main-content">
            <div className="searchbox">
               <form onSubmit={e=>{this.submitForm(e)}}>
                    <input
                    type="text"
                    name="searchbox"
                    value={searchbox}
                    placeholder="Enter Somethings..."
                    onChange={(e)=>this.setState({"searchbox":e.target.value})}
                    onKeyUp={this.onKeyUp}
                    />
                </form>
               </div>
                <div className="todolist">
                        <p>UPCOMING</p>
                        {
                            todolist.filter((item)=>item.isComplete===false)
                            .map((item,index)=><Item key={index} item={item} index={index} onClick={this.onItemClicked(item)}/>)
                        }
                        <p>FINISHED</p> 
                        {
                            todolist.filter((item)=>item.isComplete===true)
                            .map((item,index)=><Item key={index} item={item} index={index}/>)
                        }
                    </div>
                    <div className="add-icon">
                        <img src={plus} alt="plus"/>
                    </div>
                </div>
        );

    }
}
export default Todolist;