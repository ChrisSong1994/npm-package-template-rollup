/* eslint-disable no-undef */
/**
 * 构建esm 和 umd 两种模块类型
 */
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

const isProd = process.env.NODE_ENV === "production";

export default [
  {
    input: `src/index.ts`,
    plugins: [nodeResolve(), commonjs(), esbuild(), isProd ? terser() : null],
    output: {
      file: `dist/index.js`,
      format: "umd",
      name: "npmPackageTemplate",  // 全局对象名称
    },
  },
  {
    input: `src/index.ts`,
    plugins: [esbuild()],
    output: {
      file: `dist/index.esm.js`,
      format: "esm",
    },
  },
  {
    input: `src/index.ts`,
    plugins: [dts()],
    output: {
      file: `dist/index.d.ts`,
      format: "es",
    },
  },
];
