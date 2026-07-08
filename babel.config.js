module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
      "react-native-reanimated/plugin"
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@": ".",
            "@/components": "./components",
            "@/app": "./app",
            "@/assets": "./assets",
            "@/store": "./store",
            "@/config": "./config",
          },
        },
      ],
    ],
  };
};
