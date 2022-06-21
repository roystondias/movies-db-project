import React, { useState, useEffect } from 'react'
//importing the axios library
import axios from 'axios'

function Content(props) {
    const [data, setdata] = useState([]);
    //adding const of the urlink to avoid code duplication
    const API_KEY = "?api_key=8a5c64f212f1e2d52bc655c31e4c9c22";
    const BASE_URL = "https://api.themoviedb.org/3";
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
    const GENRE_LIST = props.genreData;
    let URL = BASE_URL + "/movie/popular" + API_KEY + "&language=en-US&page=1&with_genres=" + GENRE_LIST;

    // useEffect hook runs onces in which the GET request is made for the popular movies URL
    useEffect(() => {
        axios.request(URL).then(response => {
            console.log(response.data.results);
            console.log(URL);
            setdata(response.data.results);
        });
    }, [URL])

    console.log(props.genreData);
    return (
        <>
        <br />
        <div className='container'>
            <div className="row">
                {data.map(output_data => {
                    return <div className="col-3">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={`${IMAGE_BASE_URL}${output_data.poster_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{output_data.original_title}</h5>
                                <p className="card-text">{output_data.overview}</p>
                                <a href="/" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default Content