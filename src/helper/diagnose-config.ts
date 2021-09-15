import { readFileSync } from 'fs'
import { safeLoad } from 'js-yaml'
import { DiagnosePlatform } from '../models/config/diagnose'
import { merge } from 'lodash'
import * as path from 'path'

export class DiagnoseConfig {
  config: DiagnosePlatform[];

  constructor(configFolderPath: string) {
    const docCommon = safeLoad(readFileSync(configFolderPath + '/common.yml', 'utf8')) as { [id: string]: DiagnosePlatform }
    const docDiagnose = safeLoad(readFileSync(configFolderPath + '/diagnose.yml', 'utf8')) as { [id: string]: DiagnosePlatform }
    merge(docCommon, docDiagnose)
    const result = Object.entries(docCommon).map(x => ({ ...(x[1]), devices: [...(Object.entries(x[1].devices).map(y => ({ ...(y[1]), name: y[0] })))], name: x[0] }))

    this.config = result
  }
}
const  configPath = path.join(__dirname,"..", '..', 'config');
export const Config = new DiagnoseConfig(configPath).config
