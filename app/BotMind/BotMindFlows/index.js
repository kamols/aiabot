import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

const questions = {
  start: {
    botPrompt: 'Hello, my name is <strong>Di</strong>',
    answers: [
      {
        nextId: 'myPurpose',
      },
    ],
  },
  myPurpose: {
    botPrompt: 'Hope I can be of assistance to you today',
    answers: [
      {
        nextId: 'yourName',
      },
    ],
  },
  yourName: {
    botPrompt: "Do you mind telling me <strong>your name</strong>?",

    input: textField(),
    answers: [
      {
        answer: common_greetings,
        nextId: 'greetings_notAName',
      },
      {
        answer: common_greetings_negative,
        catchName: true,
        nextId: 'asYouCanSee',
      },
    ],
  },
  greetings_notAName: {
	  botPrompt: 'Hello! <strong>I\'m still learning how to talk to humans</strong>, which means my conversational range is not very wide yet... 😅',
	  answers: [
	    {
	      nextId: 'greetings_whatsYourNameAgain',
	    },
	  ],
  },
  greetings_whatsYourNameAgain: {
	  botPrompt: "Lets start with <strong>your name</strong>?",
	  input: textField(),
	  answers: [
	    {
	      answer: common_greetings,
	      nextId: 'greetings_notAName',
	    },
	    {
	      answer: common_greetings_negative,
	      catchName: true,
	      nextId: 'asYouCanSee',
	    },
	  ],
  },
  asYouCanSee: {
    botPrompt: 'So <strong>@varName</strong>, how can I assist you today?',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
			{ nextId: 'question1' },
    ],
  },
  // emojisHtml: {
  //   botPrompt: "I can enhance my dialogue with emojis 🎉 and also using inline <span style='color:purple; background-color:white;font-weight:bold'>HTML</span>",
  //   answers: [
		// 	{ nextId: 'mediaBubbles1' },
  //   ],
  // },
  // mediaBubbles1: {
  //   botPrompt: 'I can also share <strong>images and animated GIFs</strong> like so:',
  //   answers: [
		// 	{ nextId: 'mediaBubbles2' },
  //   ],
  // },
  // mediaBubbles2: {
  //   botPrompt: 'https://www.moneysmart.gov.au/media/559279/add-on-insurance1.png',
  //   type: RTypes.MEDIA,
  //   answers: [
  //     {
  //       nextId: 'select',
  //     },
  //   ],
  // },
  // select: {
  //   botPrompt: 'I would like to <strong>predefined options</strong> to choose from:',
  //   varName: 'userName',
  //   input: selectField(['Dope!', 'Cool!']),
  //   answers: [
		// 	{ nextId: 'tags' },
  //   ],
  // },
  // tags: {
  //   botPrompt: 'Are you looking for:',
  //   varName: 'userName',
  //   input: tagsField(['Adjust my cover', 'Calculate my cover', "Get a quote", 'Make a claim']),
  //   answers: [
		// 	{ nextId: 'bagsSystem' },
  //   ],
  // },
  // bagsSystem: {
  //   botPrompt: "Besides all that, I can add up points in my <strong>Bags System</strong>, to eventually make a 'Recommendation'",
  //   answers: [
		// 	{ nextId: 'letsTryIt' },
  //   ],
  // },
  // letsTryIt: {
  //   botPrompt: "Let's try it!",
  //   answers: [
		// 	{ nextId: 'question1' },
  //   ],
  // },
  question1: {
    botPrompt: 'What are looking to do today?',
    botPrompt: "https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif",
    type: RTypes.MEDIA,
    varName: 'userName',
    input: selectField(['Adjust my cover', 'Calculate my cover', "Get a quote", 'Make a claim']),
    answers: [
      {
        answer: 'Adjust my cover',
        nextId: 'calculating',
      },
      {
        answer: 'Calculate my cover',
        nextId: 'calculating',
      },
       {
        answer: 'Get a quote',
        nextId: 'calculating',
      },     
      {
        answer: "Make a claim",
        nextId: 'calculating',
      },
    ],
  },






