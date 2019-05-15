/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AuthGuard } from './auth-guard.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbPasswordAuthStrategy, NbAuthModule,NbAuthJWTToken, NbAuthService,NB_AUTH_TOKEN_INTERCEPTOR_FILTER} from '@nebular/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Services/auth/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint: 'https://graal.ens-lyon.fr:9106/api',
          login: {
            endpoint: '/login',
            method: 'post',          
          },
          register: {          
            endpoint: '/registration',
            method:'post',
            redirect: {
              success: '/auth/login',
              failure: '/auth/register',
              },
          },
          requestPass: {
            endpoint: '/resetmail',
            method: 'post',
          },
          resetPass: {
            endpoint: '/resetpassword',
            method: 'post',
          },
          logout: {
            endpoint: '/logout/access',
            method: 'post',
            redirect: {
              success: '/auth/login',
              failure: '/',
              },
          },
          token: {
            class: NbAuthJWTToken,
            key: 'access_token',
          }
        }),
      ],
      forms: {},
    }),

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
  ],
})
export class AppModule {

  

}
