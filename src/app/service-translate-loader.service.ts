import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';
import { flatMap, reduce, filter } from 'rxjs/operators';
import { LibTranslateLoader } from 'projects/widget/src/lib/translations/lib-translation-loader.service';

@Injectable({providedIn: 'root'})
export class ServiceTranslateLoader implements TranslateLoader {

    private translateLoaders: TranslateLoader[] = [];

    constructor(
        private libTranslate: LibTranslateLoader
    ) {
        this.translateLoaders = [this.libTranslate];
    }

    getTranslation(lang: string): Observable<any> {
        return from(this.translateLoaders)
            .pipe(
                flatMap((loader) => loader.getTranslation(lang)),
                filter((translation) => !!translation),
                reduce((acc, val) => {
                    return {...acc, ...val};
                })
            );
    }
}
