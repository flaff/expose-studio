export default {
  name: 'figure',
  title: 'Obraz',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      type: 'localeString',
      title: 'Alternatywny tekst',
      description: 'Opisuje dany obrazek. Bardzo istotne dla wyszukiwarek i czytników ekranu',
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
