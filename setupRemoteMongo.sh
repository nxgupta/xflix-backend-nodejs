# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb+srv://xflix:xflix@xflix.45eaqqu.mongodb.net/xflix?retryWrites=true&w=majority" --drop --collection videos --file data/xflix_data.json