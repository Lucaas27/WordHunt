
export const getRandomWords = async (req, res) => {
  try {
    // Call external API
    const response = await fetch(process.env.WORDS_API_URL)
    const data = await response.json()

    // If response = 200. return the data as it is
    if (response.status === 200) {
      // Send the data to the client
      return res.json(data);
    } else {
      return res.status(response.status).json({ error: 'External API error' });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
