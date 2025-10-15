import React from "react"

function CloneElement({ children }) {
   return React.Children.map(children,(child)=>{
       return React.cloneElement(child,{className:'bg-dark',onClick:()=>alert("Hiaii hope")})
   })
}
export default CloneElement

