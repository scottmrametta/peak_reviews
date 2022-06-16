import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios';


function HomePage(props) {
    const CLIENT_ID = "040c68e70e554c82b8019c801e42ba7c"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const [artists, setArtists] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }
    
    
    const renderArtist = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                <div mar>
                {artist.name}
                </div>
                <div>
                {artist.images.length ? <img width={"15%"} src={artist.images[0].url} alt="artistimage"/> : <div>No Image</div>}
                </div>
            </div>
        ))
    
    }
    
    
    return (
        <div>
            <img src="https://www.hospitalitycentre.co.uk/wp-content/uploads/2017/04/A-Ha-VIP-Tickets-Header.jpg" 
            alt="rockshow" width="1080px" height="200px"/>
            <h2>What Peaks Your Interest?</h2>
            <p>Search for an artist below to review one of their albums!</p>
            
            {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            : <button onClick={logout}>Logout</button>}

            {token ?
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>

                : <h2>Please Login</h2>
            }

            {renderArtist()}
        </div>
 
 );

}

export default HomePage