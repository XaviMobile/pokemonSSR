import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-pricing-page',
  imports: [],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css',
})
export class PricingPage implements OnInit {
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      console.log('This code is running on the browser');
    } else {
      console.log('This code is running on the server');
    }
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', content: 'Learn more about our application and team on the Pricing' +
        ' Page.' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page SSMM' });
    this.meta.updateTag({ name: 'keywords', content: 'pricing, hello, bye, word, password' });
  }

  private title = inject(Title);

  private meta = inject(Meta);

}
