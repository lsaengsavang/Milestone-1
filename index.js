const textElement = document.getElementById('text')
const choiceButtonsElement = document.getElementById('choice-buttons')

// Starts game
function startGame() {
  showTextNode(1);
}

// Shows the prompt 
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text

// Clear existing buttons (Credit to Web Dev Simplified)
  while (choiceButtonsElement.firstChild) {
    choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
  }

// Create buttons for the current text node's options (Credit to Web Dev Simplified)
  textNode.options.forEach(option => {
    const button = document.createElement('button')
    button.innerText = option.text
    button.addEventListener('click', () => selectOption(option))
    choiceButtonsElement.appendChild(button)
  })

  // Center the text
  textElement.style.textAlign = 'center';

// Display images, if the prompt has one
  if (textNode.image) {
    const imageElement = document.createElement('img');
    imageElement.src = textNode.image;
    imageElement.style.margin = '0 auto';
    choiceButtonsElement.parentNode.insertBefore(imageElement, choiceButtonsElement);
  } else {

// Clears image from the previous prompt
    const existingImage = document.querySelector('#text + img');
    if (existingImage) {
      existingImage.remove();
    }
  }
}

// Selecting choices
function selectOption(option) {
  const nextTextNodeId = option.nextText
  showTextNode(nextTextNodeId)
}

