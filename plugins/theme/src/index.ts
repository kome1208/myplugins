import { findByProps } from "@vendetta/metro";
import { instead } from "@vendetta/patcher";

const { canUseClientThemes } = findByProps("canUseClientThemes");

const patches = [];

export default {
    onLoad: () => {
        patches.push(
            instead("canUseClientThemes", canUseClientThemes.default, () => true)
        );
    },
    onUnload: () => {
        patches.forEach(p => p.unpatch());
    }
}