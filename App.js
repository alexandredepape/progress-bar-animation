import { Animated, StyleSheet } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useEffect, useRef } from "react";


export default function App() {
    const progressBarValue = useRef(new Animated.Value(0));

    useEffect(() => {
      Animated.timing(progressBarValue.current, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={styles.progressBarContainer}>
            <ProgressBar style={styles.progressBar}
                         progress={progressBarValue.current}
                         color={"#9dd4ae"}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    progressBarContainer: {
        flex: 1,
        backgroundColor: "#313845",
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressBar: {
        width: 300,
        // backgroundColor: "white",
        borderRadius: 7.5,
        height: 15,
        margin: 10,

    }
});
