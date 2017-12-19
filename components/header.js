import React from 'react';

export default class Header extends React.Component{
   constructor(){
      super();
      this.state = {message:'Hello Naveen'}
   }

   render(){
      return(
         <div className="header">
            <h4>{this.props.title}</h4>
            <p>{this.state.message}</p>
         </div>
      )
   }
}
