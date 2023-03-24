"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const venom_bot_1 = require("venom-bot");
const fs_1 = require("fs");
const message_model_1 = require("./model/message_model");
(0, venom_bot_1.create)({
    session: "session-name",
    multidevice: true, // for version not multidevice use false.(default: true)
})
    .then((client) => start(client))
    .catch((erro) => {
    console.log(erro);
});
function start(client) {
    client.onAnyMessage((m) => __awaiter(this, void 0, void 0, function* () {
        const message = message_model_1.MessageModel.fromJson(m);
        if (message.isGroupMsg)
            return;
        console.log(message);
        if (message.mediaData.type != "image" || message.text === undefined)
            return;
        if (message.text.toLowerCase() != "convert to sticker")
            return;
        console.log("converting to sticker");
        const buffer = yield client.decryptFile(m);
        const fileName = `image.png`;
        (0, fs_1.writeFile)(fileName, buffer, () => __awaiter(this, void 0, void 0, function* () {
            const senderId = message.sender.id;
            yield client
                .sendImageAsSticker(senderId, "/home/franreno/lonvi/venom-implementation/image.png")
                .then((result) => console.log(result))
                .catch((error) => console.log(error));
        }));
    }));
}
