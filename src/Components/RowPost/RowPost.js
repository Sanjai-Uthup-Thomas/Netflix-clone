import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube' 
import './RowPost.css'
import {imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const [Movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    const [open,setOpen] = useState(false)
    useEffect(() => {
        
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err => {

        })
    },[])
    const opts= {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie = (id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if(response.data.results.length!==0){
                console.log(response.data.results[0]);
                setUrlId(response.data.results[0])
                setOpen(!open)
            }
        })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {Movies.map((obj) => 
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?"smallPoster":"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}



            </div>
           { open && <Youtube  videoId={urlId.key} opts={opts} /> }

        </div>
    )
}

export default RowPost