function dontClick(event, context) {
  return {
    body: `
─────────────────
▄▄▀▀▀▀█──────▄▄▀▀▀▀█───
█▒░░▄░█─────▄█▒░░▄░█────
█▀▀▀▄▄▀───▄▀▒▀▀▀▄▄▀─────
█▒░░░█──█▒░░░░▄▀─▄▄▀▀▀▀█
█▒░░░█─█▒░░░░▄▀─▄█▒░░▄░█
█▒░░░█▒█░░░░█─▄▄▀▒▀▀▀▄▄▀
█▒▒▒▒▒▒▀▒▒▒▒▒▀░░░░░░▄▀
██▒▒▒▒▒░░░░░░░░░░▀▀▄▄──
███▓▓▒▒▒▀▀▀█▄▒▒░░░█░░▀▀▄
▓██▓▒▒▒▒▒▒▒▒▒█▀▀▄▄█▒░▄░█
▓▓█▓▒▒▒▒▒▒▓▒▒█░░░░▀▀▄▄▄█░
░▒▒▀▀▄▄▄▄█▄▄▀░░░░░░░
`
  };
}

export const handler = dontClick;
