import express from "express";
import IndexRoutes from "./routes/index";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.get("/", (req, res) => {
  res.json({ messase: "Welcome" });
});

app.use("/api", IndexRoutes);

export default app;
