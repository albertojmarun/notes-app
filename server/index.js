import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import notesRoutes from './routes/notes.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/notes', notesRoutes);

const CONNECTION_URL = "mongodb+srv://albertojmarun:caracas@cluster0.6k3or.mongodb.net/NOTES?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then( () => {
     app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch( (err) => {
     console.log(err.message);
});
