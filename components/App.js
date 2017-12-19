import React from 'react';
import Header from './header'
import Footer from './footer'


class App extends React.Component{
   render(){
      return(
         <div>
            <Header title="Header Component"/>
            <Footer data="this is footer component"/>
         </div>

      )
   }
}

export default App;
