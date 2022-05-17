import { Card, CardContent, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./CustomCard.scss";

function CustomCard({
    firstName,
    lastName,
    categoryWon,
    contentForPopup,
}) {
    return (
        <div className="card-section-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {firstName[0].firstname}, {lastName[0].surname}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {categoryWon}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default CustomCard;
