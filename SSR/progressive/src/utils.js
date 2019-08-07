export const checkServer = () => {
  return typeof window === undefined || !process.browser
}
