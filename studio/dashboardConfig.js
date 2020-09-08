export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f579c89a73c473807ac3bfe',
                  title: 'Sanity Studio',
                  name: 'knoedelwirtschaft-nextjs-sanity-studio',
                  apiId: '1a0cb415-25ad-490b-b2a1-a29b1e67a000'
                },
                {
                  buildHookId: '5f579c8acf09622b24c1a719',
                  title: 'Landing pages Website',
                  name: 'knoedelwirtschaft-nextjs-sanity',
                  apiId: '6fb7582c-225a-4ac0-8b32-73a991dea868'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/InEchtderKnecht/knoedelwirtschaft-nextjs-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://knoedelwirtschaft-nextjs-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
