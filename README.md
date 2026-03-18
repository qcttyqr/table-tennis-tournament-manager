# 🏓 Table Tennis Tournament Manager

A lightweight, fully client-side tournament management tool for table tennis events. No server required — runs entirely in the browser and saves data to `localStorage`.

**[▶ Live Demo](https://ttsask.github.io/table-tennis-tournament-manager/)**

---

## Features

| Feature | Description |
|---|---|
| ⚙️ **Setup** | Tournament name, date, city, venue — appears on all printed materials |
| 👥 **Players** | Add, edit, remove players with rating, club, and gender. CSV import/export |
| 📋 **Events** | Create multiple events (Men's Open, U-18, Mixed, etc.) with custom draw formats |
| 🎯 **Draw** | Auto-generate snake-seeded Round Robin or Knockout draws |
| 🏓 **Scores** | Set-by-set score entry for all Round Robin matches |
| 📊 **Standings** | Live standings with win/loss, set ratio, and points |
| 🏆 **Bracket** | Visual bracket view for Knockout events |
| 🖨️ **Print** | Match slips and results sheets for printing |
| 💾 **Backup** | Export/import full tournament state as JSON |

## Draw Formats

- Round Robin — 3, 4, or 5 players per group
- Knockout — 8 or 16 player brackets

## Getting Started

### Option 1: Use directly in browser
Just open `index.html` in any modern browser. No installation needed.

### Option 2: GitHub Pages
1. Fork this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Visit `https://yourusername.github.io/table-tennis-tournament-manager/`

### Option 3: Local dev server
```bash
git clone https://github.com/your-org/table-tennis-tournament-manager.git
cd table-tennis-tournament-manager
npx serve .
```

## CSV Player Import Format

```csv
First,Last,Nickname,Team,Gender,Rating
Jane,Smith,,Regina TTC,F,1800
John,Doe,JD,Saskatoon TT,M,1650
```

## Workflow

```
Setup → Players → Events → Draw → Scores → Standings → Print
```

1. **Setup** — Enter tournament name, date, venue
2. **Players** — Add all players (or import CSV)
3. **Events** — Create events and assign players
4. **Draw** — Generate draws (snake seeded by rating)
5. **Scores** — Enter results match by match
6. **Standings** — View live standings per group
7. **Print** — Print match slips or results sheets

## Data Storage

All data is stored in your browser's `localStorage`. Use the **💾 Backup** button to export a JSON file and **📂 Load** to restore it. This works across sessions on the same device/browser.

## Browser Support

Chrome, Firefox, Safari, Edge (all modern versions).

## Contributing

Pull requests welcome! Please open an issue first to discuss major changes.

## License

MIT License — see [LICENSE](LICENSE)
