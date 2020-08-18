module.exports = [
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