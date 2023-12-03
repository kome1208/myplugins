import { findByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const canUseClientThemes = findByProps("canUseClientThemes");

const patches = [];

export default {
    onLoad: () => {
        patches.push(
            instead("canUseClientThemes", canUseClientThemes, () => true)
        );
    },
    onUnload: () => {
        patches.forEach(p => p.unpatch());
    }
}