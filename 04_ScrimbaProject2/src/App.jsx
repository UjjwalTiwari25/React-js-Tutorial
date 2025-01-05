import 'react';
import './App.css';


function App() {
  const Hours = new Date().getHours();
  let timenow
  if(Hours<12){
    timenow = "morning"
  }else if(Hours>12 && Hours<17){
    timenow = "afternoon"
  }
    else if(Hours>17 && Hours<21){
      timenow = "evening"
  }
  else{
    timenow = "night"
  }
  let am_pm
  if(Hours<12){
    am_pm = "AM"
  }else{
    am_pm = "PM"
  }
    
  
  return (
    <>
    <h1>Current time is about {Hours} {am_pm}</h1>
    <h2>Hello , Good {timenow}</h2>

    </>
  )

}
export default App
