const axios = require('axios');

// TODO: Replace with your Squarespace API key and blog page ID
const SSquarespaceApiKey = 'YOUR_SQUARESPACE_API_KEY';
const SSquarespacePageId = 'YOUR_SQUARESPACE_PAGE_ID';

async function postToSquarespace(title, content) {
  try {
    const response = await axios.post(
      `https://api.squarespace.com/1.0/sites/${SSquarespacePageId}/blog/posts`,
      {
        title,
        body: content,
      },
      {
        headers: {
          Authorization: `Bearer ${SSquarespaceApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Successfully posted to Squarespace:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting to Squarespace:', error.response.data);
    return null;
  }
}

module.exports = { postToSquarespace };
