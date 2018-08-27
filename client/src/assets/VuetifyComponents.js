/*
  Components from Vuetify.js:
  - PARENT -> external, componegg, egglement
  - CHILDREN -> (none)
 */

const vuetifyComponents = [
// --- VTEXTFIELD --- //

  {
    'displayName': 'VTextfield',
    'iconName': 'vTextfield',
    'name': 'vTextfieldComp',
    'type': 'v-text-field',
    'dependencies': [
      {
        'name': 'vuetify',
        'version': '^1.1.11',
        'imports': [
        ['Vue', 'vue'],
        ['Vuetify', 'vuetify'],
          'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
        ]
      }
    ],
    'height': 50,
    'width': 200,
    'attrs': {'label': 'Label'},
    'test': 'test'
  },

// --- VAUTOCOMPLETE --- //
  {
    'displayName': 'VAutoComplete',
    'iconName': 'vAutoComplete',
    'name': 'vAutoComplete',
    'type': 'v-autocomplete',
    'dependencies': [
      {
        'name': 'vuetify',
        'version': '^1.1.11',
        'imports': [
        ['Vue', 'vue'],
        ['Vuetify', 'vuetify'],
          'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 50,
    'width': 200,
    'attrs': {
      'label': 'Label'
    },
    'styles': {},
    'classes': {},
    'children': []
  },

// --- VCOMBOBOX --- //
  {
    'displayName': 'VComboBox',
    'iconName': 'VComboBox',
    'name': 'VComboBox',
    'type': 'v-combobox',
    'dependencies': [
      {
        'name': 'vuetify',
        'version': '^1.1.11',
        'imports': [
        ['Vue', 'vue'],
        ['Vuetify', 'vuetify'],
          'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'height': 50,
    'width': 200,
    'attrs': {
      'label': 'Label'
    },
    'styles': {},
    'classes': {},
    'children': []
  },

// --- VBTN --- //
  {
    'displayName': 'VBtn',
    'iconName': 'v-btn--icon',
    'name': 'vButtonComp',
    'type': 'v-btn',
    'dependencies': [
      {
        'name': 'vuetify',
        'version': '^1.1.11',
        'imports': [
        ['Vue', 'vue'],
        ['Vuetify', 'vuetify'],
          'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'text': 'vBtn',
    'height': 36,
    'width': 120,
    'minHeight': 32,
    'minWidth': 64,
    'attrs': {
      'baseline': false,
      'raised': true,
      'unelevated': false,
      'outlined': false,
      'dense': false,
      'disabled': false
    },
    'styles': {},
    'classes': {},
    'children': []
  },

// --- VTEXTAREA --- //
  {
    'displayName': 'VTextArea',
    'iconName': 'v-textarea--icon',
    'name': 'VTextArea',
    'type': 'v-textarea',
    'dependencies': [
      {
        'name': 'vuetify',
        'version': '^1.1.11',
        'imports': [
        ['Vu   e', 'vue'],
        ['Vuetify', 'vuetify'],
          'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
        ]
      }
    ],
    'external': true,
    'componegg': true,
    'egglement': true,
    'text': 'vBtn',
    'height': 100,
    'width': 300,
    'minHeight': 10,
    'minWidth': 50,
    'attrs': {
      'label': 'Default style',
      'value': 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
      'hint': 'Hint text'
    },
    'styles': {},
    'classes': {},
    'children': []
  }

]

export default vuetifyComponents

// // --- VTEXTFIELD --- //
// // {
// //   'displayName': 'VTextfield',
// //   'iconName': 'vTextfield',
// //   'name': 'vTextfieldComp',
// //   'type': 'v-text-field',
// //   'dependencies': [
// //     {
// //       'name': 'vuetify',
// //       'version': '^1.1.11',
// //       'imports': [
// //         ['Vue', 'vue'],
// //         ['Vuetify', 'vuetify'],
// //         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
// //       ]
// //     }
// //   ],
// //   'height': 50,
// //   'width': 200,
// //   'attrs': {
// //     'label': 'Label'
// //   },
// //   'styles': {},
// //   'classes': {},
// //   'children': []
// // },
//
// // --- 'DISPLAYNAME' --- //
// // {
// //   'displayName': 'VTextfield',
// //   'iconName': 'vTextfield',
// //   'name': 'vTextfieldComp',
// //   'type': 'v-text-field',
// //   'dependencies': [
// //     {
// //       'name': 'vuetify',
// //       'version': '^1.1.11',
// //       'imports': [
// //         ['Vue', 'vue'],
// //         ['Vuetify', 'vuetify'],
// //         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
// //       ]
// //     }
// //   ],
// //   'height': 50,
// //   'width': 200,
// //   'attrs': {'label': 'Label'},
// //   'test': 'test'
// // },
//
// // --- VAUTOCOMPLETE --- //
// {
//   'displayName': 'VAutoComplete',
//   'iconName': 'vAutoComplete',
//   'name': 'vAutoComplete',
//   'type': 'v-autocomplete',
//   'dependencies': [
//     {
//       'name': 'vuetify',
//       'version': '^1.1.11',
//       'imports': [
//         ['Vue', 'vue'],
//         ['Vuetify', 'vuetify'],
//         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
//       ]
//     }
//   ],
//   'external': true,
//   'componegg': true,
//   'egglement': true,
//   'height': 50,
//   'width': 200,
//   'attrs': {
//     'label': 'Label'
//   },
//   'styles': {},
//   'classes': {},
//   'children': []
// },
//
// // --- VCOMBOBOX --- //
// {
//   'displayName': 'VComboBox',
//   'iconName': 'VComboBox',
//   'name': 'VComboBox',
//   'type': 'v-combobox',
//   'dependencies': [
//     {
//       'name': 'vuetify',
//       'version': '^1.1.11',
//       'imports': [
//         ['Vue', 'vue'],
//         ['Vuetify', 'vuetify'],
//         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
//       ]
//     }
//   ],
//   'external': true,
//   'componegg': true,
//   'egglement': true,
//   'height': 50,
//   'width': 200,
//   'attrs': {
//     'label': 'Label'
//   },
//   'styles': {},
//   'classes': {},
//   'children': []
// },
//
// // --- VBTN --- //
// {
//   'displayName': 'VBtn',
//   'iconName': 'v-btn--icon',
//   'name': 'vButtonComp',
//   'type': 'v-btn',
//   'dependencies': [
//     {
//       'name': 'vuetify',
//       'version': '^1.1.11',
//       'imports': [
//         ['Vue', 'vue'],
//         ['Vuetify', 'vuetify'],
//         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
//       ]
//     }
//   ],
//   'external': true,
//   'componegg': true,
//   'egglement': true,
//   'text': 'vBtn',
//   'height': 36,
//   'width': 120,
//   'minHeight': 32,
//   'minWidth': 64,
//   'attrs': {
//     'baseline': false,
//     'raised': true,
//     'unelevated': false,
//     'outlined': false,
//     'dense': false,
//     'disabled': false
//   },
//   'styles': {},
//   'classes': {},
//   'children': []
// },
//
// // --- VTEXTAREA --- //
// {
//   'displayName': 'VTextArea',
//   'iconName': 'v-textarea--icon',
//   'name': 'VTextArea',
//   'type': 'v-textarea',
//   'dependencies': [
//     {
//       'name': 'vuetify',
//       'version': '^1.1.11',
//       'imports': [
//         ['Vu   e', 'vue'],
//         ['Vuetify', 'vuetify'],
//         'vuetify/dist/vuetify.min.css', 'material-design-icons-iconfont/dist/material-design-icons.css'
//       ]
//     }
//   ],
//   'external': true,
//   'componegg': true,
//   'egglement': true,
//   'text': 'vBtn',
//   'height': 100,
//   'width': 300,
//   'minHeight': 10,
//   'minWidth': 50,
//   'attrs': {
//     'label': 'Default style',
//     'value': 'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
//     'hint': 'Hint text'
//   },
//   'styles': {},
//   'classes': {},
//   'children': []
// }
