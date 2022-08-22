function scuberGreetingForFeet(feet) {

  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
}


function ternaryCheckCity(checkCity) {
  if (checkCity === "NYC") {
    return "Ok, sounds good.";
  } else if (checkCity != "NYC") {
    return "No go."
  }
}

function switchOnCharmFromTip(tip) {
  
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}