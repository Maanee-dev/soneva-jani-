const https = require('https');

function get(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function run() {
  const visa = await get('https://simpleicons.org/icons/visa.svg');
  const mastercard = await get('https://simpleicons.org/icons/mastercard.svg');
  const amex = await get('https://simpleicons.org/icons/americanexpress.svg');
  const swift = await get('https://simpleicons.org/icons/swift.svg');
  
  console.log('VISA:', visa);
  console.log('MASTERCARD:', mastercard);
  console.log('AMEX:', amex);
  console.log('SWIFT:', swift);
}
run();
