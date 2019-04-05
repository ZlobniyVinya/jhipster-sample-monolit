import { NgModule } from '@angular/core';

import { MonolitSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MonolitSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MonolitSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MonolitSharedCommonModule {}
