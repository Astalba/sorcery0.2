# sorcery0.2

SORCERY ULTIMATE COLOSSEUM 
Web app per visualizzare i propri mazzi di sorceryTCG e utilizzarli per giocare online con altri giocatori.

Dalla schermata home si può accedere a una schermata seleziona stanza (TODO) con un opzione per creare la propria stanza. selezionata la stanza, si può accedere al campo di gioco vero e proprio. (WIP) Il gioco è a turni e utilizzeremo tecnologie come websocket per comunicare i dati tra le 2 macchine (TODO). Dalla schermata home si può accedere a una schermata (provalista.jsx) dove si può selezionare e visualizzare il mazzo che utilizzeremo durante la partita (WIP).

WIP: 
Tavolo virtuale (Room.jsx)
Visualizzatore di mazzi (Provalista.jsx)

TODO:
stabilire una connessione tra 2 macchine diverse utilizzando websocket.
introdurre la possibilità di creare e partecipare a una stanza.

Tecnologie usate: 
  Frontend: Vite + React v.18.2.0, libreria Material UI, Axios, React router DOM
  Backend: Django, Django_restframework, Django-cors-headers

Comandi per startare l'app, partendo dalla directory 'sorcery0.2':
  Frontend: 
    >>cd FRONTEND
    >>cd npm run dev

  Backend: 
    >>cd BACKEND
    >>venv/scripts/activate
    >>python manage.py runserver 

    Un progetto di Alessandro Bartoletti e Francesco Bagnoli
