
export const checkWord = async (req, res) => {
  try {
    const url = `${process.env.DICTIONARY_API_URL}/${req.query.word.toLowerCase()}?key=${process.env.DICTIONARY_API_KEY}`

    // Call external API
    const response = await fetch(url, {
      method: 'POST'
    });

    let data = await response.json();

    if (!(data[0].shortdef)) {
      // Send invalid word response if there is no shortdef
      return res.json({
        InvalidWord: true
      });
    }

    // console.log('API Response:', data[0].shortdef);

    // Send the data to the client
    return res.json(data[0].shortdef);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' })
  }
}
