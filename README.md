# Tailwind CSS / MUI, Airbnb Config, Prettier, Husky Setup

## You Can Add This To You Zshrc For To Install All Dev Dependencies For Tailwind and MUI latest versions

```bash
alias npm_install_tailwind_airbnb_config_prettier_husky='npm install -D @headlessui/react @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-react autoprefixer eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh husky postcss prettier prettier-plugin-tailwindcss tailwindcss typescript'
```

```bash
alias npm_install_mui_airbnb_config_prettier_husky='npm install @mui/material @mui/icons-material @emotion/react @emotion/styled && npm install -D @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser @vitejs/plugin-react eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh husky prettier typescript'
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

### tailwind.config.js ( Not Needed For MUI )

```js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### For Tailwind CSS You Need A postcss.config.js ( Not Needed For MUI )

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### .prettierrc.json ( Only Need The Plugins Below For Tailwind Not MUI )

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": false,
  "printWidth": 100
}
```

### .eslintrc.json

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2020": true,
    "jest": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier"
  ],
  "ignorePatterns": [
    "dist",
    ".eslintrc.json",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["react-refresh", "react", "@typescript-eslint", "prettier"],
  "rules": {
    "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off"
  }
}
```

### setting up husky

npx husky-init && npm i
npx husky add .husky/pre-commit "npm run prettier" && npx husky add .husky/pre-commit "npm run linter"

#### The husky pre-commit file ( if you run the command above it will add the lines below to your pre-commit )

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run prettier # format the code with prettier
npm run linter # lint the code with eslint, then commit
```
