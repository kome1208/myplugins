import { logger } from "@vendetta";
import { findByProps } from "@vendetta/metro";
import { before } from "@vendetta/patcher";
import { storage } from "@vendetta/plugin";
import Settings from "./Settings";

const patches = [];
const Messages = findByProps("sendMessage", "receiveMessage");

export default {
    onLoad: () => {
        patches.push(
            before("sendMessage", Messages, (args) => {
                const content = args[1].content;
                const postLink = content.match(/http(s)?:\/\/(www\.)?(twitter\.com|x\.com)\/\w{4,15}\/status\/\d+/gim);
                if (!postLink) return;
                args[1].content = content.replaceAll(/http(s)?:\/\/(www\.)?(twitter\.com|x\.com)/gim, `https://${storage.useFx ? "fixupx" : "fixvx"}.com`)
            })
        )
    },
    onUnload: () => {
        patches.forEach(p => p.unpatch());
    },
    settings: Settings,
}