function parenthesesAreBalanced(string) {
  var parentheses = "[]{}()",
    stack = [],
    index, character, bracePosition;

  for(index = 0; character = string[index]; index++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }

    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
