
export const fetchWord = async () => {
  try {
    const response = await fetch('/api/words')
    const data = await response.json()
    return data[0].toUpperCase()
  } catch (error) {
    console.log(error)
  }
}