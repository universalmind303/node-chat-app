import express from "express";

const api = express.Router();
api.get("/hello", (req, res) => res.send("hellsassssddddo"));
api.get("/hello1", (req, res) => res.send("hello"));

export default api;
