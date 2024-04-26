import express from "express";
const app = express();
import imageRouter from "./routes/getimg.route.js"

app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/v1/image",imageRouter );
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});
export { app };