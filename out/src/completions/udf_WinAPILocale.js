'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_CompareString',
        documentation: 'Compares two character strings for a specified locale',
        insertText: '_WinAPI_CompareString(${})'
    },
    {
        label: '_WinAPI_CreateNumberFormatInfo',
        documentation: 'Creates a $tagNUMBERFMT structure with the specified number formatting information',
        insertText: '_WinAPI_CreateNumberFormatInfo(${})'
    },
    {
        label: '_WinAPI_EnumSystemGeoID',
        documentation: 'Enumerates the geographical location identifiers (GEOID) that are available on the operating system',
        insertText: '_WinAPI_EnumSystemGeoID(${})'
    },
    {
        label: '_WinAPI_EnumSystemLocales',
        documentation: 'Enumerates the locales that are either installed on or supported by an operating system',
        insertText: '_WinAPI_EnumSystemLocales(${})'
    },
    {
        label: '_WinAPI_EnumUILanguages',
        documentation: 'Enumerates the user interface languages that are available on the operating system',
        insertText: '_WinAPI_EnumUILanguages(${})'
    },
    {
        label: '_WinAPI_GetDateFormat',
        documentation: 'Formats a date as a date string for a locale specified by the locale identifier',
        insertText: '_WinAPI_GetDateFormat(${})'
    },
    {
        label: '_WinAPI_GetDurationFormat',
        documentation: 'Formats a duration of time as a time string for a locale specified by identifier',
        insertText: '_WinAPI_GetDurationFormat(${})'
    },
    {
        label: '_WinAPI_GetGeoInfo',
        documentation: 'Retrieves information about a specified geographical location',
        insertText: '_WinAPI_GetGeoInfo(${})'
    },
    {
        label: '_WinAPI_GetLocaleInfo',
        documentation: 'Retrieves information about a locale specified by identifier',
        insertText: '_WinAPI_GetLocaleInfo(${})'
    },
    {
        label: '_WinAPI_GetNumberFormat',
        documentation: 'Formats a number string as a number string customized for a locale specified by identifier',
        insertText: '_WinAPI_GetNumberFormat(${})'
    },
    {
        label: '_WinAPI_GetSystemDefaultLangID',
        documentation: 'Returns the language identifier for the system locale',
        insertText: '_WinAPI_GetSystemDefaultLangID(${})'
    },
    {
        label: '_WinAPI_GetSystemDefaultLCID',
        documentation: 'Returns the locale identifier (LCID) for the system locale',
        insertText: '_WinAPI_GetSystemDefaultLCID(${})'
    },
    {
        label: '_WinAPI_GetSystemDefaultUILanguage',
        documentation: 'Retrieves the language identifier for the system default UI language of the operating system',
        insertText: '_WinAPI_GetSystemDefaultUILanguage(${})'
    },
    {
        label: '_WinAPI_GetThreadLocale',
        documentation: 'Retrieves the locale identifier of the current locale for the calling thread',
        insertText: '_WinAPI_GetThreadLocale(${})'
    },
    {
        label: '_WinAPI_GetThreadUILanguage',
        documentation: 'Retrieves the language identifier of the first user interface language for the current thread',
        insertText: '_WinAPI_GetThreadUILanguage(${})'
    },
    {
        label: '_WinAPI_GetTimeFormat',
        documentation: 'Formats time as a time string for a locale specified by identifier',
        insertText: '_WinAPI_GetTimeFormat(${})'
    },
    {
        label: '_WinAPI_GetUserDefaultLangID',
        documentation: 'Returns the language identifier for the current user locale',
        insertText: '_WinAPI_GetUserDefaultLangID(${})'
    },
    {
        label: '_WinAPI_GetUserDefaultLCID',
        documentation: 'Returns the locale identifier (LCID) for the user default locale',
        insertText: '_WinAPI_GetUserDefaultLCID(${})'
    },
    {
        label: '_WinAPI_GetUserDefaultUILanguage',
        documentation: 'Returns the language identifier for the user UI language for the current user',
        insertText: '_WinAPI_GetUserDefaultUILanguage(${})'
    },
    {
        label: '_WinAPI_GetUserGeoID',
        documentation: 'Retrieves information about the geographical location of the user',
        insertText: '_WinAPI_GetUserGeoID(${})'
    },
    {
        label: '_WinAPI_IsValidLocale',
        documentation: 'Determines if the specified locale is installed or supported on the operating system',
        insertText: '_WinAPI_IsValidLocale(${})'
    },
    {
        label: '_WinAPI_SetLocaleInfo',
        documentation: 'Sets an item of information in the user override portion of the current locale',
        insertText: '_WinAPI_SetLocaleInfo(${})'
    },
    {
        label: '_WinAPI_SetThreadLocale',
        documentation: 'Sets the current locale of the calling thread',
        insertText: '_WinAPI_SetThreadLocale(${})'
    },
    {
        label: '_WinAPI_SetThreadUILanguage',
        documentation: 'Sets the user interface language for the current thread',
        insertText: '_WinAPI_SetThreadUILanguage(${})'
    },
    {
        label: '_WinAPI_SetUserGeoID',
        documentation: 'Sets the geographical location identifier for the user ',
        insertText: '_WinAPI_SetUserGeoID(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPILocale.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items