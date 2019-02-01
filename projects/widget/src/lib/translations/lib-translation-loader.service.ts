import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { hu } from './hu';
import { en } from './en';

@Injectable({providedIn: 'root'})
export class LibTranslateLoader implements TranslateLoader {

    readonly langMap = {
        'hu': hu,
        'en': en
    };

    getTranslation(lang: string): Observable<any> {
        return of(this.langMap[lang]);
    }
}
