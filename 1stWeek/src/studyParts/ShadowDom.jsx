import { useEffect, useRef } from "react"

function ShadowDom() {
   const shadowRef = useRef(null)
   useEffect(() => {
      if (!shadowRef.current.shadowRoot) {
         let shadowDom = shadowRef.current.attachShadow({ mode: 'open' })
         shadowDom.innerHTML = `
      <style>
      p{
      color:red;
      background-color:blue
      }
      </style>
      <p>Hellooooooo</p>
      `
      }
   },[])
   return (
      <>
         <h1>Shadow Dom</h1>
         <p ref={shadowRef}></p>
         <p>haiii pranav</p>
      </>
   )
}
export default ShadowDom