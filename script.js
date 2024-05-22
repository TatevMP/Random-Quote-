const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".author .name"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(result => {
            quoteText.innerText = result.content;
            authorName.innerText = result.author;
            quoteBtn.innerText = "New Quote";
            quoteBtn.classList.remove("loading");
        });
}

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);


randomQuote();


// async.... await

/*const quoteText = document.querySelector(".quote"),
    quoteBtn = document.querySelector("button"),
    authorName = document.querySelector(".author .name"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

async function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    
    try {
        const response = await fetch("https://api.quotable.io/random");
        const result = await response.json();
        
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    } catch (error) {
        console.error('Error fetching quote:', error);
        quoteBtn.innerText = "Error, Try Again";
        quoteBtn.classList.remove("loading");
    }
}

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQuote);

randomQuote();

*/