calculating:{
   botPrompt: "<strong><em>Calculate the insurance you need </em></strong> </br> </br>Insurance helps to protect you, your family, your income and your lifestyle if something happens to you. </br> </br>The Insurance Needs Calculator will help you work out how much Death, Total and Permanent Disablement (TPD) and Income Protection (IP) cover you may need. </br> </br>This will take a few minutes. </br> </br>You will be asked one set of personal and financial questions. </br> Some questions are optional, but the more information you provide the more accurate the calculated cover will be. </br> Once you've worked out your insurance needs, you can obtain a quote on this or any other level of insurance cover. </br>The data you provide within this Insurance Needs Calculator will be used solely for the purpose of producing the calculated cover and will not be used for any other purpose.",
botPrompt: "https://media0.giphy.com/media/l4Jz19hgVBnCCM8uY/200w.webp",
    type: RTypes.MEDIA, 
    varName: 'calculate',
    input: selectField(["Let's start calculating"]),
    answers: [
   { nextId: 'dob' },
     ],
  },


dob:{
  botPrompt: "Let's start with your date of birth",
   
  varName: 'dob',
    type: RTypes.TRANSFORMED_TEXT,
    input: textField(),
        answers: [
   { nextId: 'gender' },
     ],
},


gender:{
  botPrompt: "I am a",
   botPrompt: "https://media2.giphy.com/media/l0HlVq3nJvhSZiZEs/200w.webp",
    type: RTypes.MEDIA, 

  varName: 'gender',
    input: selectField(['Male!', 'Female']),



        answers: [
   { nextId: 'income' },
     ],
},

income:{
  botPrompt: "My gross annual salary including superannuation contributions, and any fringe benefits. This excludes any salary sacrificed components",
  varName: 'gender',
    type: RTypes.TRANSFORMED_TEXT,
    input: textField(),



        answers: [
   { nextId: 'frequency' },
     ],
},



  frequency: {
    botPrompt: 'How frequently?',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'frequency',
    input: selectField(['Per week', 'Per forthnight', "Per month", 'Per year']),
        answers: [
   { nextId: 'occupation' },
     ],
  },



 occupation:{
  botPrompt: "I work as",

  varName: 'occupation',
    type: RTypes.TRANSFORMED_TEXT,
    input: textField(),



        answers: [
   { nextId: 'management' },
     ],
},



 management:{
  botPrompt: "All members automatically receive standard cover unless they choose otherwise. If you’re eligible, you can apply for management cover which may better reflect your circumstances. </br></br>You must meet all of the below criteria in order for management cover to apply. If you do not meet the below criteria please proceed to the next question. </br><br/>I am engaged in a white collar occupation and I am earning at least $100,000 per annum including fringe benefits* (pro rata for part time)^, and <br> The duties of my occupation are limited to professional or managerial duties (at least 80% within an office environment), and</br>I meet one of the following: </br>I hold a degree which is necessary for performing my occupation, or </br>I am a member of a professional or government institute or body which is necessary for performing my occupation, or </br>I have 10 years of service in a senior management or executive role.</br></br><br>You can choose from standard or management cover below:",
  varName: 'management',
    type: RTypes.TRANSFORMED_TEXT,
    input: selectField(['Standard', 'Management']),



        answers: [
   { nextId: 'hours' },
     ],
},



  hours: {
         botPrompt: "https://media2.giphy.com/media/nCVVpakhBTwBi/200w.webp",
    type: RTypes.MEDIA, 
    varName: 'hours',
    input: selectField(['I work less than 15 hours per week', 'No, more']),
    answers: [
     { nextId: 'employment' },
    ],
  },


 employment: {
    botPrompt: 'I am a casual/contract employee',
    varName: 'employment',
    input: selectField(['Yes', 'No']),
    answers: [
     { nextId: 'dependant' },
    ],
  },

dependant: {
       botPrompt: "https://media.giphy.com/media/jIL3lq9Ah00tG/giphy.gif",
    type: RTypes.MEDIA,    
    varName: 'dependant',
    input: selectField(['I have a dependant spouse or partner', 'No']),
    answers: [
     { nextId: 'children' },
    ],
  },

children: {
      botPrompt: "https://media1.giphy.com/media/xUPOqpRhPpekA6fLk4/200w.webp",
    type: RTypes.MEDIA,    
    varName: 'children',
    input: selectField(['I currently have dependant children', 'No']),
    answers: [
     { nextId: 'cash' },
    ],
  },

  
cash: {
    botPrompt: 'How much money you currently have in your savings and cheque accounts?',
    varName: 'cash',
    input: textField(),
    answers: [
     { nextId: 'investment' },
    ],
  },


investment: {
    botPrompt: "Only include your investment properties here, don't worry about adding your own home",
    varName: 'cash',
    input: textField(),
    answers: [
     { nextId: 'shares' },
    ],
  },


  shares: {
    botPrompt:  "What is the value of your direct share portfolio.",
    varName: 'shares',
    input: textField(),
    answers: [
     { nextId: 'super' },
    ],
  },

  super: {
    botPrompt:  "What is your superannuation balance",
    varName: 'shares',
    input: textField(),
    answers: [
     { nextId: 'mortgage' },
    ],
  },

