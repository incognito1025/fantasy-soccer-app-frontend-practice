import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Player from './Player'
import "./Player.css"

const API = import.meta.env.VITE_API_URL

export default function Players() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch(`${API}/players`)
            .then((res) => {
            return res.json()
            })
            .then(resJSON => {
                console.log(resJSON)
                setPlayers(resJSON)
            })
            .catch((error) => console.error(error))
    }, [])

return (
    <div className="Players">
        <h1>Players</h1>
        {players.map(player => {
            return <Player key={player.id} player={player} />
        })}
    </div>
)
}