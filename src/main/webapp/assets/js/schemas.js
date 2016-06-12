'use strict'

module.exports = function (Schema) {
  return {
    address: new Schema({
      properties: {
        id: { type: 'string' },
        name: { type: 'string' }
      }
    }),

    inquiry: new Schema({
      properties: {
        id: { type: 'string' },
        // Only the DataStore component cares about the "indexed" attribute
        user_id: { type: 'string', indexed: true },
        title: { type: 'string' },
        content: { type: 'string' }
      }
    }),

    work: new Schema({
      properties: {
        id: { type: 'string' },
        // Only the DataStore component cares about the "indexed" attribute
        post_id: { type: 'string', indexed: true },
        // Only the DataStore component cares about the "indexed" attribute
        user_id: { type: 'string', indexed: true },
        content: { type: 'string' }
      }
    })
  }
