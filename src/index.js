require("dotenv").config();

const express = require("express");

const DomaineRoutes = require("./routes/domaines");
const MediaRoutes = require("./routes/medias");
const SignalementRoutes = require("./routes/signalement");
const TermeRoutes = require("./routes/termes");
const commentaireRoutes = require("./routes/commentaires");
const userRoutes = require("./routes/users");

// import swagger ui module and swagger json file

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger/swagger.json");

const app = express();

app.use(express.json());

// add route for swagger document API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/commentaires", commentaireRoutes);
app.use("/domaines", DomaineRoutes);
app.use("/medias", MediaRoutes);
app.use("/signalements", SignalementRoutes);
app.use("/terme", TermeRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
