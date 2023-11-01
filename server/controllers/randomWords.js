
export const getRandomWords = async (req, res) => {
  try {
    const response = await fetch(process.env.WORDS_API_URL)
    const data = await response.json()
    return res.json(data)
  } catch (error) {
    return console.error(error)
  }
}
