//import your dependencies

const express = require("express");

const dotenv = require("dotenv");

//create your handlers

const app = express();

dotenv.config();

//assign your middleware

app.get("/api", (req, res, next) => {
    const { slack_name, track } = req.query;

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednessday", "Thursday","Friday", "Saturday" ];
})

return res.status(200).json({
    slack_name: slack_name,

    current_Day: currentDay,

    utc_time: utcTime,

    track: track,

    github_file_url: 

})