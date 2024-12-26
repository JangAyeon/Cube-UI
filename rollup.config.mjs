/* eslint-disable @typescript-eslint/comma-dangle */
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
// node version이 높은 경우 강의에서 사용한 asser에서 에러 발생함 (회사 컴) - with로 변경해 해결함
// 나의 노트북은 node version 18로 맞춰놔서 assert 사용해도 에러 발생하지 않았음

export default [
  // ♥️ 5-1. TypeScript 및 CSS 번들링
  {
    input: "src/index.ts" /* 번들링 파일 진입점 */,
    output: [
      /* 번들 결과 저장할 파일과 포맷 지정 */
      {
        file: packageJson.main,
        format: "cjs" /* CommonJS 형식으로 번들링을 */,
        sourcemap: true /* 소스맵 파일을 생성 */,
      },
      {
        file: packageJson.module,
        format: "esm" /* ES 모듈 형식으로 번들링 */,
        sourcemap: true,
      },
    ],
    plugins: [
      /* 플러그인들을 지정 */
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx", "**/*.test.ts", "**/*.stories.ts"],
      }),
      postcss({ extensions: [".css"], inject: true, extract: false }),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  // ♥️ 5-2. 커스텀 타입 정의 파일 번들링: TypeScript 타입 파일 처리
  {
    input:
      "dist/esm/types/index.d.ts" /* 타입 정의 파일의 번들링을 시작할 위치 */,
    output: [
      { file: "dist/index.d.ts", format: "esm" },
    ] /* 번들링된 타입 정의 파일을 저장할 위치와 형식을 지정 */,
    plugins: [dts()],
    external: [/\.css$/],
  },
  // ♥️ 5-3. 글로벌 CSS 파일 처리: 스타일 번들링
  {
    input: "src/globals.css",
    output: [{ file: "dist/index.css", format: "es" }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
      }),
    ],
  },
];
