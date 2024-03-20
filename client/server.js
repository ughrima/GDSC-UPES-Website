const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
  }))

app.get('/api/hashnode', async (req, res) => {
  try {
    const response = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '1eecef09-f394-48a2-81ae-453f34b41396',
      },
      body: JSON.stringify({
        query: `{
          user(username: "gdscupes") {
            posts(pageSize: 4, page: 1) {
              edges {
                node {
                  author {
                    name
                  }
                  title
                  publishedAt
                  content {
                    text
                  }
                }
              }
            }
          }
        }`,
      }),
    });

    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Hashnode:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});