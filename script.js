async function getQuote(){

  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const loading = document.getElementById("loading");


  loading.innerHTML = "Loading..."
  quote.innerHTML = "";
  author.innerHTML = "";

  try{
    const response = await fetch("https://dummyjson.com/quotes/random");
    if(!response.ok){
      throw new Error("Failed to fetch quote");

    }

    const data = await response.json();
    quote.innerHTML = "Quote: " + data.quote;
    author.innerHTML = "Author: " + data.author;
    loading.innerHTML = "";

  }
  catch(error){
    loading.innerHTML = error.message;
  }
}