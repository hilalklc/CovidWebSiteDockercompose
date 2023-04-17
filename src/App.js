import Header from "./component/Header";
import {useState} from "react";
import CoronaForCountry from "./component/CoronoForCountry";
import RecordedCorona from "./component/RecordedCorona";
import CoronoForContinent from "./component/CoronoForContinent";
function App() {
    const [key,setKey]=useState(1)
  return (
        <>
        <Header onMenuChange={(_key)=>{
            setKey(_key)
        }} />


            <div className="md:container md:mx-auto p-8  page-content">
                {key===1 && <CoronaForCountry />}
                {key===2 && <RecordedCorona />}
                {key===3 && <CoronoForContinent />}



            </div>
        </>
  );
}

export default App;
