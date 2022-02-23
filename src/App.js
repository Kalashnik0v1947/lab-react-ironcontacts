import React from "react"
import contacts from "./contacts.json";
import './App.css';




function App() {
  let fiveArr = contacts.splice(0,5)
  // let remainArr = contacts.splice(5,contacts.length)
  // console.log("this is the first 5 arr",fiveArr)
  // console.log("this is the remainder arr",remainArr)
  const [celebs, setCelebs] = React.useState(fiveArr) 
  // console.log("this is 5 celebs",celebs)
  
 
  return (
    <div className="App">
      <table style={{border: "1px solid black"}}>
      
   
   <tr >
    <th>Picture</th>
    <th>Name</th>
    <th>Popularity</th>
  </tr>
 
<td>
    {celebs.map(function (celeb) {
    return<tr> <img style={{width: "100px"}} src={celeb.pictureUrl}/></tr>
    })}
</td>
<td>
    {celebs.map(function (celeb) {
      return<tr> <p style={{border: "1px solid black"}}>{celeb.name}</p></tr>
    })}
</td>
<td>
    {celebs.map(function (celeb) {
    return<tr> <p style={{border: "1px solid black"}}>{celeb.popularity}</p></tr>
    })}
</td>


  
</table>
    </div>
  );
}

export default App;
