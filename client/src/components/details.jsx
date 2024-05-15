import {useEffect,useState} from "react";
import api from "../api";

export default function Details() {
    const [Player, setPlayer] = useState([]);
    useEffect(() => {
        getPlayerList();
    }, []); 
    const getPlayerList = () => {
        api
            .get("/api/list/")
            .then((res) => res.data)
            .then((data) => {
                setPlayer(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };
  return (
    <div>details</div>
  )
}
