const app = require('./app');

const port = 14315;

    app.listen (port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
