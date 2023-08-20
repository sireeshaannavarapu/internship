

import './App.css'

function App() {
  const x = 100
  const y = "sireesha"
  const ar = [10,20,30,40]
  const a = "sireesha"
  const b = "annavarapu"
  const br = ["siri","divya","reshma","harshi"]
  const c = 14
  const d = 134.42
  const e = "praveen"
  const f = "praveen"
  const g="sireesha"
  const h = 10
  const i = 20
  const j = 10
  const k = 23
  const l = 
  

  return (
    <>
    <h1>hello world</h1>
    <h1>{y.toUpperCase()}</h1>
    <ul>
      {
        ar.map((a)=>{
          return <li>{a}</li>

        })
      }
    </ul>
    <h3>{a.concat(b)}</h3>
    <h3>{a+b}</h3>

    <h3>{Math.sqrt(c)}</h3>
    <h4>{parseInt(d)}</h4>
    <h4>{e.toUpperCase()}</h4>
    <h4>{f.length}</h4>
    <h3>{g.split("").reverse().join()}</h3>

    <h2>{h>i?h:i}</h2>
    <h3>{j%2==0?"even":"odd"}</h3> 
    <h3>{k>0?"positive":"negative"}</h3>







    

    
  
     



      
     
   

    </>
  )
  }
export default App

