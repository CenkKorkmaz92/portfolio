import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../language.service'; // Adjust path as needed

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  selectedLanguage: 'EN' | 'DE' = 'EN';

  translations = {
    EN: {
      heading1: 'Imprint',
      heading2: 'Information acc. to § 5 TMG',
      block2: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstr. 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      heading3: 'Contact',
      block3: `
        <p>
          Phone: +49 (0) 15734376057<br>
          Email:
          <a href="mailto:Cenk.Korkmaz92@gmail.com">
            Cenk.Korkmaz92&#64;gmail.com
          </a>
        </p>
      `,
      heading4: 'Editorially Responsible',
      block4: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstr. 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      block5: `
        <p>
          Source:
          <a href="https://www.e-recht24.de"
             target="_blank"
             rel="noopener nofollow">
            https://www.e-recht24.de
          </a>
        </p>
      `
    },
    DE: {
      heading1: 'Impressum',
      heading2: 'Angaben gemäß § 5 TMG',
      block2: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstr. 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      heading3: 'Kontakt',
      block3: `
        <p>
          Telefon: +49 (0) 15734376057<br>
          E-Mail:
          <a href="mailto:Cenk.Korkmaz92@gmail.com">
            Cenk.Korkmaz92&#64;gmail.com
          </a>
        </p>
      `,
      heading4: 'Redaktionell verantwortlich',
      block4: `
        <p>
          Cenk Korkmaz<br>
          Kleinhöchbergerstr. 45<br>
          71560 Sulzbach an der Murr
        </p>
      `,
      block5: `
        <p>
          Quelle:
          <a href="https://www.e-recht24.de"
             target="_blank"
             rel="noopener nofollow">
            https://www.e-recht24.de
          </a>
        </p>
      `
    },
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Subscribe so we know when the user changes the language
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang;
    });
  }
}
