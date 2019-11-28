export const dataUrlToBase64 = (dataUrl: string) => {
  return dataUrl.replace(/data:.+;base64,/, '')
}

export const blobToDataUrl = (blob: Blob) => {
  return new Promise<string>(resolve => {
    const fr = new FileReader()
    fr.onload = e => {
      const dataUrl = e.target.result as string
      resolve(dataUrl)
    }
    fr.readAsDataURL(blob)
  })
}

export const blobToBase64 = async (blob: Blob) => {
  const dataUrl = await blobToDataUrl(blob)
  return dataUrlToBase64(dataUrl)
}
