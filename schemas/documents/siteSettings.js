export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tytuł strony'
    },
    {
      name: 'description',
      type: 'localeText',
      title: 'Opis strony',
      description: 'Wyświetlany np. w Google i Facebooku'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Słowa kluczowe',
      description: 'Pozwala, żeby strona była możliwa do wyszukania przez np. Google',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'contactFormUrl',
      type: 'string',
      title: 'Adres do przesyłania danych z formularza kontaktowego',
      description: 'Jeszcze nieużywane'
    }
  ]
}
