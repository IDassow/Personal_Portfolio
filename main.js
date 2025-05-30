    let footer_quote = document.getElementById('footer-quote');
  const og = footer_quote.textContent;

  function changeToPic() {
    footer_quote.textContent = ""; // remove the text
    footer_quote.style.backgroundImage = "url('https://static.wikia.nocookie.net/kungfupanda/images/2/2e/Oogway-white.png/revision/latest?cb=20160326153345')";
    footer_quote.style.backgroundSize = "contain";
    footer_quote.style.backgroundRepeat = "no-repeat";
    footer_quote.style.backgroundPosition = "center";
    footer_quote.style.height = "200px"; // adjust as needed
  }

  function changeToText() {
    footer_quote.textContent = og;
    footer_quote.style.backgroundImage = "none";
    footer_quote.style.height = "auto"; // reset height if needed
  }

  footer_quote.addEventListener('mouseover', changeToPic);
  footer_quote.addEventListener('mouseout', changeToText);