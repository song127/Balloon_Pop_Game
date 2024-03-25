import { Fragment } from "react";

export function strEncode(str: string) {
  return btoa(str);
}

export function strDecode(str: string) {
  return atob(str);
}

export function strToEnterComponents(str: string) {
  return str.split("\n").map((line, i) => (
    <Fragment key={i}>
      {line}
      <br />
    </Fragment>
  ));
}
