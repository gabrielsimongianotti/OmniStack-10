const express = require('express')
const app = express();

app.get('/', (request, response) => {
return response.json({Message:"tomar no cu"})
})

app.listen(3000)