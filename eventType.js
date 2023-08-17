const avro = require('avsc');

module.exports = avro.Type.forSchema({
    type: 'record',
    fields: [
        { name: 'category',
          type: {type: 'enum', symbols: ['Dog', 'Cat', 'Bird', 'Fish', 'Other']}
        },
        { 
          name: 'noise',
          type: 'string'
        }
    ]
});
