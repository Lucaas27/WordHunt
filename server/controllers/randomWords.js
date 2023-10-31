
export const getRandomWords = async (req, res) => {
  try {
    const response = await fetch(process.env.API_URL, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': process.env.API_HOST
      }
    })
    const data = await response.json()
    return res.json(data)
  } catch (error) {
    return console.error(error)
  }

}
