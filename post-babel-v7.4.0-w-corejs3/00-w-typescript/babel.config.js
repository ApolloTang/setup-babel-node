module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": { "node":"current" },
        "useBuiltIns": "usage",
        "corejs": 3,
        // "debug": true,
        "modules": "commonjs"
      }
    ],
    "@babel/preset-typescript",
  ];

  const plugins = [
    "@babel/plugin-proposal-class-properties"
  ]

  return {
    presets,
    plugins
  }
}
