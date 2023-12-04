import { ReactNative } from "@vendetta/metro/common";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { Forms } from "@vendetta/ui/components";
const { View, ScrollView } = ReactNative;
const { FormSwitchRow } = Forms;


export default () => {
    useProxy(storage);
    return (
        <ScrollView>
            <View>
                <FormSwitchRow
                    label="Use fxtwitter"
                    value={storage.useFx || false}
                    onChangeValue={value => storage.useFx = value}
                />
            </View>
        </ScrollView>
    );
}