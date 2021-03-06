const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  content: {
    type: String,
    required: true,
    minlength: 1
  },
  category: {
    type: String,
  },
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)