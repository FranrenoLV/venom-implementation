import { create, Message, Whatsapp } from "venom-bot";
import { extension } from "mime-types";
import { writeFile } from "fs";
import { MessageModel } from "./model/message_model";

create({
  session: "session-name", //name of session
  multidevice: true, // for version not multidevice use false.(default: true)
})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client: Whatsapp) {
  client.onAnyMessage(async (m: Message) => {
    const message = MessageModel.fromJson(m);
    if (message.isGroupMsg) return;
    console.log(message);

    if (message.mediaData.type != "image" || message.text === undefined) return;
    if (message.text.toLowerCase() != "convert to sticker") return;
    console.log("converting to sticker");

    const buffer = await client.decryptFile(m);

    const fileName = `image.png`;
    writeFile(fileName, buffer, async () => {
      const senderId = message.sender.id;

      await client
        .sendImageAsSticker(
          senderId,
          "/home/franreno/lonvi/venom-implementation/image.png"
        )
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    });
  });
}
