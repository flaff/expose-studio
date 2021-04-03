import {defaultLocale, slugLocale} from '../../utils/locale'

export default {
  name: 'artTechnique',
  type: 'document',
  title: 'Art Technique',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name'
    },
    {
      name: 'slug',
      title: 'Nazwa w linku',
      type: 'slug',
      description: 'Czytelna nazwa, która będzie zawarta w linku. Można wygenerować za pomocą przycisku "Generate" z angielskiego tytułu',
      options: {
        source: `name.${slugLocale}`,
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Opis techniki'
    }
  ],
  preview: {
    select: {
      title: `name.${defaultLocale}`,
      subtitle: `description.${defaultLocale}`
    }
  }
}
