const sharp = require("sharp");
const glob = require("glob");
const fs = require("fs-extra");

console.log("optimizing");

const matches = glob.sync("src/images/**/*.{png,jpg,jpeg}");
const MAX_WIDTH = 1800;
const QUALITY = 70;

Promise.all(
  matches.map(async match => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }

    const optimizedName = match.replace(
      /(\..+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return fs.rename(optimizedName, match);
  })
);
