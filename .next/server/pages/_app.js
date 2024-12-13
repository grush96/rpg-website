const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__480eb9._.js");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/.pnpm/next@15.0.3_@playwright+test@1.48.2_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-668_2ytajfevp7skzoq7ljckohvk6u/node_modules/next/app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
