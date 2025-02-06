import { loadEnvConfig } from "@next/env";
console.log("loadEnvConfig");
const projectDir = process.cwd();
loadEnvConfig(projectDir);