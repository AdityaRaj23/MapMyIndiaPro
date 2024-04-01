const tokenEndpoint = 'https://outpost.mappls.com/api/security/oauth/token';
const clientId = '96dHZVzsAuuonulMjFICmeGLEsycfl0qKGISxpBoea1Kh3LlJKx73su-on3B6QaVZpJL685mqkjhSlK0SkQn4g==';
const clientSecret = 'lrFxI-iSEg_k9haXNps8mbSff1ZLwEdrg-GyM80eWPjj1CGz8-nD4BiPQYRydG6DTt8cVo_dCpWFYyXftGzZQg0y_8ve1a_t';

const requestBody = new URLSearchParams();
requestBody.append('grant_type', 'client_credentials');
requestBody.append('client_id', clientId);
requestBody.append('client_secret', clientSecret);

fetch(tokenEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: requestBody,
})
.then(response => {
  if (!response.ok) {
    throw new Error('Failed to fetch token');
  }
  return response.json();
})
.then(data => {
  const accessToken = data.access_token;
  const tokenType = data.token_type;
  
  const authorizationHeader = `${tokenType} ${accessToken}`;
  console.log('Authorization Header:', authorizationHeader);
})
.catch(error => {
  console.error('Error:', error);
});
