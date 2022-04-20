import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DropDown from "../../components/DropDown";
import Films from "./Films";

const CharacterInfo = () => {
    const characters = useSelector((state) => state.characters);
    const dispatch = useDispatch();
    const [currentChar, setCurrentChar] = useState("");
    const [URL, setURL] = useState("https://swapi.dev/api/people/");
    useEffect(() => {
        const getChars = () => {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({ type: "ADD", payload: data.results });
                    setURL(data.next);
                })
                .catch(console.error.bind(console));
        };
        if (URL !== null) {
            getChars();
        }
    }, [URL, dispatch]);
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <DropDown
                    fullWidth
                    label="Character"
                    options={characters.map((elem) => ({
                        label: elem.name,
                        value: elem.url,
                    }))}
                    value={currentChar}
                    onChange={(value) => {
                        setCurrentChar(value);
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Films charFilmsUrl={currentChar} />
            </Grid>
        </Grid>
    );
};

export default CharacterInfo;
