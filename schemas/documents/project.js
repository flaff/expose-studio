import {defaultLocale, slugLocale} from '../../utils/locale'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł projektu',
      description: 'Nazwa projektu, która grupuje zawarte w niej dzieła sztuki',
      type: 'localeString'
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
      title: 'Opis projektu',
      type: 'localeText'
    },
    {
      name: 'startedAt',
      title: 'Data rozpoczęcia projektu',
      type: 'date'
    },
    {
      name: 'endedAt',
      title: 'Data zakończenia projektu',
      type: 'date'
    },
    {
      name: 'artPieces',
      title: 'Dzieła sztuki',
      description: 'Można w poniższej liście przypisać każde OPUBLIKOWANE dzieło (w sekcji Dzieła) do tego projektu. Przypisuje się przyciskiem "Add", usuwa przyciskiem "X" i zmienia kolejność przeciągając za "≡"',
      type: 'array',
      of: [{type: 'reference', to: {type: 'artPiece'}}]
    }
  ],
  preview: {
    select: {
      title: `title.${defaultLocale}`,
      publishedAt: 'publishedAt',
      slug: 'slug'
    }
  }
}
