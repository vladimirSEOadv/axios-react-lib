import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [counter, setCounter] = useState(0)
  const arr = data.map((data, index) =>{
    return(
        <tr>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.body}</td>
        </tr>
    )
  })

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          console.log('Data:::: ', counter, res.data)
          setData(res.data)
        }).catch(error => console.log(error))
  },[counter])

  return (
    <div className="App">
      <button onClick={() => {
        setCounter((index) => index+1)
        // setData(Date.now)
      }}>Get Data</button>
          <table>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
              </tr>
            {arr}
            </table>
    </div>
  )
}

export default App
