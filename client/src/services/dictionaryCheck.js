
export const checkDictionary = async (word) => {
  try {
    const response = await fetch(`/api/check/?word=${word.toLowerCase()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}