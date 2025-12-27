# Contributing Guide

Vielen Dank für dein Interesse, zu diesem Projekt beizutragen! 🎉

## Wie du beitragen kannst

### Bugs melden
Wenn du einen Bug gefunden hast, erstelle bitte ein Issue mit:
- Einer klaren Beschreibung des Problems
- Schritten, um das Problem zu reproduzieren
- Screenshots oder Videos, falls relevant
- Deine Umgebung (Browser, OS, etc.)

### Features vorschlagen
Du hast eine Idee für ein neues Feature? Wir freuen uns über deine Vorschläge!
- Erstelle ein Issue und beschreibe deine Idee
- Erkläre, warum dieses Feature nützlich wäre
- Gerne auch mit Mockups oder Beispielen

### Code beitragen

1. **Fork das Repo** und erstelle einen Branch für dein Feature
   ```bash
   git checkout -b feature/deine-feature
   ```

2. **Installiere Abhängigkeiten**
   ```bash
   pnpm install
   ```

3. **Starte den Dev-Server**
   ```bash
   pnpm dev
   ```

4. **Mache deine Änderungen** und teste sie gründlich

5. **Schreibe aussagekräftige Commit-Messages**
   ```bash
   git commit -m "feat: Beschreibung deiner Änderung"
   ```

6. **Push deine Änderungen**
   ```bash
   git push origin feature/deine-feature
   ```

7. **Erstelle einen Pull Request** mit einer Beschreibung deiner Änderungen

## Code-Standards

- Verwende **Svelte** für Komponenten
- Halte dich an die bestehenden Code-Stile
- Kommentiere komplexe Logik
- Verwende aussagekräftige Namen für Variablen und Funktionen

## Commit-Nachricht-Format

Wir verwenden das Conventional Commits Format:
- `feat:` für neue Features
- `fix:` für Bug-Fixes
- `docs:` für Dokumentation
- `style:` für Code-Styling
- `refactor:` für Refactoring ohne Behavior-Änderungen

Beispiel: `feat: neue Hero-Section Animation`

## Fragen?

Falls du Fragen hast, zögere nicht, ein Issue zu erstellen oder dich mit uns in Verbindung zu setzen.

Danke für deine Unterstützung! ❤️
