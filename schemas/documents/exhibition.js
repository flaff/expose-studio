export default {
  name: 'exhibition',
  type: 'document',
  title: 'Exhibition',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Nazwa wystawy'
    },
    {
      name: 'place',
      type: 'localeString',
      title: 'Miejsce wystawy'
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Opis wystawy'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Data wystawy'
    }
  ]
}
