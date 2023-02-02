import mongoose from 'mongoose';
const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch((err) => {
        console.error('failed to connect with Database')
        console.error(err);
    });
}
export default connectDB