module.exports = [
    {
        type: 'list',
        name: 'preset',
        message: 'Select from one of the following presets to scaffold your Vue project:',
        choices: [
            {
                name: 'Base (A basic Vuetify project)',
                value: 'base'
            },
            {
                name: 'Essential (Coming soon)',
                value: 'Essential',
                disabled: true,
            },
            {
                name: 'Recommended (Coming soon)',
                value: 'recommended',
                disabled: true,
            },
        ],
        default: 'base',
    },
    {
        type: 'confirm',
        name: 'cstudy',
        message: 'Install a Material Study preset?',
        default: false
    },
    {
        type: 'list',
        name: 'study',
        message: 'Select preset:',
        when: answers => answers.cstudy,
        choices: [
            { name: 'Basil', value: 'basil' },
            { name: 'Crane', value: 'crane' },
            { name: 'Fortnightly', value: 'fortnightly' },
            { name: 'Owl', value: 'owl' },
            { name: 'Rally', value: 'rally' },
            { name: 'Reply', value: 'reply' },
            { name: 'Shrine', value: 'shrine' }
        ]
    },
]