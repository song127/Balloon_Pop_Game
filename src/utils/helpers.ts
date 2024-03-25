export function strEncode(str: string) {
  return btoa(str);
}

export function strDecode(str: string) {
  return atob(str);
}