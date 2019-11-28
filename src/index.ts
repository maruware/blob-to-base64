export const dataUrlToBase64 = (dataUrl: string) => {
  return dataUrl.replace(/data:.+;base64,/, '')
}

export const fileToDataUrl = (file: File) => {
  return new Promise<string>(resolve => {
    const fr = new FileReader()
    fr.onload = e => {
      const dataUrl = e.target.result as string
      resolve(dataUrl)
    }
    fr.readAsDataURL(file)
  })
}

export const fileToBase64 = async (file: File) => {
  const dataUrl = await fileToDataUrl(file)
  return dataUrlToBase64(dataUrl)
}
