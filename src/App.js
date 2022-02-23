import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  let fiveArr = contacts.slice(0, 5);
  let remainArr = contacts.slice(5, contacts.length);

  const [celebs, setCelebs] = React.useState(fiveArr);
  const [remainingCelebs, setRemainingCelebs] = React.useState(remainArr);
  const [ascending, setAscending] = React.useState(true);

  const addRandom = () => {
    let randomCeleb =
      remainingCelebs[Math.floor(Math.random() * remainingCelebs.length)];

    if (!remainingCelebs.length) {
      return;
    }
    setCelebs(celebs.concat(randomCeleb));

    let newRemainCelebs = remainingCelebs.filter((celeb) => {
      return celeb.name !== randomCeleb.name;
    });

    setRemainingCelebs(newRemainCelebs);
  };

  const orderAlph = () => {
    let arrayCopy = [...celebs];
    if (ascending) {
      arrayCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      arrayCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
    }

    setCelebs(arrayCopy);
    setAscending(!ascending);
  };

  const orderPop = () => {
    let arrayCopy = [...celebs];
    if (ascending) {
      arrayCopy.sort((a, b) => a.popularity - b.popularity);
    } else {
      arrayCopy.sort((a, b) => b.popularity - a.popularity);
    }

    setCelebs(arrayCopy);
    setAscending(!ascending);
  };

  const removeCeleb = (celebToRemove) => {
    let fileteredArr = celebs.filter((celeb) => {
      return celeb !== celebToRemove;
    });
    setCelebs(fileteredArr);
  };

  return (
    <div className="App">
      <b>Ironcontacts</b>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={orderAlph}>
        Order By Name ({ascending ? "ascending" : "decending"})
      </button>
      <button onClick={orderPop}>
        Sort By Popularity ({ascending ? "ascending" : "decending"})
      </button>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>

        {celebs.map((props, i) => {
          return (
            <tr key={i}>
              <td>
                <img style={{ width: "100px" }} src={props.pictureUrl} />
              </td>
              <td>
                <p>{props.name}</p>
              </td>
              <td>
                <p>{Math.round(props.popularity * 100) / 100}</p>
              </td>
              <td>
                <p>{props.wonOscar ? "🏆" : ""}</p>
              </td>
              <td>
                <p>{props.wonEmmy ? "🏆" : ""}</p>
              </td>
              <td>
                <button onClick={() => removeCeleb(props)}>destroy</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
