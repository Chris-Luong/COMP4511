import React, { useEffect, useState } from "react";
import {
  Pressable,
  View,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { iOSColors, iOSUIKit } from "react-native-typography";
import { LanguagePickerModal } from "../components/LanguagePickerModal";
import TranslationAPIService from "../services/TranslationAPIService";
import { styles } from "./Translator.styles";

// let fetchTimeoutRef;

export default function Translator() {
  const [loading, setLoading] = useState(false);
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fetchTimeoutRef, setFetchTimeoutRef] = useState(null);
  const [languages, setLanguages] = useState({});
  const [fromPickerVisible, setFromPickerVisible] = useState(false);
  const [toPickerVisible, setToPickerVisible] = useState(false);
  const [fromLang, setFromLang] = useState({
    code: undefined,
    name: "Auto Detect",
  });
  const [toLang, setToLang] = useState({
    code: "en",
    name: "English",
  });

  useEffect(() => {
    // IIFE
    (async () => {
      const langs = await TranslationAPIService.fetchLanguages();
      setLanguages(langs);
    })();
  }, []);

  const translate = async () => {
    setLoading(true);
    const translation = await TranslationAPIService.translate(
      fromText,
      fromLang.code,
      toLang.code
    );
    setToText(translation);
    setLoading(false);
  };

  useEffect(() => {
    translate();
  }, [toLang]);

  const handleFromTextChange = (text) => {
    setFromText(text);
    if (text) {
      // debounce user input
      clearTimeout(fetchTimeoutRef);
      const ref = setTimeout(() => {
        translate();
      }, 500);
      setFetchTimeoutRef(ref);
    }
  };

  return (
    <View style={styles.container}>
      <LanguagePickerModal
        visible={fromPickerVisible}
        languages={languages}
        onCancel={() => {
          setFromLang({ code: undefined, name: "Auto Detect" });
          setFromPickerVisible(false);
        }}
        onSelect={(code, name) => {
          setFromLang({ code, name });
          setFromText("");
          setToText("");
          setFromPickerVisible(false);
        }}
      />
      <LanguagePickerModal
        visible={toPickerVisible}
        languages={languages}
        onCancel={() => setToPickerVisible(false)}
        onSelect={(code, name) => {
          setToLang({ code, name });
          setToPickerVisible(false);
        }}
      />
      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={() => setFromPickerVisible(true)}
        >
          <Text style={iOSUIKit.body}>{fromLang.name}</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setToPickerVisible(true)}
        >
          <Text style={iOSUIKit.body}>{toLang.name}</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <View style={styles.text}>
          <Text style={iOSUIKit.subheadEmphasized}>{fromLang.name}</Text>
          <TextInput
            value={fromText}
            placeholder="Enter text"
            multiline={true}
            autoCorrect={false}
            autoCapitalize="none"
            style={iOSUIKit.largeTitleEmphasized}
            onChangeText={handleFromTextChange}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.text}>
          <Text
            style={[iOSUIKit.subheadEmphasized, { color: iOSColors.tealBlue }]}
          >
            {toLang.name}
          </Text>
          {loading && <ActivityIndicator />}
          <TextInput
            value={toText}
            editable={false}
            multiline={true}
            style={[
              iOSUIKit.largeTitleEmphasized,
              { color: iOSColors.tealBlue },
            ]}
          />
        </View>
      </View>
    </View>
  );
}
