
export function isHttp(url: string): boolean {
  const pattern = /^http:\/\/www\./;
  return pattern.test(url)
}

