import React from 'react'
import { Link } from "react-router-dom";
import { ListItem, Button, Grid, Dialog, CardHeader, Typography, Card, CardContent, CardActions, Checkbox, } from '@material-ui/core';
import useStyles from './styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Grid container style={{ marginTop: "200px", width: "100%", }}>

            <Grid item xs={12} className={classes.footerGrid} style={{ display: "flex" }}>
                <Grid>
                    <a href="/" aria-current="page" aria-label="home" >
                        <img src="https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/60d63a5e002c46ace40429f6_logo.svg" loading="lazy" width="120" alt="Zepto Logo" />
                    </a>
                </Grid>
                <Grid item xs={4} className={classes.footerLink}>
                    < Link style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}
                        className="menu-item" to="/" >
                        Home
                    </ Link>
                    <Link style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}
                        className="menu-item"
                        to="/career"
                    >
                        Career
                    </Link>
                    <Link style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}
                        className="menu-item"
                        to="/customer"
                    >
                        Customer Support
                    </Link>
                    <Link style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}
                        className="menu-item"
                        to="/delivery"
                    >
                        Delivery Areas
                    </Link>
                    <Link style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}
                        className="menu-item"
                        to="/press"
                    >
                        Press
                    </Link>
                </Grid>
                <Grid item xs={4} className={classes.socailMediaLinks}>
                    <a href="https://www.instagram.com/zeptonow/" target="_blank" class="footer_link_instagram" style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}>Instagram</a>
                    <a href="https://www.facebook.com/Zeptonow/" target="_blank" class="footer_link_facebook" style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}>Facebook</a>
                    <a href="https://twitter.com/zeptonow" target="_blank" class="footer_link_twitter" style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}>Twitter</a>
                    <a href="https://www.linkedin.com/company/zeptonow/about/" target="_blank" class="footer_link_linkedin" style={{ textDecoration: "none", padding: "10px", fontSize: "20px", fontWeight: "600", color: "#fff" }}>LinkedIn</a>
                </Grid>
            </Grid>
        </Grid>



    )
}
export default Footer

