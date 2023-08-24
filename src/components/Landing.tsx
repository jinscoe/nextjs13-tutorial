"use client";

import * as React from "react";
import { Button, TextField, Grid } from "@mui/material";
import Image from "next/image";
import doctor from "../../public/handyman-hero.png"

export default function Landing (){
    return (
        <Grid
            className="Landing"
            container
            direction="column"
            justifyContent="center"
            alignItems= "center"
        >
            <Grid item>
                <h1>Track your headaces. Help docs find a cure.</h1>
                <p style ={{ maxWidth:"800px", lineHeight:"1.45"}}>
                    This demo app helps you tarck your headache events and provides a way to find doctors.
                </p>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ py:2 }}
            >
                <TextField
                    sx={{ mr:2 }}
                    size="small"
                    label="me@mail.com"
                    variant="outlined"
                />
                <Button variant="contained">Signup</Button>
            </Grid>
            <Grid item>
                <Image
                    style={{
                        maxWidth: "700px",
                        width: "100%",
                        height: "auto",
                        margin: "auto",
                    }}
                    src={doctor}
                    alt="doctor"
                    className="pointer"
                >

                </Image>
            </Grid>
        </Grid>
    )
}