import {defaultLocale, slugLocale} from '../../utils/locale'

export default {
  name: 'artPiece',
  type: 'document',
  title: 'Art Piece',
  fields: [
    {
      name: 'title',
      type: 'localeString',
      title: 'Tytuł dzieła'
    },
    {
      name: 'slug',
      title: 'Nazwa w linku',
      type: 'slug',
      description: 'Czytelna nazwa, która będzie zawarta w linku. Można wygenerować za pomocą przycisku "Generate" z angielskiego tytułu',
      options: {
        source: `title.${slugLocale}`,
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Opis dzieła'
    },
    {
      name: 'createdAt',
      title: 'Data utworzenia dzieła',
      type: 'date'
    },
    {
      name: 'image',
      title: 'Obraz',
      type: 'figure'
    },
    {
      name: 'artTechniques',
      title: 'Techniki użyte w dziele',
      type: 'array',
      of: [{type: 'reference', to: {type: 'artTechnique'}}]
    }
  ],
  preview: {
    select: {
      title: `title.${defaultLocale}`,
      media: 'image'
    }
  }
}
