import { Picker } from "@react-native-picker/picker"; // Need to install with --legacy-peer-deps
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import styles from "./Timer.styles";

const HOURS = [...Array(24).keys()];
const MINUTES = [...Array(60).keys()];
const SECONDS = [...Array(60).keys()];

export default function Timer({ navigation }) {
  const [running, setRunning] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer =
      running &&
      setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours(hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          // TODO: play a sound or flash the background
          setRunning(false);
        }
      }, 1000);
    return () => clearInterval(timer);
  }, [hours, minutes, seconds, running]);

  const formattedText = () => {
    const hrs = `${hours}`.padStart(2, "0");
    const mins = `${minutes}`.padStart(2, "0");
    const secs = `${seconds}`.padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  const Pickers = () => (
    <View style={styles.pickers}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerText}
        selectedValue={hours}
        onValueChange={(itemVal) => setHours(itemVal)}
      >
        {HOURS.map((val) => (
          <Picker.Item key={val} label={`${val}`} value={val} />
        ))}
      </Picker>
      <Text style={styles.pickerText}>hours</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerText}
        selectedValue={minutes}
        onValueChange={(itemVal) => setMinutes(itemVal)}
      >
        {MINUTES.map((val) => (
          <Picker.Item key={val} label={`${val}`} value={val} />
        ))}
      </Picker>
      <Text style={styles.pickerText}>min.</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerText}
        selectedValue={seconds}
        onValueChange={(itemVal) => setSeconds(itemVal)}
      >
        {SECONDS.map((val) => (
          <Picker.Item key={val} label={`${val}`} value={val} />
        ))}
      </Picker>
      <Text style={styles.pickerText}>sec.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.textPickers}>
        {running ? (
          <Text style={styles.text}>{formattedText()}</Text>
        ) : (
          <Pickers />
        )}
      </View>
      <View style={styles.buttons}>
        <RoundedButton
          text="Cancel"
          buttonColor="grey"
          textColor="white"
          disabled={hours == 0 && minutes == 0 && seconds == 0}
          onPress={() => {
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            setRunning(false);
          }}
        />
        {running ? (
          <RoundedButton
            text="Pause"
            buttonColor="darkorange"
            textColor="white"
            onPress={() => setRunning(false)}
          />
        ) : (
          <RoundedButton
            text="Start"
            buttonColor="green"
            textColor="lime"
            onPress={() => setRunning(true)}
          />
        )}
      </View>
    </View>
  );
}
