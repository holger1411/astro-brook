# Brook Blog (Astro Version)

![Brook Blog](./public/og-image.png)

Ein minimalistisches Blog-Template für Entwickler und Autoren, das sich auf saubere Typografie und ein ablenkungsfreies Leseerlebnis konzentriert. Diese Version wurde von Next.js auf Astro portiert.

## 🌟 Features

- **Modernes Design**: Minimalistisches und elegantes Layout mit Fokus auf Leserlichkeit
- **Dark/Light Mode**: Vollständige Unterstützung für Dunkel- und Hellmodus
- **Responsive Design**: Optimierte Ansicht für alle Geräte
- **Markdown/MDX Content**: Markdown mit optionaler JSX-Unterstützung für erweiterte Funktionalität
- **Einfache Inhaltsverwaltung**: Blogposts als Markdown/MDX-Dateien mit Frontmatter
- **Tagging-System**: Kategorisierung von Posts durch Tags
- **Code-Highlighting**: Syntaxhervorhebung für Code-Beispiele
- **SEO-optimiert**: Meta-Tags und strukturierte Daten
- **TypeScript**: Vollständig typisierter Code für bessere Entwicklererfahrung
- **Lesezeit-Berechnung**: Automatische Anzeige der geschätzten Lesezeit
- **Paginierung**: Integrierte Paginierung für Blogposts
- **Schnelle Performance**: Optimiert für beste Web Vitals
- **Astro Island Architecture**: Für maximale Performance mit minimalem JavaScript

## 💻 Installation

```bash
# Repository klonen
git clone https://github.com/yourusername/astro-brook.git
cd astro-brook

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321) in deinem Browser, um das Ergebnis zu sehen.

## 📁 Projektstruktur

```
├── public/               # Statische Assets
├── src/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── PostCard.astro       # Blogpost-Vorschau
│   │   ├── PostList.astro       # Liste der Blogposts
│   │   ├── TagList.astro        # Tag-Komponente
│   │   └── ui/                  # UI-Komponenten
│   ├── content/          # Inhaltsverzeichnis (mit Astro Content Collections)
│   │   ├── pages/        # Statische Seiten (Markdown/MDX)
│   │   └── posts/        # Blogposts (Markdown/MDX)
│   ├── layouts/          # Astro-Layouts
│   │   ├── BaseLayout.astro     # Grund-Layout
│   │   └── PostLayout.astro     # Layout für Blogposts
│   ├── pages/            # Astro-Seiten
│   │   ├── about.astro          # Über-Uns-Seite
│   │   ├── index.astro          # Homepage
│   │   ├── journal.astro        # Blog-Übersichtsseite
│   │   ├── posts/[slug].astro   # Dynamische Blogpost-Route
│   │   └── tags/[tag].astro     # Tag-basierte Filterung
│   ├── styles/           # Stylesheets
│   └── utils/            # Hilfsfunktionen und Utilities
└── astro.config.mjs      # Astro-Konfiguration
```

## 📝 Inhalt hinzufügen

### Neuen Blogpost erstellen

1. Erstelle eine neue `.md` oder `.mdx`-Datei im Verzeichnis `src/content/posts/`
2. Füge Frontmatter-Metadaten hinzu:

```mdx
---
title: Mein neuer Blogpost
date: 2025-03-01
excerpt: Eine kurze Beschreibung des Blogposts
image: /pfad/zum/bild.jpg
tags: [tag1, tag2]
---

Hier kommt der Inhalt des Blogposts.

## Eine Überschrift

Mehr Text und Inhalt...

```

### Eine neue statische Seite erstellen

1. Erstelle eine neue `.md` oder `.mdx`-Datei im Verzeichnis `src/content/pages/`
2. Füge Frontmatter-Metadaten hinzu:

```mdx
---
title: Meine neue Seite
---

Hier kommt der Inhalt der Seite.
```

## 🎨 Anpassungen

### Theme anpassen

Die Farbpalette und andere Design-Elemente können in der `tailwind.config.mjs`-Datei angepasst werden:

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        // Hier Farben anpassen
      },
      typography: {
        // Typografie-Einstellungen
      }
    }
  }
}
```

### Layout ändern

Die Haupt-Layouts finden sich im Verzeichnis `src/layouts/`.

## 🧩 Technologie-Stack

- [Astro](https://astro.build/) - Modernes Web-Framework
- [TypeScript](https://www.typescriptlang.org/) - Typsicherheit
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS-Framework
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Content-Management
- [MDX](https://mdxjs.com/) - Markdown mit JSX (optional)

## 📚 Verwendete Packages

- `@astrojs/tailwind` - Tailwind CSS Integration
- `@astrojs/mdx` - MDX-Unterstützung (optional)
- `@astrojs/sitemap` - Sitemap-Generierung
- `@astrojs/rss` - RSS-Feed-Generierung
- `date-fns` - Datums-Formatierung
- `rehype-pretty-code` - Code-Highlighting
- `rehype-slug` - Automatische ID-Generierung für Überschriften
- `remark-gfm` - GitHub Flavored Markdown
- `clsx` - Bedingte Klassenverkettung

## 🛠 Entwicklung

```bash
# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Vorschau des Produktions-Builds
npm run preview
```

## 🚀 Deployment

Das Projekt kann auf jeder Plattform deployt werden, die Astro unterstützt:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Deno Deploy](https://deno.com/deploy)

Für Netlify (empfohlen):

```bash
npm install -g netlify-cli
netlify deploy
```

## 🤝 Beitragen

Beiträge sind willkommen! Bitte folge diesen Schritten:

1. Forke das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add some amazing feature'`)
4. Pushe zu deinem Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe die LICENSE-Datei für Details.

## 📞 Kontakt

Bei Fragen oder Anregungen kannst du gerne ein Issue erstellen oder eine E-Mail an [deine-email@example.com] senden.

---

Entwickelt mit ❤️ unter Verwendung von Astro, TypeScript und Tailwind CSS.
