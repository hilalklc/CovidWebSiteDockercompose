import axios from "axios";
import { useState,useEffect } from "react"
import {API_URL,API_TOKEN} from "../consts/index"

const RecordedCorona = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()

    const FetchData=async ()=>{
        setLoading(true)
        const response=await axios.get(`${API_URL}totalData`,{
            headers:{
                authorization:API_TOKEN
            }
        })
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
      FetchData();  
    }, [])
    return (
        <div className="flex flex-col items-center justify-center h-full">
            {loading ? <p>Loading...</p> : <div>
                <h1 className="text-4xl text-gray-900 mb-4">
                    Total Case : {data?.totalCases}
                </h1>
                <h1 className="text-4xl text-gray-900 mb-6">
                    Total Deaths : {data?.totalDeaths}
                </h1>                
                <h1 className="text-4xl text-gray-900 ">
                    Total Recorved : {data?.totalRecovered}
                </h1>
            </div>}
        </div>
    )

}

export default RecordedCorona