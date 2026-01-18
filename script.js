const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";


async function getquote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    } catch (error) {
        quote.innerHTML = "Oops! Something went wrong.";
        author.innerHTML = "";
        console.error(error);
    }
}

function tweet() {
    const text = `"${quote.innerHTML}" - ${author.innerHTML}`;
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text), "Tweet Window", "width=600,height=300");
}

getquote(api_url);
