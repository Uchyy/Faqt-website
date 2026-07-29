export function splitTagline(tagline: string) {
  const words = tagline.trim().split(/\s+/);

  if (words.length < 2) {
    return {
      firstLine: tagline,
      secondLine: "",
    };
  }

  let bestIndex = 1;
  let smallestDifference = Infinity;

  for (let i = 1; i < words.length; i++) {
    const first = words.slice(0, i).join(" ");
    const second = words.slice(i).join(" ");

    const difference = Math.abs(first.length - second.length);

    if (difference < smallestDifference) {
      smallestDifference = difference;
      bestIndex = i;
    }
  }

  return {
    firstLine: words.slice(0, bestIndex).join(" "),
    secondLine: words.slice(bestIndex).join(" "),
  };
}