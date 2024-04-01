const accessToken = '05502e0e-7415-425e-86e2-b22b3e3a50e7';
const query = 'rohini sector';

const apiUrl = 'https://atlas.mappls.com/api/places/search/json';
const requestUrl = `${apiUrl}?query=${encodeURIComponent(query)}`;

fetch(requestUrl, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
})
.then(data => {
  console.log('Autosuggest API Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
