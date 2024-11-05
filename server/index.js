import { _config } from "./src/config/constants";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
const PORT = _config.port || 8000;

const corsOptions = {
  origin: _config.originUrl,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 204,
};

// middlewares
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));

// listening app
app.listen(PORT, () =>
  console.log(`Server started at: http://localhost:${PORT}`)
);
