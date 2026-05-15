console.log("Prince Tyagi Hacker Website Loaded Successfully");

const text = "ACCESS GRANTED";
let i = 0;

function typingEffect() {
  if (i < text.length) {
    document.title += text.charAt(i);
    i++;
    setTimeout(typingEffect, 200);
  }
}

typingEffect();
