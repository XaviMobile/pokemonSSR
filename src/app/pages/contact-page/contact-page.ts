import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Learn more about our application and team on the Contact' +
        ' Page.' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page SSMM' });
    this.meta.updateTag({ name: 'keywords', content: 'contact, hello, bye, word, password' });
  }
}
