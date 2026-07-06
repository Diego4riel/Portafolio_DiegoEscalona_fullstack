import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // Permite exportar constantes junto a componentes (soluciona el error anterior)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Variables no usadas: ignora las que empiezan con _
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Advierte sobre uso de "any"
      '@typescript-eslint/no-explicit-any': 'warn',

      // Permite console.warn y console.error, avisa sobre console.log
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Fuerza el uso de === en vez de ==
      eqeqeq: ['error', 'always'],
    },
  },
]);
