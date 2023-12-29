import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }
// const reactElement = React.createElement(
//   'a',
//   {href:"https://google.com",target:"_blank"},
//   'Click me to Visit google'
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* reactElement */}
    <App />
  </React.StrictMode>
)
