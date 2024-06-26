"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var _helpers = require("./helpers");

const RCTToast = _reactNative.Platform.select({
  ios: _reactNative.NativeModules.LRDRCTSimpleToast,
  android: require('react-native').ToastAndroid
});

var _default = {
  // Toast duration constants
  SHORT: RCTToast.SHORT,
  LONG: RCTToast.LONG,
  // Toast gravity constants
  TOP: RCTToast.TOP,
  BOTTOM: RCTToast.BOTTOM,
  CENTER: RCTToast.CENTER,

  show(message, duration, viewControllerBlacklist) {
    RCTToast.show(message, duration === undefined ? RCTToast.SHORT : (0, _helpers.convertDuration)(duration), viewControllerBlacklist);
  },

  showWithGravity(message, duration, gravity, viewControllerBlacklist) {
    RCTToast.showWithGravity(message, duration === undefined ? RCTToast.SHORT : (0, _helpers.convertDuration)(duration), gravity, viewControllerBlacklist);
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map