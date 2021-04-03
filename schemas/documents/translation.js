import {defaultLocale} from '../../utils/locale'

export default {
  name: 'translation',
  type: 'document',
  title: 'Translation',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Opis tłumaczenia',
      description: 'Krótki opis gdzie znajduje się tłumaczenie na stronie'
    },
    {
      name: 'translation',
      type: 'localeString',
      title: 'Tłumaczenie'
    },
    {
      name: 'key',
      type: 'string',
      title: 'Klucz tłumaczenia',
      description: '⚠️ Zmiana tej wartości może spowodować niedopasowanie tłumaczenia do interfejsu'
    },
    {
      name: 'namespace',
      type: 'string',
      title: 'Grupa tłumaczenia',
      description: '⚠️ Zmiana tej wartości może spowodować niedopasowanie tłumaczenia do interfejsu'
    }
  ],
  preview: {
    select: {
      title: `translation.${defaultLocale}`,
      subtitle: 'description'
    }
  }
}
