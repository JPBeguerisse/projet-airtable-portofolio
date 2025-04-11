require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Projects`;

// Exemple route GET : lister les projets
app.get("/projects", async (req, res) => {
  try {
    const response = await axios.get(AIRTABLE_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
      },
    });
    res.json(response.data.records);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Backend en ligne sur http://localhost:${PORT}`);
});
