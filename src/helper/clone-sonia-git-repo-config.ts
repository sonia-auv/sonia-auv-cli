import { safeLoad } from 'js-yaml'
import { readFileSync } from 'fs'
import { CloneSoniaGitRepoInfo } from '../models/config/clone-sonia-git-repo/clone-sonia-git-repo-config'
import * as path from 'path'

export class CloneSoniaGitRepoConfig {
  soniaGitConfig: CloneSoniaGitRepoInfo

  constructor(configFolderPath: string) {
    this.soniaGitConfig = safeLoad(readFileSync(configFolderPath + '/clone-sonia-git-repo.yml', 'utf-8')) as CloneSoniaGitRepoInfo
  }
}

const  configPath = path.join(__dirname, '..', '..', 'config')
export const Config = new CloneSoniaGitRepoConfig(configPath).soniaGitConfig
