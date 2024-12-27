import "react";
import './App.css'
import Card from "./components/Card";

function App() {
 

  return (
    <>
    <div className="card-grid">
      <Card img="07_scrimba_challenges/src/assets/kohli.jpg"
            name="Virat Kohli"
            phone= "9919227323"   
            email="kohli@virat.com"     />

     <Card img="07_scrimba_challenges/src/assets/kohli.jpg"
            name="Virat Kohli"
            phone= "9919227323"   
            email="kohli@virat.com"     />
                 
    <Card img="07_scrimba_challenges/src/assets/kohli.jpg"
            name="Virat Kohli"
            phone= "9919227323"   
            email="kohli@virat.com"     />

    <Card img="07_scrimba_challenges/src/assets/kohli.jpg"
            name="Virat Kohli"
            phone= "9919227323"   
            email="kohli@virat.com"     />
     

    </div>


    </>
  )
}

export default App
