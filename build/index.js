"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); //aplicacion con express
app.use(express_1.default.json()); //middleware que trasnforma la req.body a un json
//el puerto en el que se va a quedar
const PORT = 3000;
//creamos un endpoint
app.get('/ping', (_req, res) => {
    console.log('someone pinged here' + new Date().toLocaleDateString());
    res.send('pong');
});
//para escuchar
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
