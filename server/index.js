import { _config } from "./src/db/constants.js";
import { dbConnect } from "./src/db/db.js";
import authRouter from "./src/routes/auth.router.js";
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
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));

// routers
app.use("/api", authRouter);

// database connection & listening App
dbConnect()
  .then(() => app.listen(PORT, () => console.log(`http://localhost:${PORT}`)))
  .catch((error) => console.log(error?.message));
