import { Command } from '@oclif/command'

import { execSync } from 'child_process'
import { Config } from '../helper/clone-sonia-git-repo-config'

const soniaGitLink = Config.link
const soniaGitLinkExtension = Config.extension

export class Clone extends Command {
  static description = 'Use this command to clone a SONIA git repository. Just put the name of the repository after ' +
    'this command. The exact command executed is: git clone git@github.com:sonia-auv/NAME.git' +
    'You must have the access rights.'

  static examples = ['$ sonia clone sonia-auv-cli', '$ sonia clone sonia-deploy']

  static args = [
    { name: 'repository',
      required: true,
      description: 'Name of the git repository to clone' },
  ]

  parseArgs(args: { [name: string]: any }) {
    const { repository: repositoryName } = args

    const soniaGitCompleteLink = soniaGitLink + repositoryName + soniaGitLinkExtension

    return { soniaGitCompleteLink }
  }

  async run(): Promise<void> {
    console.log('Running command clone-sonia-git-repo...')
    const { args } = this.parse(Clone)
    const cmd = 'git clone ' + this.parseArgs(args).soniaGitCompleteLink

    console.log(cmd)
    try {
      execSync(cmd, { stdio: 'inherit' })
    } catch (error) {
      // No need to print error message
    }
  }
}

