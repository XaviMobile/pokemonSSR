import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({ name: 'description', content: 'Learn more about our application and team on the About Page.' });
    this.meta.updateTag({ name: 'og:title', content: 'About Page SSMM' });
    this.meta.updateTag({ name: 'keywords', content: 'hello, bye, word, password' });
  }

}
