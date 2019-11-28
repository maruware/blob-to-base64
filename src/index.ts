export const fileToBase64 = (file: File) => {
  return new Promise<string>(resolve => {
    const fr = new FileReader()
    fr.onload = e => {
      resolve(e.target.result as string)
    }
    fr.readAsDataURL(file)
  })
}
