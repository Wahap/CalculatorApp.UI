
import { HomeService } from './home.service';

import {
    TestBed, inject
  } from '@angular/core/testing';
import { HttpModule } from "@angular/http";
import { RouterTestingModule } from "@angular/router/testing";

  describe('Markdown transformer service', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[HttpModule,RouterTestingModule],
        providers: [
            HomeService
        ]
      });
    });
   
  });