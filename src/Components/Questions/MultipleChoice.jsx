import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./MultipleChoice.scss";

function MultipleChoice({
    question,
    options
}) {
    return (
        <div className="multiple-choice-container">
            <Grid container>
                <Grid item xs={12} md={12}>
                    <span>Q1. Please answer the follwoing query</span>
                </Grid>
                
                <Grid item xs={12} md={12}>
                    <span>
                        <FormControlLabel control={<Checkbox />} label={"label1"} />
                    </span>
                    <Grid item xs={12} md={12}>
                        <span>
                            <FormControlLabel control={<Checkbox defaultChecked />} label={"lable2"} />
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default MultipleChoice;
