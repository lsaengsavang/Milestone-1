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
    id: 8,
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
    text: "You and Merlin attend wizarding school together. He excels in potion brewing, and you excel at spells and combat. The two of you help each other and graduate top of your class!",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 14,
    text: "You refuse. Merlin continues to talk about the magical world of fairies and leprechauns. He takes you to his cave backyard to meet his 3 pet dragons. You become friends and he occasionally flies to your home to visit you.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: ,
    text: 
  },
  {
    id: 9,
    text: "You sneak past the wizard and there are two paths in front of you. There is a room with a strange glow and an opening to the outside.",
    options: [
      {
        text: "Go to the glowing room",
        nextText: 15
      },
      {
        text: "Go outside",
        nextText: 16
      }
    ]
  },
  {
    id: 15,
    text:  "You follow the glow to find a room full of glowing rose bushes and a patch of pumpkins. You observe the roses, touching the soft petals. You notice that they smell like apples. You pluck one from the ground to keep.",
    options: [
      {
        text: "Stay",
        nextText: 17
      },
      {
        text: "Go home",
        nextText: 18
      }
    ]
  },
  {
    id: 17,
    text:  "You walk around the cave. The wizard finds you admiring the roses. He is friendly and offers you a job to take care of the roses, as he is busy with his wizarding studies. You accept, learning to care for the magical flowers and become a magical herbologist.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 18,
    text: "You carefully exit the cave and walk home. You display your glowing rose in a glass case to remind you of your adventure.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 16,
    text: "You walk outside, blinded by the bright sunlight. Your eyes adjust and you see 3 dragons in front of you! You scream.",
    options: [
      {
        text: "Fight",
        nextText: 19
      },
      {
        text: "Panic",
        nextText: 20
      }
    ]
  },
  {
    id: 19,
    text:  "You quickly grab a large bucket and rake from behind you, bracing yourself for the fight of your life. The dragons turn to look at you, but seem indifferent. You stand there, confused, as the smallest dragon walks up to you and purrs. It nuzzles against your leg and you pet it affectionately.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 20,
    text: "You stand frozen in place as the dragons turn to look at you. The wizard comes running from the cave and finds you. He explains that these dragons are his pets. He hands you a large pumpkin to feed his vegan dragons. They approach you, allowing you to feed and pet the beautiful creatures.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text:  "You walk up to the tent and see a woman walk out of it. Her name is Sarah. She invites you to sit at the campfire. She tells you the local legend of a buried treasure guarded by a magical troll. You recall a farm that sounds similar to the farm in the story. She tells you that it is her lifelong dream to find it. Do you ask her to join you or keep it to yourself?",
    options: [
      {
        text: "Ask her to join",
        nextText: 21,
      },
      {
        text: "Keep it to yourself",
        nextText: 22,
      }
    ]
  },
  {
    id: 21,
    text: "She accepts to help you find the treasure. With her knowledge of the treasure, she recognizes a path from her stories. You start off searching  together, but split up to speed up the search. Eventually, you see rocks in an X shape in the dirt. Sarah is nowhere to be seen. If you call Sarah over, you will have to share the gold with her.",
    options: [
      {
        text: "Share with Sarah",
        nextText: 23,
      },
      {
        text: "Keep it to yourself",
        nextText: 24,
      }
    ]
  },
  {
    id: 24,
    text: "You quietly dig up the dirt alone, but the dirt is so compacted that you become exhausted and faint. You wake up to a troll standing over you and an empty hole beside you. The troll tells you that he has powers to listen to your selfish thoughts. As your punishment, he gave Sarah the whole treasure.",
    options: [
      {
        text: "Return home",
        nextText: 25,
      },
      {
        text: "Attack the troll",
        nextText: 26,
      }
    ]
  }
]

// Begin!
startGame()

/* Blank template to copy and paste
  {
    id: ,
    text: 
    options: [
      {
        text: 
        nextText: ,
      },
      {
        text: 
        nextText: ,
      }
    ]
  }
*/
