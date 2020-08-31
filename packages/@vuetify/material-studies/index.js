module.exports = (api, { cstudy, study }) => {
    // Abort if user doesn't want a Material study preset
    if (!cstudy) return;

    api.onCreateComplete(async () => {
        const presetName = `Vuetify Material Study ${study} preset`
        const projectName = api.rootOptions.projectName
        let subprocess

        try {
            subprocess = await run(api, `vue add @vuetify/vuetify-preset-${study}`)
        } catch (err) {
            console.warn(err)
        }

        if (!subprocess) {
            return console.error(`Unable to add Material Study preset ${study}.`)
        }

        subprocess.stdout.on('close', async () => {
            console.log(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
        })
    })
}