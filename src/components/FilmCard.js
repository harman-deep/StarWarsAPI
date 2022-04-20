import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});

const FilmCard = ({ film }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {film.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {film.release_date}
                </Typography>
                <Typography variant="body2" component="p">
                    {film.opening_crawl}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FilmCard
