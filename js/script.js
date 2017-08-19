//Create quotes array 

const quotes = [
	{
		quote: "It doesn't matter how many times you get rejected. All that needs to happen is for one person to tell you yes, and then everybdy else can go fuck themselves.",
		source: "Chelsea Handler" 
	},
	{	quote: "Don't wish it were easier, wish you were better. Don't wish for less problems, wish for more skills. Don't wish for less challenges, wish for more wisdom.",
		source: "Jim Rohn"
	},
	{
		quote: "I hated every minute of training, but I said... Don't quit. Suffer now and live the life of a champion.",
		source: "Muhammad Ali"
	},
	{
		quote: "If we are willing to stand fully in our own shoes and never give up on ourselves, then we will be able to put ourselves in the shoes of others and never give up on them.",
		source: "Pema Chodron",
		citation: "Start Where You Are",
		year: "2015"
	},
	{
		quote: "The cost of being wrong is less than the cost of doing nothing.",
		source: "Seth Godin"
	},
	{
		quote: "The most important thing about art is to work. Nothing else matters except sitting down every day and trying.",
		source: "Steven Pressfield",
		citation: "The War of Art",
		year: "2002"
	},
	{
		quote: "No matter how many mistakes you make or how slow you progess, you are still way ahead of everyone who isn't trying.",
		source: "Tony Robins"
	} 
];

//Select random quote object and return it
function getRandomQuote() {
	let i = Math.floor( Math.random() * (quotes.length) );
	return quotes[i];
}


//Function that prints the quote to the page
function printQuote() {
	
	let quote = getRandomQuote();
	
	let quoteHtml="";
	
	quoteHtml += '<p class="quote">' + quote.quote + '</p>';
	quoteHtml += '<p class="source">' + quote.source;
	
	
	if( quote.hasOwnProperty('citation') ) {
		quoteHtml += '<span class="citation">' + quote.citation + '</span>';
	}
	
	if( quote.hasOwnProperty('year') ) {
		quoteHtml += '<span class="year">' + quote.year + '</span>';
	}
	
	quoteHtml += '</p>';

	//Add quoteHtml variable to inner Html
	document.getElementById('quote-box').innerHTML = quoteHtml;
	
}


printQuote();
//When user clicks on the button, call the printQuote function
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
