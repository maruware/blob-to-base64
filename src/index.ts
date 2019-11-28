export const fileToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader()
    fr.onload = e => {
      if (e) {
        reject(e)
      } else {
        resolve(e.target.result)
      }
    }
    fr.readAsDataURL(file)
  })
}
