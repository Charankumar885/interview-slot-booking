const express = require("express");

const app = express();

app.use(express.json());
const port = 3000;

app.get("/", (req, res) =>
{
    res.status(200).json({
        success: true,
        message: "Interview slot Booking API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://loccalhost:${PORT}`);
});

