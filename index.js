
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  var current = katzDeliLine.shift();
  if (current) {
    return `Currently serving ${current}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line) {
    return `The line is currently: 1. Ada, 2. Grace"
  }
}
