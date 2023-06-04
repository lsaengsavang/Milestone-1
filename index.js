const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')



// Starting game will display first prompt
function startGame() {
  showTextNode(0)
}

// Shows the prompt
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
}

// Text prompts
const textNodes = [
  {
    id: 1,
    text: 'A huge wolf runs up to you!',
    options: [
      {
        text: 'Run away',
        nextText: 2
      },
      {
        text: 'Try to pet it',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'You run down the hill until the dog stops chasing you, then you slow down. In an unfamiliar area, you look around to see an opening to a trail and an occupied tent with a live campfire outside of it.',
    options: [
      {
        text: 'Go to the trail',
        nextText: 4
      },
      {
        text: 'Go to the tent',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: `The wolf licks your hand, and allows you to pet it. You notice he has a collar that reads "Spike". You call him by his name and he wags his tail excitedly. You walk around a lake and Spike follows you. You stop for a moment while Spike sniffs around, but wanders off.`,
    options: [
      {
        text: 'Follow Spike',
        nextText: 6
      },
      {
        text: 'Call Spike to come back',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: "You follow the trail and find a cave. You quietly sneak into the cave, following a strange fog coming from around the corner. You peak and find a wizard mixing a mysterious cauldron. Do you approach him?",
    options: [
      {
        text: 'Talk to the wizard',
        nextText: 8
      },
      {
        text: 'Avoid the wizard',
        nextText: 9
      }
    ]
  },
  {
    id: 10,
    text: "You approach the wizard, Merlin, and he welcomes you into his cave. He shares that he has been residing in the cave to practice his spells and potion brewing. He says he is making a special brew. He pour a glass and offers it to you. He promises that it is nothing bad.",
    options: [
      {
        text: "Drink it",
        nextText: 11
      },
      {
        text: "Refuse to drink it",
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: "You drink the mysterious potion. It tastes like a crisp glass of fresh apple juice. You feel your body tingling for a moment and you feel lighter. You start to levitate and fly! You thank the wizard for the potion and fly home. END",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 12,
    text: `He seems disappointed, but brushes it off. He tells you about his connections to the wizarding school."You just have to know somebody." He asks you if you'd like to join.`,
    options: [
      {
        text: "Become a wizard",
        nextText: 13
      },
      {
        text: "Refuse to become a wizard",
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: "You and Merlin attend wizarding school together. He excels in potion brewing, and you excel at spells and combat. The two of you help each other and graduate as top of your class!",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 14,
    text: "You and Merlin talk about the magical world of fairies and leprechauns. He takes you to his cave backyard and you meet his 3 pet dragons. You become friends and he occasionally flies to your home to visit you."
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  }
]

// Begin!
startGame()