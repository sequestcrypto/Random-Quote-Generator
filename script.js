const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.getElementById('quoteText');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// Function to fetch a random quote from an API
async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = data.content;
        author.textContent = `- ${data.author}`;
    } catch (error) {
        console.log('Error fetching quote:', error);
    }
}

// Event listener for the "Generate Quote" button
newQuoteBtn.addEventListener('click', getQuote);

// Initial call to get a random quote when the page loads
getQuote();
