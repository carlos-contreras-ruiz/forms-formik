import { Component, createContext, useContext, useState } from "react";
import { render } from "react-dom";

const initialState = {
  valor:false,
  toogle:()=>{}
}
const ContextDefault = createContext("mi valor")

const DefaultProvider = ({children})=>{

  return (
    <ContextDefault.Provider value="otro valor">
      {children}
    </ContextDefault.Provider>
  )

}



class Componente extends Component {
  //static contextType = ContextDefault
  //el nombre de contextType no puede variar
  
  render(){
    console.log(this.context)
    return(
      <div>
        Hola mundo
      </div>
    )

    //Ejemplo consumir multiples contextos con clases
    // return(
    //   <ContextDefault.Consumer>
    //     {
    //       valor1=>(
    //        <ContextDefault2.Consumer>
    //          {
    //            valor2=><div>{`${valor1} ${valor2}`}</div>
    //          }
    //        </ContextDefault2.Consumer> 
    //       )
    //     }
    //   </ContextDefault.Consumer>
    // )
  }
}


//consumir multiples contextos con componentes funcionales
// const Componente2 = ()=>{
//   const valor1= useContext(ContextDefault)
//   const valor2= useContext(ContextDefault2)
//   return (
//     <div>{`${valor1} ${valor2}`}</div>
//   )
// }

Componente.contextType = ContextDefault

function App() {
  return (
    <DefaultProvider>
      <Componente/>
      <ContextDefault.Consumer>
        {valor=><div>{valor}</div>}
      </ContextDefault.Consumer>
    </DefaultProvider>
  );
}

export default App;
