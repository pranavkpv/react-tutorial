import React from "react";
function CreateElement() {
   return React.createElement('div', null,
      React.createElement('h1', { className: 'text-blue-500' }, 'blue color h1'),
      React.createElement('p',null,'this is the small paragraph about the createElement')
   )
}
export default CreateElement