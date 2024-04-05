import path from "node:path";
import webpack from "webpack";
import { buildWebpackCongig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildOptions, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  }

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const isDev = mode === 'development';

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT
  }

  const config: webpack.Configuration = buildWebpackCongig(options);

  return config;
};
