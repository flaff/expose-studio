const supportedLanguages = [
  {id: 'pl', title: 'Polski', isDefault: true},
  {id: 'en', title: 'English'},
  {id: 'de', title: 'Deutsch'}
]

export const createLocaleType = (name, baseType) => ({
  name,
  type: 'object',
  fieldsets: [
    {
      title: 'Tłumaczenia',
      name: 'translations',
      options: {collapsible: true}
    }
  ],
  fields: supportedLanguages.map(language => ({
    title: language.title,
    name: language.id,
    type: baseType,
    fieldset: language.isDefault ? null : 'translations'
  }))
})

export const defaultLocale = supportedLanguages.find(locale => locale.isDefault).id
export const slugLocale = 'en'
