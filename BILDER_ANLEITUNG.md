# Bilder-Integration Anleitung

## 📁 Ordnerstruktur
Die Bilder müssen in folgende Ordner gespeichert werden:
```
/public/images/team/
/public/images/windenergie/
```

## 🖼️ Team-Bilder (Vorstand & Aufsichtsrat)

Speichere die bereitgestellten Chat-Bilder wie folgt:

### Vorstand:
- **Image 1** → `/public/images/team/burkhard-cramer.jpg` (Vorstandsvorsitzender)
- **Image 2** → `/public/images/team/hartmut-hahn.jpg` (Initiator, Vorstand) 
- **Image 3** → `/public/images/team/martina-siekmeier.jpg` (Vorstand, Illustration)

### Aufsichtsrat:
- **Image 4** → `/public/images/team/joerg-mundhenke.jpg` (Aufsichtsratsvorsitzender)
- **Image 5** → `/public/images/team/aufsichtsrat-2.jpg`
- **Image 6** → `/public/images/team/aufsichtsrat-3.jpg`
- **Image 7** → `/public/images/team/aufsichtsrat-4.jpg` (falls benötigt, Illustration)

## 🌪️ Windenergie-Bilder

### Homepage Hero-Bereich:
- **Image 8** (Windräder bei Sonnenuntergang) → `/public/images/windenergie/hero-windpark-sunset.jpg`

### Homepage "Was uns antreibt" Sektion:
- **Image 9** (Windpark aus Vogelperspektive) → `/public/images/windenergie/windpark-aerial.jpg`

## ✅ Schritte:

1. **Bilder aus dem Chat speichern:**
   - Rechtsklick auf jedes Bild im Chat
   - "Bild speichern unter..." wählen
   - Mit dem entsprechenden Dateinamen in den richtigen Ordner speichern

2. **Ordner-Pfade prüfen:**
   ```
   buergerenergie-hummetal/
   └── public/
       └── images/
           ├── team/
           │   ├── burkhard-cramer.jpg
           │   ├── hartmut-hahn.jpg
           │   ├── martina-siekmeier.jpg
           │   ├── joerg-mundhenke.jpg
           │   ├── aufsichtsrat-2.jpg
           │   └── aufsichtsrat-3.jpg
           └── windenergie/
               ├── hero-windpark-sunset.jpg
               └── windpark-aerial.jpg
   ```

3. **Browser aktualisieren:**
   - Nach dem Speichern der Bilder den Browser neu laden
   - Die Bilder sollten sofort sichtbar werden

## 🔧 Fehlerbehebung

**Falls Bilder nicht angezeigt werden:**
- Dateinamen exakt überprüfen (Groß-/Kleinschreibung beachten)
- Dateierweiterung überprüfen (.jpg, .jpeg, .png)
- Browser-Cache leeren (Cmd+Shift+R / Strg+Shift+R)

**Alternative Bildformate:**
- Die Website akzeptiert .jpg, .jpeg, .png, .webp
- Bei anderen Formaten: Dateiendungen in den .astro-Dateien anpassen

## 📱 Bildoptimierung

**Empfohlene Bildgrößen:**
- **Team-Porträts**: 400x400px (quadratisch, für runde Darstellung)
- **Hero-Bild**: Mindestens 1920x1080px (Querformat)
- **Windpark-Aerial**: 800x600px oder größer

Die Bilder werden automatisch responsive skaliert.
