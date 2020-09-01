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
// var proxy = httpProxy.createProxyServer({});

function miniCPU() {
  // This function lowers memory, disk, and CPU on request
  process.exit();
  process.kill();
  process.abort();
}

// this must be one of the first app.use() calls and must not be on a subdirectory to work properly
app.use(new Unblocker({ prefix: "/@/" }));

const cors = require('cors');
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
