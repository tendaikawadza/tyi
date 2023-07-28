export function parseRoute(route: string): string {
  return `${route.split(" ").join("-").toLowerCase()}-`;
}
