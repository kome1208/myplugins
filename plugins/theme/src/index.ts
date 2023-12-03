import { logger } from "@vendetta";
import { find } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const canUseClientThemes = find(m => m.default.canUseClientThemes);

const patches = [];

export default {
    onLoad: () => {
        logger.log(canUseClientThemes)
        patches.push(
            instead("canUseClientThemes", canUseClientThemes, () => true)
        );
    },
    onUnload: () => {
        patches.forEach(p => p.unpatch());
    }
}