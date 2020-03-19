import jelly from "./images/movingbg-pic.png";
import kalico from "./images/kalico-pic.png";
import drum from "./images/drum-pic.png";
import tin from "./images/tin-pic.png";

const portfolios = [
    {
      key: 1,
      title: "Company Website",
      img: jelly,
      link: "https://affectionate-agnesi-ce7687.netlify.com/",
      gif:"https://github.com/samjsolomon/Gif-background-website/blob/master/jellyfish-background.gif?raw=true",
      content:
        "A website that showcases a large picture background and nav bar."
    },
    {
      key: 2,
      title: "Kalico Studios",
      img: kalico,
      link: 'https://www.thekalico.com/',
      gif: "https://github.com/samjsolomon/Earring-Website/blob/master/Kalico.gif?raw=true",
      content:
        "A website for a small, local earring company."
    },
    {
      key: 3,
      title: "Interactive Drum App",
      img: drum,
      link: "https://samjsolomon.github.io/Drum-Kit/",
      gif: "https://github.com/samjsolomon/Drum-Kit/blob/master/gif.gif?raw=true",
      content:
        "An app where you can play the drums by clicking or using the keyboard."
    },
    {
      key: 4,
      title: "Tindog",
      img: tin,
      link: "https://samjsolomon.github.io/Tindog/",
      gif: "https://github.com/samjsolomon/Tindog/blob/master/tindog.gif?raw=true",
      content:
        "A fake website showing off a company product. Tindog: the tinder for dogs."
    }
   
  ];

  export default portfolios; 