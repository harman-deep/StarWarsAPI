import { LinearProgress, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FilmCard from "../../components/FilmCard";

const Films = ({ charFilmsUrl }) => {
    const [filmsURL, setFilmsURL] = useState([]);
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(charFilmsUrl)
            .then((res) => res.json())
            .then((data) => setFilmsURL(data.films))
            .catch(console.error.bind(console));
        setLoading(false);
    }, [charFilmsUrl]);

    useEffect(() => {
        Promise.all(
            filmsURL.map((request) => {
                return fetch(request)
                    .then((res) => res.json())
                    .then((data) => {
                        return data;
                    });
            })
        )
            .then((data) => setFilms(data))
            .catch(console.error.bind(console));
    }, [filmsURL]);

    const getRecentDate = new Date(
        Math.max(...films.map((e) => new Date(e.release_date)))
    );
    const getRecentFilm = films.find(
        (film) =>
            new Date(film.release_date).getFullYear() ===
            getRecentDate.getFullYear()
    );

    return (
        <div>
            {loading && <LinearProgress />}
            {films.map((film) => (
                <FilmCard
                    key={film.episode_id}
                    film={film}
                    getRecentFilm={getRecentFilm}
                />
            ))}
            <Typography>
                {getRecentFilm
                    ? `Last appreance: ${getRecentFilm.title} (${new Date(
                          getRecentFilm.release_date
                      ).getFullYear()})`
                    : ""}
            </Typography>
        </div>
    );
};

export default Films;