mortgage: {
    botPrompt:  "What is your current outstanding balance on all of your properties",
    varName: 'mortgage',
    input: textField(),
    answers: [
     { nextId: 'car' },
    ],
  },



   car: {
    botPrompt:  "How much are your car loans?",
    varName: 'car',
    input: textField(),
    answers: [
     { nextId: 'credit' },
    ],
  },


   credit: {
    botPrompt:  "How much is on your credit cards?",
    varName: 'credit',
    input: textField(),
    answers: [
     { nextId: 'loan' },
    ],
  },


   loan: {
    botPrompt:  "Any other loans that you haven't already noted",
    varName: 'loan',
    input: textField(),
    answers: [
     { nextId: 'cover' },
    ],
  },


  cover: {
    botPrompt: 'https://www.amfam.com/-/media/images/amfam/infographics/life/lifeinsurance-d.jpg',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'apply',
      },
    ],
  },


apply: {
    botPrompt: "Hey, big thanks! Would you like to apply for the cover?",
    varName: 'apply',
    input: selectField(['Later', 'Apply']),
    answers: [
     { nextId: 'noworries' },
    ],
  },



  noworries:{
    botPrompt: "No worries, have a great day",
    botPrompt: 'https://media.giphy.com/media/58F2iDcbRtFkNAw9tx/giphy.gif',
    type: RTypes.MEDIA, 
    varName: 'noworries',
    input: endOfConversation(),
    answers: [
     { nextId: 'noworries' },
    ],
  },



  cool: {
    botPrompt: 'Cool! 😎',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmm: {
    botPrompt: 'Hmmm... 🤔',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmkay: {
    botPrompt: 'Hmkay... 😐',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  question2: {
    botPrompt: 'Do you know what the <strong>airspeed velocity of an <em>unladen swallow</em></strong> is? 🐦',
    input: selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers: [
      {
        answer: 'African or European?',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: '10 m/s',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: "Don't ask me stupid questions.",
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'recursion', points: 2 }],
      },
    ],
  },
  rickAndMorty: {
    botPrompt: 'Hey, I like you <strong>@varName</strong>!',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'gottaGive',
      },
    ],
  },
  gottaGive: {
    botPrompt: 'For demonstrative purposes I gotta give you some kind of recommendation, so...',
    answers: [
      {
        nextId: 'rickAndMorty2',
      },
    ],
  },
  rickAndMorty2: {
    botPrompt: "My best recommendation is you should go and watch something <a href='www.adultswim.com/videos/rick-and-morty/'>fun</a>!",
    answers: [
      {
        nextId: 'rickAndMorty3',
      },
    ],
  },
  rickAndMorty3: {
    botPrompt: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
    finishConversation: true,
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  shroedingersCat: {
    botPrompt: "Don't you just feel like <a href='https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat'>Shroedinger's Cat</a> sometimes <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'shroedingersCat2',
      },
    ],
  },
  shroedingersCat2: {
    botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'shroedingersCat3',
      },
    ],
  },
  shroedingersCat3: {
    botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
    answers: [
      {
        nextId: 'check_out1',
        finishConversation: true,
      },
    ],
  },
  recursion: {
    botPrompt: 'https://media.giphy.com/media/l4HnKwiJJaJQB04Zq/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'recursion2',
      },
    ],
  },
  recursion2: {
    botPrompt: "You're really a no-nonsense kind of type, huh?",
    answers: [
      {
        nextId: 'recursion3',
      },
    ],
  },
  recursion3: {
    botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'recursion4',
      },
    ],
  },
  recursion4: {
    botPrompt: 'Recursion.',
    input: selectField(['What?', 'Yes', 'No', 'Stop It']),
    answers: [
      {
        answer: 'What?',
        nextId: 'recursion3',
      },
      {
        answer: 'Yes',
        nextId: 'recursion3',
      },
      {
        answer: 'No',
        nextId: 'recursion3',
      },
      {
        answer: 'Stop It',
        nextId: 'sorry',
      },
    ],
  },
  sorry: {
    botPrompt: 'https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif',
    type: RTypes.MEDIA,
    finishConversation: true,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  check_out1: {
    botPrompt: 'Check out how to build your own, fully customizable, web-based bot in here',
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
  check_out2: {
    botPrompt: 'https://github.com/IcaliaLabs/alpha',
    type: RTypes.LINK,
    input: endOfConversation(),
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
};


export default questions;
