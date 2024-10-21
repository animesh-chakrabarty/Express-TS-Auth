var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// Ensure MONGO_URI is defined, or throw an error
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
}
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectionInstance = yield mongoose.connect(MONGO_URI);
        console.log(connectionInstance.connections[0].host);
    }
    catch (err) {
        throw new Error(err.toString());
    }
});
export default connectDB;
