'use strict'

var { languages, SymbolInformation, SymbolKind, 
    Location, Position, workspace } = require('vscode')
const { AI_CONSTANTS } = require('./util')
const _funcPattern = /Func\s(.+)\(/
const _varPattern = /(\$\w+)/g
var config = workspace.getConfiguration('autoit');

module.exports = languages.registerDocumentSymbolProvider(
    { language: 'autoit', scheme: 'file' },
    {
        provideDocumentSymbols(doc, token) {

            let result = []
            let found = []
            let funcName
            let varName

            // Get the number of lines in the document to loop through
            const lineCount = Math.min(doc.lineCount, 10000)
            for (let line = 0; line < lineCount; line++) {
                const {text}  = doc.lineAt(line)

                if (text == "") { // skip over empty lines
                    continue
                }

                funcName = _funcPattern.exec(text)
                if(funcName && found.indexOf(funcName[1]) === -1) {
                    result.push(new SymbolInformation(funcName[1], SymbolKind.Function, 
                    '', new Location(doc.uri, new Position(line, 0))))
                    found.push(funcName[1])
                }

                if (config.showVariablesInGoToSymbol) {
                    let variables = []
                    text.replace(_varPattern, (s, g1) => { // get each variable on the line
                        variables.push(g1)
                    })

                    if (variables.length > 0)
                    {
                        for (var i = 0; i < variables.length; i++)
                        {
                            if (found.indexOf(variables[i]) === -1 && AI_CONSTANTS.indexOf(variables[i]) === -1) {
                                result.push(new SymbolInformation(variables[i], SymbolKind.Variable,
                                '', new Location(doc.uri, new Position(line, 0))))
                                found.push(variables[i])
                            }
                        }
                    }
                }
            }

            return result
        }
    }
)
