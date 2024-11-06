import { connect } from "mongoose";
import { _config } from "./constants.js";

export const dbConnect = async () => {
  try {
    await connect(`${_config.dbUrl}/${_config.dbName}`);
    console.log("Database connected");
    return;
  } catch (error) {
    console.log(`Failed to connect Database: ${error?.message}`);
    process.exit(1);
  }
};
