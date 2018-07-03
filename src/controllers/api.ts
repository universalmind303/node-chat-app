import express from "express";

const api = express.Router();
api.get("/hello", (req, res) => res.send("hello"));
api.get("/hello1", (req, res) => res.send("hello1"));

export default api;
