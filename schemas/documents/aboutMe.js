export default {
  name: 'aboutMe',
  type: 'document',
  title: 'About Me',
  fields: [
    {
      name: 'photo',
      title: 'Zdjęcie profilowe',
      type: 'figure',
      description: 'Wyświetlane u góry strony głównej'
    },
    {
      name: 'fullName',
      type: 'string',
      title: 'Imię i nazwisko',
      description: 'Wyświetlane pod zdjęciem profilowym na stronie głównej'
    },
    {
      name: 'fewWordsAboutMe',
      type: 'localeString',
      title: 'Parę słów o mnie',
      description: 'Krótki tekst pod imieniem i nazwiskiem na stronie głównej'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email kontaktowy',
      description: 'Wyświetlane pod imieniem i nazwiskiem na stronie głównej'
    },
    {
      name: 'phone',
      type: 'number',
      title: 'Numer telefonu',
      description: 'Wyświetlane pod imieniem i nazwiskiem na stronie głównej'
    },
    {
      name: 'shortDescription',
      type: 'localeText',
      title: 'Wstęp o mnie',
      description: 'Wyświetlane w sekcji "O mnie" na stronie głównej'
    }
  ]
}
