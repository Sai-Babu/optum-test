import { Checkbox, FormControlLabel, Grid, Slider } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SliderQuestion.scss";

function SliderQuestion({

}) {
    return (
        <div className="slider-container">
            <Grid container>
                <Grid item xs={12} md={12}>
                    <span>Q1. Please slide to answer</span>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Grid>
            </Grid>
        </div>
    );
}

export default SliderQuestion;
