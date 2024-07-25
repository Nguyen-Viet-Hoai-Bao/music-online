import admin from 'firebase-admin';

const serviceAccount = {
  type: "service_account",
  project_id: "musiconlineupload",
  private_key_id: "2e457bcf00340287b77c537082587a20eda179e9",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcGnBThBqkRnDs\nY+NZW1jskNp/AtrtSZCXZofyOBll0++NbMfmrQPxIrNO5WdWuKNz/StfAjCXNMVE\nlHePLjpryKZIkFtN6qceMPZGyjiAsa5Ggtyw4/Hpg82fvrYVhmEPWNaPdOGFtRfv\n+APVeREDOwLhHhcBgrfUn95Lwqkj1ldkbwVRtuHV3S11/i8h4kYF6+LkziZsfMKb\ncOXdfaNVXJkisBCGynCgm9gcP3LiocodJ+55fNvnhRnv3xc6TzTL4o+4z4Cpb9T8\nRhnVuvUZb8z55S0dOmhagZHnM9SGPGJDDjCxXUK2H453PcOoHH4fQjTytYGE49bw\nbS7+JDozAgMBAAECggEAO6WIjQjZqzJ1PIYQXVjfmgjhTA25vFhTJN6bDGzuG3AH\nRRkvKs+qRW22aOuT+Fl1r0Cp3VQ3X9dclw9Jvc5yqTOSggCSuqtyLsGToMntHBOI\nXU3saLS4fzsLC0JyTbg6hwQxe8Az2gSvwFQalut7Gipmt8DpFn0to9NwO6+GNHg9\nwRo+k3QYVvdHt9bNQNIvaqhwscahtq6EpdC5JPXaPccpDCowbiv3oyAYHmmZ9xKU\nLbZHhAG1g/SysNRfKhthYDUDSP2tdCNIE3erlg/dc1nl03ul1lIL/S81yX26duRg\nOi3B07pmLQLI05u6ZkEBYCGu2zS2JCJDcO/d4NF5dQKBgQDLy6VwyHD43FoA0zE/\ni0ciQun0e8vVMo4EDQv/V+Z7kW00SF9kZDLdthoTIlrQBzn71BQqeTH7wEbABSbP\no7/kgVuoWS993c5JUth1LCB83+SJjy3QwRMamj0/lYLLNFwtKr9Vvp0sXnta5Xqe\n6YdEg3X4QOqzLr+G7m/8M08elQKBgQDEF0RKYFfrh6BqWzQN/YbpN0+xu/se0YW9\ngUTjMT7Q6g7NBvokyesnezTYAEpcllfmvGij13g5iBQ7GWmzTFXGA3Z0fLHR68ey\nGl1czB84fLINhbNAwhQM8zN6uos8uaA4YY+x3K5+knmwzXbWuPTDVkKZdZvJZ8xJ\nT0RTuANrpwKBgQCHZWwsCy9rV1KAm89rbUg8TgKLiLf6lBTgQh7HbYnWbN8FzlN6\nKkvVG0glkDyPW029rsAbG9wGa09WAdYwO5Wg5gSUS3SPBg8ojd77se5/qGx4q+R/\nfdcIZJLurJFyGf5nj7AA8pwPv1HrKO0XqQVSkpiM7+w+UX+z0LQb9abKJQKBgGwb\n98aZv19XcxWwGs7rzAmgOQvge97N3VJRhs1LRTqhEG/xPNAzkrY9szCzWEwbh3Lq\nxTYvgVUWtTCwHhqAJ3n4RsKKTO9TctG6v2Z+E2htNy1FXUKCvdM18lfjqQhdvvvW\nrgZ9iKa30uerH63aYvefAzDgKnesBnEUhrMxbJFZAoGAPqdOnJGVA3py3jSeQWwt\nIzXgmF8kJEwW1es0EFoeDc/qPM8GrzZO/fb0dh9C+rgcV/kI42gOji0kIV6NjFL+\nBigLITVhO7gW4cKylatXbsDCRYk6J8Y+PaQoYdHTI3Gugxm4UyGpT4jd0a52w9ZP\nXVLZ2RJgsj1VGo53g1ZvZxM=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-l6tqc@musiconlineupload.iam.gserviceaccount.com",
  client_id: "114631250007687229272",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l6tqc%40musiconlineupload.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  storageBucket: 'musiconlineupload.appspot.com',
});

const bucket = admin.storage().bucket();

export { bucket };
