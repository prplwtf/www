// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts'],
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: [
        'cyrillic-ext',
        'cyrillic',
        'greek-ext',
        'greek',
        'vietnamese',
        'latin-ext',
        'latin',
      ],
      fallbaacks: {
        'serif': ['Times New Roman'],
        'sans-serif': ['Arial'],
        'monospace': ['Courier New'],
        'cursive': [],
        'fantasy': [],
        'system-ui': [
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
        ],
        'ui-serif': ['Times New Roman'],
        'ui-sans-serif': ['Arial'],
        'ui-monospace': ['Courier New'],
        'ui-rounded': [],
        'emoji': [],
        'math': [],
        'fangsong': [],
      }
    }
  }
})
