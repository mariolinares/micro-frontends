// main.ts

import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { WC_ROUTES } from './app/app.routes';
import { ButtonComponent } from './app/button.component';
import { ToggleComponent } from './app/toggle.component';

(async () => {
  const app = await createApplication({
    providers: [provideRouter(WC_ROUTES)],
  });

  /* const app = await bootstrapApplication(AppComponent, {
    providers: [provideRouter(WC_ROUTES)],
  }); */

  const toogleElement = createCustomElement(ToggleComponent, {
    injector: app.injector,
  });

  const buttonElement = createCustomElement(ButtonComponent, {
    injector: app.injector,
  });

  customElements.define('my-toggle', toogleElement);
  customElements.define('vass-button', buttonElement);
})();

export { ButtonComponent, ToggleComponent };
