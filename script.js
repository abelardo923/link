// **** my testing ****

const element = document.createElement("a");

let linkText = document.createTextNode(
  "Hello my friend hera is the link to my website"
);

element.appendChild(linkText);

element.href = "https://www.linkedin.com/in/abeljoao923";

document.body.appendChild(element);
