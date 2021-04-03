import {defaultLocale} from '../../utils/locale'

export default {
  name: 'achievement',
  type: 'document',
  title: 'Achievement',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Nazwa osiągnięcia'
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Opis osiągniecia'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Data osiągnięcia'
    }
  ],
  preview: {
    select: {
      title: `name.${defaultLocale}`,
      subtitle: `description.${defaultLocale}`
    }
  }
}
