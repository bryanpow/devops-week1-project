import express, { json } from 'express';
import cors from 'cors';


const app = express(); 
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from server running on EKS' });
});

app.get('/health', (req, res) => {
    res.status(200).send('OK')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

