import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "page": {
        "backgroundColor": "#f8f8f8",
        "position": "absolute",
        "top": 0,
        "paddingTop": 50,
        "left": 0,
        "right": 0,
        "bottom": 60,
        "overflow": "auto",
        "textAlign": "left"
    }
});