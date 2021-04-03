export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'Żeby nanieść zmiany na stronę internetową, wymagana jest przebudowa.',
              sites: [
                {
                  buildHookId: '5eca56422396fef5cec2381f',
                  title: 'Portfolio',
                  name: 'cziomer',
                  apiId: 'f0162e35-d0c5-4008-81d4-cb4db15f3073'
                }
                // {
                //   buildHookId: '5eca5642c16d841b2250dcf1',
                //   title: 'Studio',
                //   name: 'cziomer-studio',
                //   apiId: 'e6d9a010-24aa-48a9-810b-4111ea8d52be'
                // }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flaff/sanity-gatsby-portfolio-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://cziomer.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
