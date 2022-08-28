export const http = {
  get: async (url, opt) => {
    console.log(`fetched ${url}, with options ${opt}`)
    return {
      json (): Record<string, any> {
        return {}
      },
      text () {
        return ''
      }
    }
  }
}
