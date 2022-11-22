import { PromiseWithChild } from "child_process";
import { connect } from "mongoose";

var secret = require("../../secret.json");

export async function connectDatabase(): Promise<void> {
    await connect(secret.Mongo_URL as string);
    console.log("Database Connected!")
}