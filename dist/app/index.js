"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.cwd() + '/.env',
});
exports.default = {
    database_password: process.env.DATABASE_PASSWORD,
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};
