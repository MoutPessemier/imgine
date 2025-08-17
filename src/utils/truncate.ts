export function truncate(text: string, maxLength: number = 225): string {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}
