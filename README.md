# Countdown

**Play it here: https://surelook.github.io/countdown/**

A game of letters, numbers and conundrums. Any resemblance to a long-running Channel 4 teatime quiz is, of course, entirely coincidental.

I built this in May 2020, during the first COVID lockdown, so I could play Countdown with friends over video calls. One person hosts and shares their screen, everyone else plays along with pen and paper, and the famous clock does the rest. It's very warming to know that people are continuing to discover and get joy from this simple little game, long after lockdown has ended, and I hope it continues to bring joy for a long time to come.

## Hosting a game

1. Open the site and pick **Classic** or **Cats** conundrums. Cats draws from *8 Out of 10 Cats Does Countdown*.
2. Share your screen on the video call, **with sound**, so everyone hears the clock music.
3. Press **Fullscreen** for the full studio feel.

The game is saved in your browser, so a refresh won't lose it. **New Game** reshuffles everything.

### Letters

Players take turns calling for a **Consonant** or a **Vowel** until all nine tiles are filled. Then press **Start Clock**, and you have 30 seconds to find the longest word. When time's up, **Dictionary Corner** reveals the best you could have had. Cats games allow the rude ones.

### Numbers

Pick six numbers from **Large** (25, 50, 75, 100) and **Small** (1–10), then press **Target** for a three-digit number to aim for. Use +, −, × and ÷ to get as close as you can. **Solution** shows one way to get there, or as close as it can.

### Conundrum

Press **New Conundrum** for a scrambled nine-letter word, start the clock, and race to unscramble it. **Reveal** shows the answer.

## Running it locally

You'll need Node 24 (see `.nvmrc`).

```sh
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build in dist/
```

It's plain web components, plain CSS and [Vite](https://vite.dev). There's no framework.

Pushing to `master` builds the site and deploys it to GitHub Pages.

## Credits

- The numbers solver is a JavaScript port of [cntdn](https://github.com/jes/cntdn) by James Stanley. Thank you, James!
- The conundrums, and the show's rulings that keep Dictionary Corner honest, come from the episode records on [The Countdown Wiki](https://wiki.apterous.org/). Thank you to everyone who keeps it going!
- Dictionary Corner's words are built on [SCOWL](https://github.com/en-wl/wordlist) by Kevin Atkinson, with rude words sorted using [LDNOOBW](https://github.com/LDNOOBW/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words).
- The icons are from [Material Icons](https://fonts.google.com/icons) (Apache 2.0).
- Thanks to everyone who has added conundrums or fixed things along the way.

Not affiliated with Channel 4 or the makers of Countdown. Just a fan.
