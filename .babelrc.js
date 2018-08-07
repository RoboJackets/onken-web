module.exports = {
  presets: ['next/babel', 'react', 'es2015'],
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
