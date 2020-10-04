import mongo from './mongo'

let userDb = mongo.getUserDb();

const Utility = {

    async login(username){
        if (!username) return false
        let user = await userDb.collection('user').findOneAndUpdate({'username': username}, {$set : {'last_update': new Date()}})
        if (user){
            return user
        }
        else{
            let user = await userDb.collection('userProfile').insertOne({
                "username": username,
                "shelf": [],
                "last_update": new Date()
            })

            return user

        }
    },

    async addBook(user_id,book){
        if (!book) return false
        let user = await userDb.collection('userProfile').findOneAndUpdate({'user_id': user_id}, {$push: {shelf: book}})
        return user
    },

    async delBook(user_id, isbn){
        if (!isbn) return false
        let user = await userDb.collection('user').findOneAndUpdate({'user_id': user_id}, {$pull: {shelf: {"isbn": isbn}}})
        return user
    }
}

export default Utility