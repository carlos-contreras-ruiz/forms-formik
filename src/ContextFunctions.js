import { createContext, useContext, useState } from "react";

const initialState = {
  valor:false,
  toogle:()=>{}
}
const ContextDefault = createContext(initialState)

const DefaultProvider = ({children})=>{

  const [valor,setValor]=useState(false)

  const value = {
    valor,
    toogle:()=>setValor(!valor)
  }

  return (
    <ContextDefault.Provider value={value}>
      {children}
    </ContextDefault.Provider>
  )

}

// const Contenido = ()=>{
//   const ctx = useContext(ContextDeafult)
//   return (
//     <div>{ctx}</div>
//   )
// }
// const Contenido2 = ()=>{
//   const ctx = useContext(Context2)
//   return (
//     <div>{ctx}</div>
//   )
// }

const Componente = ()=>{
  const {valor,toogle}= useContext(ContextDefault)
  return(
    <div>
      <label>
        {valor.toString()}
        <button onClick={toogle}>Toogle</button>
      </label>
    </div>
  )
}

function App() {
  return (
    <DefaultProvider>
      <Componente/>
    </DefaultProvider>
  );
}

export default App;
