// Dies ist der Code zur Deaktivierung des Service Workers
// Statt den Service Worker zu registrieren, wird er jetzt abgemeldet, falls vorhanden.

// Dies wird nur ausgeführt, wenn der Browser den Service Worker unterstützt.
export function unregister() {
  if ('serviceWorker' in navigator) {
    // Versuche, den Service Worker abzumelden
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister(); // Abmeldung des Service Workers
      })
      .catch(error => {
        console.error('Fehler beim Abmelden des Service Workers:', error);
      });
  }
}

// Hier muss der Service Worker nicht mehr registriert werden
// Die Registrierung wird entfernt, damit keine Fehler auftreten
// Wenn du den Service Worker in der Zukunft wieder aktivieren möchtest, kannst du die Funktion "register" hinzufügen.
