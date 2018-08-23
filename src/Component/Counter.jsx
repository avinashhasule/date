import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component {
    state = {
        count:0,
        tag:['tag1','tag2','tag3']
      }
      constructor(){
          super();
          console.log();
      }
      btnclick =(product) =>{   
        this.setState({count:this.state.count+1});        
      }
      doHandleIncrement =() =>{   
        this.btnclick({id:1}) 
      }

      renderTags = ()=>{
          if(this.state.tag.length===0) return <p> There are no tag ! </p>;
          return <ul> {this.state.tag.map(tag=><li key={tag}>{tag}</li>)}</ul>
      }
    render() { 
       // let classes=this.getBadgeClass();
        return (
            <div>
               
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={this.btnclick} className='btn btn-secondary btn-sm'>Increment</button> 
          

            {this.renderTags()}
            </ div>
        );
    
    }
    getBadgeClass(){
        let classes='badge m-2 badge-';
        classes+=this.state.count===0?'warnign' :'primary';
        return classes;
    }
 formatCount(){
     const { count } =this.state;
     return this.state.count === 0 ? 'zero':count;
 }
}
export default Counter;
