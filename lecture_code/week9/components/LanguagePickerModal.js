import React from "react";
import {
  Modal,
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import { iOSUIKit } from "react-native-typography";
import { styles } from "./LanguagePickerModal.styles";

export const LanguagePickerModal = ({
  visible,
  onCancel,
  onSelect,
  languages,
}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={iOSUIKit.bodyEmphasized}>Please select a language</Text>
          <Button title="Cancel" onPress={onCancel} />
        </View>
        <ScrollView style={styles.listView}>
          {Object.keys(languages).map((code) => (
            <React.Fragment key={code}>
              <Pressable
                onPress={() =>
                  onSelect(
                    code,
                    `${languages[code].name} (${languages[code].nativeName})`
                  )
                }
              >
                <Text style={iOSUIKit.body}>
                  {languages[code].name} ({languages[code].nativeName})
                </Text>
              </Pressable>
              <View style={styles.divider} />
            </React.Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
