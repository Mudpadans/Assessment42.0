const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '8707174bdd5543a29c2cb0c3a15833a4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

const { getCompliment, getFortune, getEnglishQuote, getSpanishQuote, getFrenchQuote, getGermanQuote, getPortugueseQuote, getItalianQuote, getRussianQuote, getJapaneseQuote, getChineseQuote, getKoreanQuote, getPaintings, deletePainting, createPainting, updatePainting, getHappyFace, getSadFace, getAngryFace, getCrazyFace, getSickFace, getTiredFace, getConfusedFace, getNeutralFace, getSleepyFace, getDrunkFace } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

app.get("/api/englishQuotes", getEnglishQuote);
app.get("/api/spanishQuotes", getSpanishQuote);
app.get("/api/frenchQuotes", getFrenchQuote);
app.get("/api/germanQuotes", getGermanQuote);
app.get("/api/portugueseQuotes", getPortugueseQuote);
app.get("/api/italianQuotes", getItalianQuote);
app.get("/api/russianQuotes", getRussianQuote);
app.get("/api/japaneseQuotes", getJapaneseQuote);
app.get("/api/chineseQuotes", getChineseQuote);
app.get("/api/koreanQuotes", getKoreanQuote);

app.get("/api/paintings", getPaintings);
app.delete("/api/paintings/:id", deletePainting);
app.post("/api/paintings", createPainting);
app.put("/api/paintings/:id", updatePainting)

app.get("/api/happyFace", getHappyFace)
app.get("/api/sadFace", getSadFace)
app.get("/api/angryFace", getAngryFace)
app.get("/api/crazyFace", getCrazyFace)
app.get("/api/sickFace", getSickFace)
app.get("/api/tiredFace", getTiredFace)
app.get("/api/confusedFace", getConfusedFace)
app.get("/api/neutralFace", getNeutralFace)
app.get("/api/sleepyFace", getSleepyFace)
app.get("/api/drunkFace", getDrunkFace)

app.listen(4000, () => console.log("Server running on 4000"));
