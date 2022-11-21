const express = require("express");
const path = require("path");
const fs = require("fs");
const { getMetaById } = require("./poc/meta");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.get("/*", (req, res, next) => {
  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    const metaId = req.query.id;
    const meta = getMetaById(metaId);
    if (!meta) return res.status(404).send("meta not found");

    htmlData = htmlData
      .replace("<title>React App</title>", `<title>${meta.title}</title>`)
      .replace("__META_OG_TITLE__", meta.title)
      .replace("__META_OG_DESCRIPTION__", meta.description)
      .replace("__META_DESCRIPTION__", meta.description)
      .replace("__META_OG_IMAGE__", meta.image);

    return res.send(htmlData);
  });
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log("listening on " + PORT + "...");
});
