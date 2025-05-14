import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";

export default {
  input: "src/index.tsx", // Path to your entry file
  output: {
    file: "dist/index.js", // Output file
    format: "iife", // Output format (can be 'cjs', 'es', 'iife', etc.)
  },
  plugins: [
    resolve(), // Helps Rollup find external modules
    commonjs(), // Converts CommonJS modules to ES6
    typescript(), // Compiles TypeScript files
    terser(), // Minifies the output
    del({ targets: "dist/*" }),
  ],
  watch: {
    include: "src/**", // Watch for changes in the src directory
  },
};
