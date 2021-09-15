import { Command, flags } from '@oclif/command'
import { Config } from '../helper/execute-config'
import { execSync } from 'child_process'

const actionExpression = new RegExp('\\{\\{(.*?)\\}\\}', 'g')

const filteredPlatforms = Config.filter(x => x.devices.find(y => y.execute))

export default class Install extends Command {
    static description = 'Install necessary repo to start working'

    static examples = [
        '$ sonia install auv7',
        '$ sonia install auv8',
        '$ sonia install local'
    ]

    static flags = {
        help: flags.help({ char: 'h'})
    }

    static arg = [
        {
            name: 'platform',
            options: filteredPlatforms.map(x => x.name),
            required: true,
            description: 'Platform to target'
        }
    ]

    parseArgs(args: { [name: string]: any }) {
        const { platform: platformName } = args
                
        const platform = filteredPlatforms.find(x => x.name === platformName)!
        
        if (!platform) {
            throw new Error('platform is not valid')
        }

        return { platform }
    }

    /**
     * Parse args and return
     * @param {string[]} args Additional install command arguments
     * @returns {Platform[]} platform to install
     */

    async run() {
        const { args } = this.parseArgs(Install)

        /* eslint-disable no-unused-vars */
        const { platform } = this.parseArgs(args) 
        const platformName = platform.name.replace(actionExpression, (_,group1) => eval(group1))

        console.log(`Starting ${platformName} installation`)

        try {
            execSync()
        }
    }
}