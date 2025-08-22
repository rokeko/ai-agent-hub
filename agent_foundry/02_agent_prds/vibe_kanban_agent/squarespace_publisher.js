const axios = require('axios');

// TODO: Implement OAuth 2.0 for Squarespace API authentication
// This will involve a more complex setup with redirect URLs and authorization codes.
// For now, we will keep the API key as a placeholder.
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