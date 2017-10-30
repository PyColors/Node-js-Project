exports.schema = new mongoose.Schema({
    name: { type: String, maxlenght: 50 },
    lastname: { type: String, maxlenght: 50 },
    age: { type: Number, min: 18, max: 104 },
    job: String,
    tel: { type: String, maxlenght: 10 }
    }
)