/*
 * ProxyChief
 * © 2020 youngchief btw ツ, All rights reserved.
 */
const https = require("https");
const http = require("http");
const fs = require("fs");
const Unblocker = require("unblocker");
const unblocker = Unblocker({});
const express = require("express");
const app = express();
const httpProxy = require("http-proxy");
const cors = require('cors');
// var proxy = httpProxy.createProxyServer({});

function miniCPU() {
  // This function lowers memory, disk, and CPU on request
  process.exit();
  process.kill();
  process.abort();
}

// this must be one of the first app.use() calls and must not be on a subdirectory to work properly
app.use(new Unblocker({ prefix: "/@/" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://aymatenergia.com.ar/"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

app.get("/@/", function(req, res) {
  miniCPU();
});

app.get("/", function(req, res) {
  res.send(
    '<style>*{font-family: sans-serif;background-color:black;color:lawngreen;}</style><center><h1>AYMAT HACKING PROXY</h1></center>'
  );
});

app.listen(process.env.PORT);
