const express = require("express");
const cors = require("cors");

const PubliRoutes = require("./routes/PubliRoutes");
const UsersRoutes = require("./routes/UsersRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Public folder for images
app.use(express.static('public'))

app.get("/", (request, response) => {
  response.send("<h1>Seja bem vindo!</h1>");
});

app.use("/api/public", PubliRoutes);
app.use("/api/users", UsersRoutes);
app.use("/api/comms", CommentsRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
