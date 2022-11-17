import { Command, flags } from '@oclif/command'
import { execSync } from 'child_process'

export class HelloWorld extends Command {
  static description = 'Just hello world'

  async run(): Promise<void> {
    console.log('Running command hello-world...')

    const cmd = 'echo Hello World!'
    try {
      execSync(cmd, { stdio: 'inherit' })
    } catch (error) {
      // No need to print error message
    }
  }
}

