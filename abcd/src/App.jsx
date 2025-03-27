import React ,{useState} from 'react'
import './App.css'
// import Extra from './Extra';
// import {Body, Footer, Header,x,y} from './Extra'
import Greetings from './Greetings';
import Border from './Border';
import Welcome from './Welcome';
import Counter from './Counter';



// const App = () => {
//   //  const [show , setShow] = useState(true) 
//   //  function changeShow(){
//   //   setShow(!show)
//   //  }
//   return (
//     <div>
//       {/* <button onClick={changeShow}>Change</button>
//       {show && <Welcome initial ={5} step = {5} limit = {25}/>} */}
//       <Counter/>
//     </div>
//   )
// }

const App = () => {
  const arr = ["Tarman", "devesh", "JP sir"];
  
  return (
    <div>
      {arr.map((name, index) => (
        <div key={index}>
          <h1>Hey</h1>
          <Greetings name={name} />
        </div>
      ))}
    </div>
  );
}

// const App = () => {
//   const names  =["jhdbc" ,"idhbc" ,"fijvne"]
//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//       {names.map((name,index) => 
//         <Border key = {index}>
//           <Greetings key= { index} name = {name}/>
//         </Border>
//       )}

//       <Welcome></Welcome>
      
//     </div>
//   )
// }

  // const App = () => {
  //   const arr = ["Tarman" , "devesh" , "JP sir"];
  //   return (
  //     <div>
  //       {/* {arr.map ((name,index) => <Greetings key = {index} name = {name}/>)} */}

  //       {/* <Greetings key ={index} name = {(x) = x.map((x1) => {x1}) }/> */}

  //       {/* <Greetings name = "Tarman"/>
  //       <Greetings name = "Devesh" age ={18}/>
  //       <Greetings name = "JP Sir"/> */}
  //     </div>
  //   )

    // return (
    //   <>
    //     {/* <Working/> */}
    //     {/* <Extra/> */}
    //     <Header/>
    //     <Body/>
    //     <Footer/>
    //     <p>{x}</p>
    //     <p>{y(5)}</p>
    //   </>
    // )
  // }
//  const Working = () => {
//   const[count , setCount] = useState(0);
//   function increment(){
//     count <10 && setCount((c) => c+1)
//   }
//   function decrement(){
//     count >-10 && setCount((c) => c-1)
//   }
//   return (
//     <div >
//       <h1>Practice</h1>
//       <button onClick={increment} >Increment</button>
//       <button onClick={decrement} >Decrement</button>
//       <h1>{count}</h1>
//     </div>
//   )
//  }


export default App;