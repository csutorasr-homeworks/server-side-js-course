var express = require('express');

var loginMW = express.Router();

loginMW.get("/belepes.html",renderMW('belepes.html'));
loginMW.post("/belepes.html",renderMW('belepes.html'));