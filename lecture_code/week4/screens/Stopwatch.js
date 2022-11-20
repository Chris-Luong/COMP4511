import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { styles } from "./Stopwatch.styles";

export default function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [elapsedSecs, setElapsedSecs] = useState(0);

  // https://reactjs.org/docs/hooks-effect.html#example-using-hooks
  useEffect(() => {
    // console.log("Inside effect");
    let intervalRef = null;
    if (running) {
      intervalRef = setInterval(() => {
        setElapsedSecs((prevElapsedSecs) => prevElapsedSecs + 1);
      }, 1000);
    }
    return () => {
      // console.log("Cleanup phase :: ", intervalRef);
      clearInterval(intervalRef);
    };
  }, [running]);

  const formattedText = () => {
    const mins = `${Math.floor(elapsedSecs / 60)}`.padStart(2, "0");
    const secs = `${elapsedSecs % 60}`.padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formattedText()}</Text>
      <StatusBar style="auto" />
      <View style={styles.buttons}>
        <RoundedButton
          onPress={() => setElapsedSecs(0)}
          buttonColor="grey"
          text="Reset"
          textColor="white"
          disabled={running || elapsedSecs == 0}
        />
        {running ? (
          <RoundedButton
            onPress={() => setRunning(false)}
            buttonColor="maroon"
            text="Stop"
            textColor="red"
          />
        ) : (
          <RoundedButton
            onPress={() => setRunning(true)}
            buttonColor="green"
            text="Start"
            textColor="lime"
          />
        )}
      </View>
    </View>
  );
}
