import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Tell Express to use EJS for rendering
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index", { content: null }); // render the view
});

app.get("/random", async (req,res) => {
  try {
    const word = await axios.get("https://random-word-api.herokuapp.com/word");
    const randomword = word.data[0];
    const result = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${randomword}`
    );
    res.render("index", { content: result.data }); // render with data
  } catch (error) {
    console.error(error.message);
    res.render("index", {error: "Unable to generate a word"})
  }
  
})

app.post("/specific", async (req, res) => {
  try {
    const result = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${req.body.user_word}`
    );
    res.render("index", { content: result.data }); // render with data
    
    
  } catch (error) {
    res.render("index", { error: "Word not found" });
    console.error(error.message);
     
  }
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
