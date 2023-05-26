const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const quotesSelector = document.getElementById("quotes")

const facesSelector = document.getElementById("faces")

const paintingContainer = document.getElementById("painting-container")
const paintingForm = document.getElementById("painting-form")

const paintingsCallback = ({ data: paintings }) => displayPaintings(paintings)
const errCallback = err => console.log(err)

const getAllPaintings = () => axios.get("http://localhost:4000/api/paintings/").then(paintingsCallback).catch(errCallback)
const createPainting = body => axios.post("http://localhost:4000/api/paintings/", body).then(paintingsCallback).catch(errCallback)
const deletePainting = id => axios.delete(`http://localhost:4000/api/paintings/${id}`).then(paintingsCallback).catch(errCallback)
const updatePainting = (id, type) => axios.put(`http://localhost:4000/api/paintings/${id}`, {type}).then(paintingsCallback).catch(errCallback)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")  
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
}

const getEnglishQuote = () => {
    axios.get("http://localhost:4000/api/englishQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getSpanishQuote = () => {
    axios.get("http://localhost:4000/api/spanishQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getFrenchQuote = () => {
    axios.get("http://localhost:4000/api/frenchQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getGermanQuote = () => {
    axios.get("http://localhost:4000/api/germanQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getPortugueseQuote = () => {
    axios.get("http://localhost:4000/api/portugueseQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getItalianQuote = () => {
    axios.get("http://localhost:4000/api/italianQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getRussianQuote = () => {
    axios.get("http://localhost:4000/api/russianQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getJapaneseQuote = () => {
    axios.get("http://localhost:4000/api/japaneseQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getChineseQuote = () => {
    axios.get("http://localhost:4000/api/chineseQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getKoreanQuote = () => {
    axios.get("http://localhost:4000/api/koreanQuotes/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

function submitPaintingHandler(e) {
    e.preventDefault()

    let name = document.getElementById("name")
    let painter = document.getElementById("painter")
    let painterQuote = document.getElementById("painterQuote")
    let cost = document.getElementById("cost")
    let paintingImg = document.getElementById("paintingImg")

    let bodyObj = {
        name: name.value,
        painter: painter.value,
        painterQuote: painterQuote.value,
        cost: cost.value,
        paintingImg: paintingImg.value
    }

    createPainting(bodyObj)

    name.value = ''
    painter.value = ''
    painterQuote.value = ''
    cost.value = ''
    paintingImg.value = ''
}

function createPaintingFrame(painting) {
    const paintingFrame = document.createElement('div')
    paintingFrame.classList.add('painting-frame')

    paintingFrame.innerHTML = `<img alt='painting' src=${painting.paintingImg} class='painting-image'/>
    <p class="name">${painting.name}</p>
    <p class="other-info">${painting.painter}</p>
    <p class="other-info">${painting.painterQuote}<p>
    <div class="button-container">
        <button onclick="updatePainting(${painting.id}, 'plus')">+</button>
        <p>${painting.cost}<p>
        <button onclick="updatePainting(${painting.id}, 'minus')">-</button>
    </div> 
    <button onclick="deletePainting(${painting.id})">delete</button>
    `
    paintingContainer.appendChild(paintingFrame)
}
/*
    <form class="button-container>
        <input type="text" id="newQuote" name="newQuote" placeholder="Put new quote>
        <input type="submit" value="Submit" onclick="updatePainting(${this})>
    </form>*/

function displayPaintings(arr) {
    paintingContainer.innerHTML = `` 
    for (i = 0; i < arr.length; i++) {
        createPaintingFrame(arr[i])
    }
}

const getHappyFace = () => {
    axios.get("http://localhost:4000/api/happyFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getSadFace = () => {
    axios.get("http://localhost:4000/api/sadFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getAngryFace = () => {
    axios.get("http://localhost:4000/api/angryFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getCrazyFace = () => {
    axios.get("http://localhost:4000/api/crazyFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getSickFace = () => {
    axios.get("http://localhost:4000/api/sickFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getTiredFace = () => {
    axios.get("http://localhost:4000/api/tiredFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getConfusedFace = () => {
    axios.get("http://localhost:4000/api/confusedFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getNeutralFace = () => {
    axios.get("http://localhost:4000/api/neutralFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getSleepyFace = () => {
    axios.get("http://localhost:4000/api/sleepyFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const getDrunkFace = () => {
    axios.get("http://localhost:4000/api/drunkFace") 
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

quotesSelector.addEventListener('change', event => { 
    if (event.target.value === "English") {
        getEnglishQuote()
    } else if (event.target.value === "Spanish") {
        getSpanishQuote()
    } else if (event.target.value === "French") {
        getFrenchQuote()
    } else if (event.target.value === "German") {
        getGermanQuote()
    } else if (event.target.value === "Portuguese") {
        getPortugueseQuote()
    } else if (event.target.value === "Italian") {
        getItalianQuote()
    } else if (event.target.value === "Russian") {
        getRussianQuote()
    } else if (event.target.value === "Japanese") {
        getJapaneseQuote()
    } else if (event.target.value === "Chinese") {
        getChineseQuote()
    } else if (event.target.value === "Korean") {
        getKoreanQuote()
    }
})

facesSelector.addEventListener('change', event => { 
    if (event.target.value === "Happy") {
        getHappyFace()
    } else if (event.target.value === "Sad") {
        getSadFace()
    } else if (event.target.value === "Angry") {
        getAngryFace()
    } else if (event.target.value === "Crazy") {
        getCrazyFace()
    } else if (event.target.value === "Sick") {
        getSickFace()
    } else if (event.target.value === "Tired") {
        getTiredFace()
    } else if (event.target.value === "Confused") {
        getConfusedFace()
    } else if (event.target.value === "Neutral") {
        getNeutralFace()
    } else if (event.target.value === "Sleepy") {
        getSleepyFace()
    } else if (event.target.value === "Drunk") {
        getDrunkFace()
    }
})

paintingForm.addEventListener('submit', submitPaintingHandler)

getAllPaintings()

