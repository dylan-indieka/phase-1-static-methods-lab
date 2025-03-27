class Formatter {
  //add static methods here

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return sentence
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return this.capitalize(word);
        }
        return word;
      })
      .join(' ');
  }
}