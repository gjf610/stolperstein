import { isHttp } from "./utils";

export function fetchWebsite(url: string) {
  if (isHttp(url)) {
    fetch(url).then(() => {

    })
  }
}

