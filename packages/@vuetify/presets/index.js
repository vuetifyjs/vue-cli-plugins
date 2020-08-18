module.exports = (api, { preset }) => {
    api.onCreateComplete(async () => {
        const presetName = `Vuetify ${preset} preset`
        const projectName = api.rootOptions.projectName
        let subprocess

        try {
            subprocess = await run(api, `vue add @vuetify/${preset}`)
        } catch (err) {
            console.warn(err)
        }

        if (!subprocess) {
            return console.error(`Unable to add preset ${preset}.`)
        }

        subprocess.stdout.on('close', async () => {
            console.log(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
        })
    })
}