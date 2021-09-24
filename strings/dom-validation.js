function validateDOM(string) {
  let stack = [];
  let currentElement = '';
  let elementStarted = false;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (elementStarted) {
      currentElement = currentElement.concat(char);
    }

    if (char === '<') {
      elementStarted = true;
    }

    if (char === '>') {
      currentElement = currentElement.slice(0, -1);
      if (stack.length === 0 || currentElement[0] !== '/') {
        stack.push(currentElement);
      } else {
        currentElement = currentElement.slice(1);
        const lastElm = stack.pop();
        if (lastElm !== currentElement) {
          return lastElm;
        }
      }
      currentElement = '';
      elementStarted = false;
    }
  }
  if (stack.length === 0) return true;
  else return stack.pop();
}

const output = validateDOM('<p>hello</p><div></div>');
console.log(output);
