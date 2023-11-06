const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/sixers", (req, res) => {
    const sixers = [];
    sixers[0] = {
        player: "Billy Cunningham",
        position: "Position: Small Forward / Power Forward",
        NBASeasons: "Played: 1966-1976",
        height: "6 foot 7 inches",
        careerSummary: [
            "770 G",
            "21.2 PTS",
            "10.4 TRB",
            "4.3 AST"
        ],
        img: "images/bcunningham.png"
    };
    sixers[1] = {
        player: "Charles Barkley",
        position: "Position: Small Forward / Power Forward",
        NBASeasons: "Played: 1985-2000",
        height: "6 foot 6 inches",
        careerSummary: [
            "1073 G",
            "22.1 PTS",
            "11.7 TRB",
            "3.9 AST"
        ],
        img: "images/cbarkley.png"
    };
    sixers[2] = {
        player: "Allen Iverson",
        position: "Position: Shooting Guard / Point Guard",
        NBASeasons: "Played: 1997-2010",
        height: "6 foot 0 inches",
        careerSummary: [
            "914 G",
            "26.7 PTS",
            "3.7 TRB",
            "6.2 AST"
        ],
        img: "images/aiverson.png"
    };
    sixers[3] = {
        player: "Wilt Chamberlain",
        position: "Position: Center",
        NBASeasons: "Played: 1960-1973",
        height: "7 foot 1 inch",
        careerSummary: [
            "1045 G",
            "30.1 PTS",
            "22.9 TRB",
            "4.4 AST"
        ],
        img: "images/wchamberlain.png"
    };
    sixers[4] = {
        player: "Julius Erving",
        position: "Position: Small Forward",
        NBASeasons: "Played: 1972-1987",
        height: "6 foot 7 inches",
        careerSummary: [
            "1243 G",
            "24.2 PTS",
            "8.5 TRB",
            "4.2 AST"
        ],
        img: "images/jerving.png"
    };
    res.json(sixers);
});

app.listen(3005, () => {
    console.log("listening");
});