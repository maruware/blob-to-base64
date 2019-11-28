export const fileToBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = e => {
      if (e) {
        reject(e)
      } else {
        resolve(e.target.result as string)
      }
    }
    fr.readAsDataURL(file)
  })
}
