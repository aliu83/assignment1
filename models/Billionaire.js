var mongoose = require('mongoose');

var BillionaireSchema = new mongoose.Schema({
  _id: String,
  NAME: String,
  NET_WORTH: Number,
},
{
    collection: 'billionaire_counts'
});

mongoose.model('Billionaire', BillionaireSchema);