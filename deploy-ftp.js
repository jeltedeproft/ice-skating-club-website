import FtpDeploy from "ftp-deploy";
import { readFileSync } from "fs";

// Load .env manually (no external dependency needed)
const env = Object.fromEntries(
  readFileSync(".env", "utf8")
    .split("\n")
    .filter((line) => line.includes("="))
    .map((line) => line.split("=").map((s) => s.trim()))
);

const ftpDeploy = new FtpDeploy();

const config = {
  user: env.FTP_USER,
  password: env.FTP_PASSWORD,
  host: env.FTP_HOST,
  port: parseInt(env.FTP_PORT) || 21,
  localRoot: "./dist",
  remoteRoot: env.FTP_REMOTE_ROOT || "/",
  include: ["**/*"],
  deleteRemote: true,
  forcePasv: true,
};

ftpDeploy.on("uploading", (data) => {
  console.log(`Uploading (${data.transferredFileCount}/${data.totalFilesCount}): ${data.filename}`);
});

ftpDeploy.on("uploaded", (data) => {
  console.log(`Done: ${data.filename}`);
});

ftpDeploy.on("log", (data) => {
  console.log(data);
});

console.log("Starting FTP deploy...");
ftpDeploy
  .deploy(config)
  .then(() => console.log("Deploy complete!"))
  .catch((err) => console.error("Deploy failed:", err));
