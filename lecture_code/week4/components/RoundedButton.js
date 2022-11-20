import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./RoundedButton.styles";

export const RoundedButton = ({
  onPress,
  disabled,
  buttonColor,
  text,
  textColor,
}) => (
  <TouchableOpacity
    style={[
      styles.buttonBorder,
      { borderColor: buttonColor, opacity: disabled ? 0.4 : 1 },
    ]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.4}
  >
    <View style={[styles.buttonInnerView, { backgroundColor: buttonColor }]}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </View>
  </TouchableOpacity>
);
