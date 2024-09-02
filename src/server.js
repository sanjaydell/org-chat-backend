const express = require('express');
const connectDB = require('./database');
const userRoutes = require('./routes/UserRoutes');
const messageRoutes = require('./routes/MessageRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
