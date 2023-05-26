const paintings = require("./db.json")
let paintingID = 5;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A lifetime friend shall soon be made.", "Go for the gold today! You’ll be the champion of whatever.", "Nature, time and patience are the three great physicians.", "The philosophy of one century is the common sense of the next.", "You have exceeded what was expected."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getEnglishQuote: (req, res) => {
        const englishQuotes = ["Our greatest glory is not in never failing, but in rising every time we fall.", "Nothing is particularly hard if you break it down into small jobs.", "Each day provides its own gifts."];
            
        let randomIndex = Math.floor(Math.random() * englishQuotes.length);
        let randomQuote = englishQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getSpanishQuote: (req, res) => {
        const spanishQuotes = ["Nuestra mayor gloria no está en no fallar nunca, sino en levantarnos cada vez que caemos.", "Nada es particularmente difícil si lo divides en pequeños trabajos.", "Cada día ofrece sus propios regalos."];
            
        let randomIndex = Math.floor(Math.random() * spanishQuotes.length);
        let randomQuote = spanishQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getFrenchQuote: (req, res) => {
        const frenchQuotes = ["Notre plus grande gloire n'est pas de ne jamais échouer, mais de nous relever à chaque fois que nous tombons.", "Rien n'est particulièrement difficile si vous le décomposez en petits travaux.", "Chaque jour offre ses propres cadeaux."];
            
        let randomIndex = Math.floor(Math.random() * frenchQuotes.length);
        let randomQuote = frenchQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getGermanQuote: (req, res) => {
        const germanQuotes = ["Unser größter Ruhm liegt nicht darin, nie zu versagen, sondern jedes Mal aufzustehen, wenn wir fallen.", "Nichts ist besonders schwer, wenn man es in kleine Aufgaben aufteilt.", "Jeder Tag bietet seine eigenen Geschenke."];
            
        let randomIndex = Math.floor(Math.random() * germanQuotes.length);
        let randomQuote = germanQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getPortugueseQuote: (req, res) => {
        const portugueseQuotes = ["Nossa maior glória não está em nunca falhar, mas em nos levantar sempre que caímos.", "Nada é particularmente difícil se você dividir em pequenos trabalhos.", "Cada dia oferece seus próprios presentes."];
            
        let randomIndex = Math.floor(Math.random() * portugueseQuotes.length);
        let randomQuote = portugueseQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getItalianQuote: (req, res) => {
        const italianQuotes = ["La nostra più grande gloria non è non fallire mai, ma rialzarsi ogni volta che cadiamo.", "Niente è particolarmente difficile se lo scomponi in piccoli lavori.", "Ogni giorno offre i propri doni."];
            
        let randomIndex = Math.floor(Math.random() * italianQuotes.length);
        let randomQuote = italianQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getRussianQuote: (req, res) => {
        const russianQuotes = ["Наша величайшая слава не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда мы падаем.", "Нет ничего особенно сложного, если разбить его на небольшие задания.", "Каждый день приносит свои подарки."];
            
        let randomIndex = Math.floor(Math.random() * russianQuotes.length);
        let randomQuote = russianQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getRussianQuote: (req, res) => {
        const russianQuotes = ["Наша величайшая слава не в том, чтобы никогда не падать, а в том, чтобы подниматься каждый раз, когда мы падаем.", "Нет ничего особенно сложного, если разбить его на небольшие задания.", "Каждый день приносит свои подарки."];
            
        let randomIndex = Math.floor(Math.random() * russianQuotes.length);
        let randomQuote = russianQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getJapaneseQuote: (req, res) => {
        const japaneseQuotes = ["私たちの最大の栄光は、決して失敗しないことではなく、転ぶたびに立ち上がることです。", "小さな仕事に分解すれば、特に難しいことはありません。", "毎日が独自の贈り物を提供します。"];
            
        let randomIndex = Math.floor(Math.random() * japaneseQuotes.length);
        let randomQuote = japaneseQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getChineseQuote: (req, res) => {
        const chineseQuotes = ["我们最大的荣耀不在于永不失败，而在于每次跌倒都能站起来。", "如果将其分解为小工作，没有什么特别困难的。", "每一天都有自己的礼物。"];
            
        let randomIndex = Math.floor(Math.random() * chineseQuotes.length);
        let randomQuote = chineseQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getKoreanQuote: (req, res) => {
        const koreanQuotes = ["우리의 가장 큰 영광은 결코 실패하지 않는 것이 아니라 우리가 넘어질 때마다 일어나는 것입니다.", "작은 작업으로 나누면 특별히 어려운 것은 없습니다.", "매일 자신의 선물을 제공합니다."];
            
        let randomIndex = Math.floor(Math.random() * koreanQuotes.length);
        let randomQuote = koreanQuotes[randomIndex];

        res.status(200).send(randomQuote);
    },

    getPaintings: (req, res) => res.status(200).send(paintings),

    deletePainting: (req, res) => {
        let index = paintings.findIndex(elem => elem.id === +req.params.id)
        paintings.splice(index, 1)
        res.status(200).send(paintings)
    },

    createPainting: (req, res) => {
        let { name, painter, painterQuote, cost, paintingImg } = req.body
        let newPainting = {
            id: paintingID,
            name,
            painter,
            painterQuote,
            cost,
            paintingImg
        }
        paintings.push(newPainting)
        res.status(200).send(paintings)
        paintingID++
    },

    updatePainting: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        res.status(200).send(paintings)
        let index = paintings.findIndex(elem => +elem.id === +id)
        
        if (type === "minus" && paintings[index].price <= 1000) {
            paintings[index].cost = 0;
            res.status(200).send(paintings)
        } else if (type === "plus") {
            paintings[index].cost += 500;
            res.status(200).send(paintings)
        } else if (type === "minus") {
            paintings[index].cost -= 500;
            res.status(200).send(paintings)
        } else {
            res.sendStatus(400)
        }
    },


    getHappyFace: (req, res) => {
        const happyFace = "😃, that's great! I hope it carries on the way."

        res.status(200).send(happyFace)
    },

    getSadFace: (req, res) => {
        const sadFace = "😢, don't feel bad about expressing your feelings."

        res.status(200).send(sadFace)
    },

    getAngryFace: (req, res) => {
        const angryFace = "😡, your angry is understandable, please don't let it turn you to the dark side."

        res.status(200).send(angryFace)
    },

    getCrazyFace: (req, res) => {
        const crazyFace = "🤪, whoa hold on, take a chill pill."

        res.status(200).send(crazyFace)
    },

    getSickFace: (req, res) => {
        const sickFace = "🤢, I hope you get better take some medication."

        res.status(200).send(sickFace)
    },

    getTiredFace: (req, res) => {
        const tiredFace = "😫, you're doing great, hang in there buddy."

        res.status(200).send(tiredFace)
    },

    getConfusedFace: (req, res) => {
        const confusedFace = "🤔, it's okay to be confused and have questions. Here, I'll help you out."

        res.status(200).send(confusedFace)
    },

    getNeutralFace: (req, res) => {
        const neutralFace = "😐"

        res.status(200).send(neutralFace)
    },

    getSleepyFace: (req, res) => {
        const sleepyFace = "😴, I'll go get us some coffee."

        res.status(200).send(sleepyFace)
    },

    getDrunkFace: (req, res) => {
        const drunkFace = "🥴, glad you're having a bit of fun. Just don't drive home."

        res.status(200).send(drunkFace)
    }

}