sonia-cli
=========

SONIA AUV CLI Tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sonia-cli.svg)](https://npmjs.org/package/sonia-cli)
[![Downloads/week](https://img.shields.io/npm/dw/sonia-cli.svg)](https://npmjs.org/package/sonia-cli)
[![License](https://img.shields.io/npm/l/sonia-cli.svg)](https://github.com/sonia-auv/sonia-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt-get install nodejs
$ sudo npm install -g sonia-auv-cli
$ sonia COMMAND
running command...
$ sonia (-v|--version|version)
sonia-auv-cli/0.0.8 darwin-x64 node-v12.18.4
$ sonia --help [COMMAND]
USAGE
  $ sonia COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sonia authenticate`](#sonia-authenticate)
* [`sonia autocomplete [SHELL]`](#sonia-autocomplete-shell)
* [`sonia diagnose [PLATFORM] [DEVICE]`](#sonia-diagnose-platform-device)
* [`sonia execute PLATFORM DEVICE CMD`](#sonia-execute-platform-device-cmd)
* [`sonia help [COMMAND]`](#sonia-help-command)

## `sonia authenticate`

Add authentication credentials to access GitHub and GitHub Packages

```
USAGE
  $ sonia authenticate

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ sonia authenticate
```

_See code: [src/commands/authenticate.ts](https://github.com/sonia-auv/sonia-auv-cli/blob/v0.0.8/src/commands/authenticate.ts)_

## `sonia autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ sonia autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ sonia autocomplete
  $ sonia autocomplete bash
  $ sonia autocomplete zsh
  $ sonia autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `sonia diagnose [PLATFORM] [DEVICE]`

Diagnose the system, specific platform and/or device(s)

```
USAGE
  $ sonia diagnose [PLATFORM] [DEVICE]

ARGUMENTS
  PLATFORM  (dockbox|auv7|auv8) Platform to target. None = all
  DEVICE    (router|switch|computer|dvl|sonar) Device to target (must be contain in specified platform). None = all

OPTIONS
  -h, --help  show CLI help

EXAMPLES
  $ sonia diagnose
  $ sonia diagnose dockbox
  $ sonia diagnose auv7
  $ sonia diagnose auv7 dvl
  $ sonia diagnose auv8 computer
```

_See code: [src/commands/diagnose.ts](https://github.com/sonia-auv/sonia-auv-cli/blob/v0.0.8/src/commands/diagnose.ts)_

## `sonia execute PLATFORM DEVICE CMD`

Execute a command to a remote device

```
USAGE
  $ sonia execute PLATFORM DEVICE CMD

ARGUMENTS
  PLATFORM  (auv7|auv8) Platform to target
  DEVICE    (computer) Device to target
  CMD       (ssh|shutdown|reboot) Command to execute (must be contain in specified platform-device)

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ sonia exec

EXAMPLES
  $ sonia execute auv7 computer ssh
  $ sonia execute auv7 computer shutdown
  $ sonia execute auv8 computer reboot
```

_See code: [src/commands/execute.ts](https://github.com/sonia-auv/sonia-auv-cli/blob/v0.0.8/src/commands/execute.ts)_

## `sonia help [COMMAND]`

display help for sonia

```
USAGE
  $ sonia help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
