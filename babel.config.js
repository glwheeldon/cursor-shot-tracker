module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        {
          include: [
            "EXPO_PUBLIC_SUPABASE_URL",
            "EXPO_PUBLIC_SUPABASE_ANON_KEY",
          ],
        },
      ],
      "react-native-reanimated/plugin", // This should be listed last
    ],
  };
};
