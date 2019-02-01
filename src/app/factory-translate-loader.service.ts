import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { libTranslationLoader } from 'projects/widget/src/lib/translations/lib-translation-loader.factory';
import { LibTranslateLoader } from 'projects/widget/src/lib/translations/lib-translation-loader.service';

@Injectable({providedIn: 'root'})
export class FactoryTranslateLoader implements TranslateLoader {

    readonly translations: ((lang: string) => any)[] = [
        libTranslationLoader
    ];

    getTranslation(lang: string): Observable<any> {
        let merged = {};
        this.translations.forEach((el) => {
            const props = el(lang) || {};
            merged = {...merged, ...props};
        });
        return of(merged);
    }
}
