import React ,{useState} from 'react'

//  const Extra = () => {
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
// export default Extra;


export const Header = () => <><h1>This is header</h1></>
export const Body = () => <><h1>This is body</h1></>
export const Footer = () => <><h1>This is footer</h1></>
export const x = "Hi there!"
export function y(a){
    return a;
}