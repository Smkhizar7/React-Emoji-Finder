import { useEffect, useState } from "react";
import Emojis from "../../assets/data/emojis.json";
import Emojis2 from "../../assets/data/emojis2.json";
import { SearchBar } from "../../components";
import "./css/index.css";
function HomePage() {
  // const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  function Search(value) {
    if(value !== "" && value !== null){
      let arr = [];
      Emojis2.filter((res) =>
      res.description.includes(value.toLowerCase()) ? arr.push(res) : null)
      console.log("arr => ", arr);
      setData(arr);
    }
    //   fetch(`https://jsonplaceholder.typicode.com/todos`)
    //     .then((response) => response.json())
    //     .then((json) => setData(json));
  }
  return (
    <div className="main_div">
      <SearchBar setSearch={Search} />
      <div className="content_div">
        {data.map((v, i) => {
          return <span className="emoji" key={i}>{v.emoji}</span>;
        })}
      </div>
    </div>
  );
}
export default HomePage;

// res.tags.map((v,i)=>v.includes(value.toLowerCase()) ? arr.push(res) : null)