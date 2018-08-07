module.exports = {
  presets: ['next/babel', '@babel/react'],
  plugins: [
    ["styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
