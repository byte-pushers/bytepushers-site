'use strict'

module.exports = function (Schema) {
  return {
    address: new Schema({
      properties: {
        id: { type: 'string' },
        city: { type: 'string' },
        country: { type: 'string' },
        state: { type: 'string' },
        street: { type: 'string' },
        zip: { type: 'string' }
      }
    }),

    inquiry: new Schema({
      properties: {
        id: { type: 'string' },
        // Only the DataStore component cares about the "indexed" attribute
        address_id: { type: 'string', indexed: true },
        company: { type: 'string' },
        description: { type: 'string' },
        email: { type: 'string' },
        funded: { type: 'boolean' },
        nameFirst: { type: 'string' },
        nameLast: { type: 'string' },
        phoneNumber: { type: 'string' },
        projectSize: { type: 'string' },
        projectType: { type: 'string' }
      }
    }),

    work: new Schema({
      properties: { id, date, description, link, name, photo, revenue, technologies
        id: { type: 'string' },
        date: { type: 'date' },
        description: { type: 'string' },
        link: { type: 'string' },
        name: { type: 'string' },
        photo: { type: 'string' },
        revenue: { type: 'string' },
        technologies: { type: 'array' }
      }
    })
  }
