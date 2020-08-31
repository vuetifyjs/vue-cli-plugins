module.exports = (api, opts) => {
    if (!api.hasPlugin('vuetify')) {
        console.log('`@vuetify/presets/material-studies` requires the `vue-cli-plugin-vuetify` package.')
        return
    } else if (api.hasPlugin(`${opts.study}`)) {
        console.log(`${opts.study} has already been installed!`);
        return
    }

    api.render(`./vue-cli-plugin-vuetify-preset-${opts.study}`)

    api.onCreateComplete(() => {
        api.exitLog('Discord community: https://community.vuetifyjs.com')
        api.exitLog('Github: https://github.com/vuetifyjs/vuetify')
        api.exitLog('Support Vuetify: https://github.com/sponsors/johnleider')
    })
}