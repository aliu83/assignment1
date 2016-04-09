var mongoose = require('mongoose');

var BillionaireSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'billionaire_counts'
});

mongoose.model('Billionaire', BillionaireSchema);