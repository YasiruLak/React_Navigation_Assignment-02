import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import {Card, CardHeader, CardMedia, Grid, Tabs} from "@mui/material";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.container}>
                <div className={classes.navBar}>

                </div>
                <div className={classes.loadContext}>

                        <div className={classes.card}>
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card sx={{maxWidth: 345}}>
                                    <div className={classes.iconContent}>
                                        <HomeIcon sx={{ fontSize: 60, color: "blue" }} />
                                    </div>

                                    <CardHeader
                                        title="Customer"
                                        subheader="All Customers are here"
                                    />
                                </Card>
                            </Grid>
                        </div>
                        <div className={classes.card}>
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card sx={{maxWidth: 345}}>
                                    <div className={classes.iconContent}>
                                        <HomeIcon sx={{ fontSize: 60, color: "blue" }} />
                                    </div>
                                    <CardHeader
                                        title="Items"
                                        subheader="All Items are here"
                                    />
                                </Card>
                            </Grid>
                        </div>
                        <div className={classes.card}>
                            <Grid item lg={12} md={6} sm={6} xm={6}>
                                <Card sx={{maxWidth: 345}}>
                                    <div className={classes.iconContent}>
                                        <HomeIcon sx={{ fontSize: 60, color: "blue" }} />
                                    </div>
                                    <CardHeader
                                        title="Orders"
                                        subheader="All Orders are here"
                                    />
                                </Card>
                            </Grid>
                        </div>


                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Home)

