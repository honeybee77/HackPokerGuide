module.exports = {      
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "/css/main.css"
      }
    ]
  ],
  theme: 'yuu',
  
    
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'HackPoker',
      description: 'Guide'
    },
    '/ru/': {
      lang: 'ru-Ru',
      title: 'Хак Покер',
      description: 'Описание'
    }
  },
    themeConfig: {
      yuu: {
        defaultDarkTheme: true,
        colorThemes: ['green']
      },
      locales: {
        '/': {
          // text for the language dropdown
          selectText: 'Languages',
          // label for this locale in the language dropdown
          label: 'English',
          // Aria Label for locale in the dropdown
          ariaLabel: 'Languages',
          // text for the edit-on-github link
          editLinkText: 'Edit this page on GitHub',
          // config for Service Worker
          serviceWorker: {
            updatePopup: {
              message: "New content is available.",
              buttonText: "Refresh"
            }
          },
          // algolia docsearch options for current locale
          algolia: {},
          nav: [
            { text: 'Guide', link: '/' },
            { text: 'Examples', link: '/examples/' },   
            { text: 'Videos', link: '/videos/' },             
          ],
          sidebar: {
            '/videos/' : [
              ['', 'Videos']
            ],
            '/examples/' : [
              ['', 'Examples']
            ],
            '/': [     
              { 
                title: 'Introduction',           
                collapsable: false, 
                path: '/introduction',                
              },
              { 
                title: 'Game Mode',           
                collapsable: false, 
                path: '/gamemode',                
              },
              { 
                title: 'Ranges',           
                collapsable: false, 
                sidebarDepth: 0,   
                children: [     
                  ['/ranges/abbreviations', 'Abbreviations'],   
                  ['/ranges/topbtm', 'Top, Bottom Ranges'],                                 
                  ['/ranges/not', 'Not'],
                  ['/ranges/diagonal', 'Diagonal'],                  
                  ['/ranges/suitselection', 'Suit Selection'],                                    
                  ['/ranges/syntax', 'Syntax'],   
                ]
              },
              {
                title: 'Hero Range',                       
                collapsable: false,    
                sidebarDepth: 0,    // optional, defaults to 1
                children: [            
                  ['/herorange/introduction', 'Introduction'],
                  ['/herorange/add', 'Add to Hero-Range'],
                  ['/herorange/subtract', 'Substract from Hero-Range'],      
                  ['/herorange/clear', 'Clear or Replace Hero-Range'],                   
                ]       
                      
              },    
              {
                title: 'Panes',     
                path: '/panes',     
                collapsable: false,                 
              },                                                 
              {
                title: 'Useful Commands',     
                path: '/usefulcommands',     
                collapsable: false,                 
              },                 
              {
                title: 'User Variables',   // required            
                collapsable: false, // optional, defaults to true
                sidebarDepth: 0,    // optional, defaults to 1
                children: [                              
                  ['/uservariables/introduction', 'Introduction'],
                  ['/uservariables/creating', 'Creating Variables'],
                  ['/uservariables/modifying', 'Modifying Variables'],
                  ['/uservariables/using', 'Using Variables'],
                  ['/uservariables/importexport', 'Import & Export'],
                  ['/uservariables/tables', 'Tables'],
                ]
              },              
              {
                title: 'Boards',          
                collapsable: false, 
                path: '/boards'                   
              },
              {
                title: 'Equity',      
                path: '/equity',    
                collapsable: false, 
                sidebarDepth: 0,                    
              },
              {
                title: 'Hand Strength Distribution',          
                collapsable: false, 
                path: '/hsd',
                sidebarDepth: 0,                    
              },
              {
                title: 'Notes',     
                path: '/notes',     
                collapsable: false,                 
              },                                 
            ]
          } 
        },
        '/ru/': {
          selectText: 'Языки',
          label: 'Русский',
          editLinkText: 'ГитХаб',
          serviceWorker: {
            updatePopup: {
              message: "Новый контент доступен.",
              buttonText: "Обновить"
            }
          },
          algolia: {},
          sidebar: {
            '/en/': [/* ... */],
            '/en/nested/': [/* ... */]
          }
        }
      }      
    }
  }
