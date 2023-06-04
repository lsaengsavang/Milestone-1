const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')



// Starting game will display first prompt
function startGame() {
  showTextNode(1)
}

// Shows the prompt
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text

}

// Text prompts
const textNodes = {
  id: 1,
  text: 'A huge wolf is running towards you!',
  options: [{"Run away"}, {"Try to pet it"}]
}

// Begin!
startGame()