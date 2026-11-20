# SN Notizen – Anleitung

Version 1.0 · Stand 20.11.2026

## Was ist drin

| Datei | Zweck |
|---|---|
| `index.html` | Die komplette App |
| `manifest.webmanifest` | Name, Farbe und Icon für den Home-Bildschirm |
| `sw.js` | Sorgt dafür, dass die App offline läuft |
| `icons/` | SN-Logo als App-Icon |

## 1. Am Rechner ausprobieren

`index.html` per Doppelklick in Chrome oder Edge öffnen. Alles funktioniert bis auf die Installation als App.
Die Testdaten bleiben nur in diesem Browser.

## 2. Aufs iPhone bringen (einmalig, ca. 15 Minuten)

1. Auf github.com ein kostenloses Konto anlegen.
2. Neues Repository anlegen, Name z. B. `notizen`, Sichtbarkeit **Public**.
   Im Repository liegt nur der Programmcode, keine Notizen.
3. „Add file → Upload files“: den **Inhalt** dieses Ordners hochladen, also `index.html`, `manifest.webmanifest`, `sw.js` und den Ordner `icons`.
4. Settings → Pages → Branch `main`, Ordner `/ (root)` → Save.
   Nach 1–2 Minuten ist die App erreichbar unter `https://DEINNAME.github.io/notizen/`.
5. Diese Adresse am iPhone in **Safari** öffnen, auf **Teilen** tippen, dann **„Zum Home-Bildschirm“**.
6. Die App ab jetzt immer über das SN-Icon starten, nicht über Safari.
   Safari und die installierte App haben getrennte Speicher.

## 3. Bedienung

- **+**: neuer Punkt. Die Tastatur geht sofort auf, mit dem Mikrofon unten rechts diktierst du.
- **Kamera**: Foto aufnehmen. Danach kannst du direkt Text dazuschreiben.
- Datum und Uhrzeit werden automatisch gesetzt.
- **Eingang**: alles ohne Art, Bereich und Person. Am Rechner einsortieren.
- **Kreis antippen**: Der Punkt ist erledigt und wandert ins Archiv. Mit „Rückgängig“ holst du ihn zurück.
- **Termin / Rundgang starten**: Alle Punkte, die du danach erfasst, hängen am Termin. Hinterher kannst du ihn als PDF ausgeben oder für Obsidian kopieren.
- **Mehr → Personen**: alle offenen Punkte je Person, als PDF oder Text zum Weiterschicken.
- **Suche**: findet Text, Bereiche, Personen und Termine, auch im Archiv.

## 4. Aufs Notebook und Sicherung

- **Mehr → An Notebook senden**: Du bekommst eine PDF der offenen Punkte und eine Datendatei. Beides schickst du dir per Mail oder legst es in OneDrive ab.
- Am Notebook öffnest du die App, gehst auf **Mehr → Datendatei einlesen** und wählst die Datendatei. Neues wird ergänzt, nichts doppelt.
- Das geht auch umgekehrt vom Notebook zurück aufs iPhone.
- **Sicherung**: Die App erinnert dich nach 7 Tagen. Die Datei am besten in OneDrive ablegen. Damit ist auch ein Handywechsel abgesichert.

## 5. Wichtig zu wissen

- Alle Daten liegen nur auf dem Gerät. Wird die App vom Home-Bildschirm gelöscht, sind die Daten weg. Deshalb regelmäßig sichern.
- **Neue Version einspielen:** Die geänderten Dateien bei GitHub hochladen. In `sw.js` steht die Versionsnummer (`sn-notizen-v1`); die wird dabei hochgezählt. Die App holt sich die neue Version beim nächsten Start mit Netz.
- Am iPhone noch zu testen: der Kalender-Eintrag (Knopf „In Kalender“).