// Text prompts (1-37)
const textNodes = [
  {
    // Only this prompt has an image, if I add to more prompts, they combine for some reason??
    id: 1,
    text: 'A huge wolf runs up to you! ',
    image: "images/wolf.png",
    options: [
      {
        text: 'Run away 🏃',
        nextText: 2
      },
      {
        text: 'Try to pet it 🖐️',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'You run down the hill until the dog stops chasing you, then you slow down. In an unfamiliar area, you look around to see an opening to a trail and an occupied tent with a live campfire outside of it.',
    options: [
      {
        text: 'Go to the trail ⛰️',
        nextText: 4
      },
      {
        text: 'Go to the tent 🏕️',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: `The wolf licks your hand, and allows you to pet it. You notice he has a collar that reads "Spike". You call him by his name and he wags his tail excitedly. You walk around a lake and Spike follows you. You stop for a moment while Spike sniffs around, but wanders off.`,
    options: [
      {
        text: 'Follow Spike 🐺',
        nextText: 6
      },
      {
        text: 'Call Spike to come back 🗣️',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: "You follow the trail and find a cave. You quietly sneak into the cave, following a strange fog coming from around the corner. You peak and find a wizard mixing a mysterious cauldron. Do you approach him?",
    options: [
      {
        text: 'Talk to the wizard 🧙‍♂️',
        nextText: 8
      },
      {
        text: 'Avoid the wizard ❌',
        nextText: 9
      }
    ]
  },
  {
    id: 8,
    text: "You approach the wizard, Merlin, and he welcomes you into his cave. He shares that he has been residing in the cave to practice his spells and potion brewing. He says he is making a special brew. He pour a glass and offers it to you. He vaguely promises that it is nothing bad.",
    options: [
      {
        text: "Drink it 🍷",
        nextText: 11
      },
      {
        text: "Refuse to drink it ❌",
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: "You drink the mysterious potion. It tastes like a crisp glass of fresh apple juice. You feel your body tingling for a moment and you feel lighter. You start to levitate and fly! You thank the wizard for the potion and fly home. 🙂",
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
        text: "Become a wizard 🧙‍♂️",
        nextText: 13
      },
      {
        text: "Refuse to become a wizard ❌",
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: "You and Merlin attend wizarding school together. He excels in potion brewing, and you excel at spells and combat. The two of you help each other and graduate top of your class! 🧙",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 14,
    text: "You refuse. Merlin continues to talk about the magical world of fairies and leprechauns. He takes you to his cave backyard to meet his 3 pet dragons. You become friends and he occasionally flies to your home to visit you. 🧙‍♂️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 9,
    text: "You sneak past the wizard and there are two paths in front of you. There is a room with a strange glow and an opening to the outside.",
    options: [
      {
        text: "Go to the glowing room 🔅",
        nextText: 15
      },
      {
        text: "Go outside ⛰️",
        nextText: 16
      }
    ]
  },
  {
    id: 15,
    text:  "You follow the glow to find a room full of glowing rose bushes and a patch of pumpkins. You observe the roses, touching the soft petals. You notice that they smell like apples. You pluck one from the ground to keep.",
    options: [
      {
        text: "Stay 🌹",
        nextText: 17
      },
      {
        text: "Go home 🏠",
        nextText: 18
      }
    ]
  },
  {
    id: 17,
    text:  "You walk around the cave. The wizard finds you admiring the roses. He is friendly and offers you a job to take care of the roses, as he is busy with his wizarding studies. You accept, learning to care for the magical flowers and become a magical herbologist. 🌹",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 18,
    text: "You carefully exit the cave and walk home. You display your glowing rose in a glass case to remind you of your adventure. 🌹",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 16,
    text: "You walk outside, blinded by the bright sunlight. Your eyes adjust and you see 3 dragons in front of you!",
    options: [
      {
        text: "Fight ⚔️",
        nextText: 19
      },
      {
        text: "Panic 😰",
        nextText: 20
      }
    ]
  },
  {
    id: 19,
    text:  "You turn around and grab a large bucket and rake. You thought you can singlehandedly take on 3 dragons. Rest in peace. ☠️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 20,
    text: "You stand frozen in place as the dragons turn to look at you. The wizard comes running from the cave and finds you. He explains that these dragons are his pets. He hands you a large pumpkin to feed his vegan dragons. They approach you, allowing you to feed and pet the beautiful creatures. 🐉",
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
        text: "Ask her to join 🤝",
        nextText: 21,
      },
      {
        text: "Keep it to yourself 🙊",
        nextText: 22,
      }
    ]
  },
  {
    id: 21,
    text: "She accepts to help you find the treasure. With her knowledge of the treasure, she recognizes a path from her stories. You start off searching  together, but split up to speed up the search. Eventually, you see rocks in an X shape in the dirt. Sarah is nowhere to be seen. If you call Sarah over, you will have to share the gold with her.",
    options: [
      {
        text: "Share with Sarah ⭕",
        nextText: 23,
      },
      {
        text: "Keep it to yourself ❌",
        nextText: 24,
      }
    ]
  },
  {
    id: 24,
    text: "You quietly dig up the dirt alone, but the dirt is so compacted that you become exhausted and faint. You wake up to a troll standing over you and an empty hole beside you. The troll tells you that he has powers to listen to your selfish thoughts. As your punishment, he gave Sarah the whole treasure.",
    options: [
      {
        text: "Return home 🏠",
        nextText: 25,
      },
      {
        text: "Attack the troll 🧌",
        nextText: 26,
      }
    ]
  },
  {
    id: 25,
    text: "You lunge at the troll, but he flicks his hand and you freeze in place. He shakes his head at your poor decision making. He turns you into a little mouse.",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 26,
    text: "You are scolded by the troll for being selfish. You leave empty-handed. As you drive home, you reflect on your behavior. ☹️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 22,
    text: "You and Sarah exchange stories for a few hours, then you say your goodbyes. You spend the next weeks searching the farm alone. You try to recall the description of the path from Sarah's story, but you struggle and never find the treasure. ☹️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 23,
    text:  "Sarah runs over. A troll appears behind you, admiring your companionship and willingness to share your wealth. The troll waves his hand, opening the treasure chest. You see it filled to the top with solid gold coins. You hug each other in celebration. You split the gold coins evenly, roughly giving you $2 million each. 💰",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 6,
    text: "He leads you to a little box on the ground. You hold him back, afraid of what the object might be. Upon further investigation, you discover it's a tiny house! You look closer and see a tiny flicker of light on the inside. Spike tries to push past you to get to the house. Do you let him approach it?",
    options: [
      {
        text: "Let him ⭕",
        nextText: 27,
      },
      {
        text: "Call Spike to come back 🗣️",
        nextText: 28,
      }
    ]
  },
  {
    id: 27,
    text: `Spike runs towards the house and sniffs aggressively, shaking the tiny house. You see the door open and a tiny fairy screams! It waves it's hand, releasing a puff of glittery dust into Spike's face. The door closes and Spike is dazed, but after a few moments, remains unharmed. Do you interrogate the fairy or avoid conflict?`,
    options: [
      {
        text: "Interrogate the fairy 🧚‍♀️",
        nextText: 28,
      },
      {
        text: "Avoid conflict ❌",
        nextText: 29,
      }
    ]
  },
  {
    id: 28,
    text: "The fairy opens the door, apologizing. It was startled and accidentally charmed Spike. The fairy, named Fawn, gives Spike an antidote to reverse the charm. Fawn is sweet and caring to animals. You become friends and you offer to take Fawn home to live with you. Fawn accepts. You, Spike, and Fawn go home to live together. 🧚‍♀️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 29,
    text: `During the walk home, Spike starts to cough. You grow concerned as the coughing lasts a few minutes. You ask, "Are you okay?" You hear a voice respond, "Yes, I'm fine." Spike spoke! The fairy seems to have charmed Spike into being able to speak. You take him home and have interesting conversations. 🐺`,
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 28,
    text: "You continue to hold him back. The tiny door opens, revealing a little fairy! She cautiously flies over to you. Her name is Fawn. She tells you about her fairy friends and a leprechaun who also lives at the lake.",
    options: [
      {
        text: "Meet the fairies 🧚‍♀️",
        nextText: 30,
      },
      {
        text: "Meet the leprechaun 🧝",
        nextText: 31,
      }
    ]
  },
  {
    id: 30,
    text: "Fawn flies away and comes back with her friends. They make both of you flower crowns and gently place them on your heads. They fly around you, giggling and playing with Spike. You and Spike leave for the day, but always make time to see your new fairy friends. 🧚‍♀️",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 31,
    text: "Fawn takes you down to the leprechaun's home. She introduces you, and he welcomes you with open arms. You are amazed with his interior design skills, and he offers to decorate your house. You take him up on his offer and he leaves you with a beautiful cottagecore home. 🧝",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 7,
    text: "Spike comes running back to you. You continue walking and find a small home. You knock on the door, and a leprechaun opens it! He invites you inside. His name is Albie, he just finished baking an apple pie. He shares a slice with you and he gives you a tour of his home. You see a room filled with a golden trophies and gold coins.",
    options: [
      {
        text: "Ask about the gold trophies 🏆",
        nextText: 32,
      },
      {
        text: "Ask about the gold coins 🪙",
        nextText: 33,
      }
    ]
  },
  {
    id: 32,
    text: "Albie shows you his collection of awards he won during the Leprechaun Olympics. He is a professional pickleball player. He offers to be your pickleball mentor. Do you accept?",
    options: [
      {
        text: "Learn pickleball 🎾",
        nextText: 34,
      },
      {
        text: "Refuse ❌",
        nextText: 35,
      }
    ]
  },
  {
    id: 34,
    text: "You and Albie practice pickleball for months to compete in a pickleball tournament. You win numerous awards, thanks to your mentor. 🎾",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 35,
    text: `"No worries, it's not for everyone" he says. He tells you stories of his competitions and he gives you the recipe for his amazing apple pie. 🥧`,
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 33,
    text: "Albie tells you that after every rainfall, the leprechauns have a gold hunt. They race to the end of the rainbow and the winner gets the gold. There are no rules against having a human compete. He asks if you would like to join during the next hunt, but warns that the other leprechauns are competitive and violent.",
    options: [
      {
        text: "Join the gold hunt 🪙",
        nextText: 36,
      },
      {
        text: "Pass ❌",
        nextText: 37,
      }
    ]
  },
  {
    id: 36,
    text: "You wait for the next rainy day and join Albie in the gold hunt. Due to your human size, you carry Albie and move faster than the other teams. You beat everyone to the end of the rainbow and win the gold prize! Albie gives you the entire pot of gold, because he has plenty of his own. 💰",
    options: [
      {
        text: "Restart",
        nextText: 1
      }
    ]
  },
  {
    id: 37,
    text: `Albie tells you that he is a frequent winner of the gold hunt, and has plenty of gold already. He fills up a small pouch with a handful of gold coins and hands it to you. "Here, you need it more than I do." 💰`,
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