import { yarg } from "./config";
import { ServerApp } from "./presentation/Server-app"

(async () => {
  await main();
})()

async function main() {
  const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;
  // console.log(args);

  ServerApp.run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination
  });

}