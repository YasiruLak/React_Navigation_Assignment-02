import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Card, CardHeader, Grid, TextField} from "@mui/material";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.container} >
                <div className={classes.navBar}>

                </div>
                <div className={classes.loadContext}>
                    <div className={classes.card}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                        </Card>
                    </div>
                    <div className={classes.card}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                        </Card>
                    </div>
                    <div className={classes.card}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />
                        </Card>
                    </div>
                </div>
            </div>
        )


    }
}

export default withStyles(styleSheet)(Home)
