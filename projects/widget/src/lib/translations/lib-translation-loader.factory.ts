import { hu } from './hu';
import { en } from './en';
import { TranslateLoader } from '@ngx-translate/core';

const langMap = {
    'hu': hu,
    'en': en
};

export function libTranslationLoader(lang: string): any {
    return langMap[lang];
}
