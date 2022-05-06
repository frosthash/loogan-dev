const express = require("express");
// create db using express
const app = express();
import cors from "cors";
import fs from "fs";
import { readdirSync } from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");

require("dotenv").config();

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));

const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url = process.env.DATABASE_URI;
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
