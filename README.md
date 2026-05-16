# ProspectImmo

Automated lead generation for real estate agents.

## Setup rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer en local
```bash
npm run dev
```
Ouvre http://localhost:3000

### 3. Déployer sur Vercel

**Option A — Via GitHub (recommandé)**
1. Crée un repo GitHub et push ce projet
2. Va sur https://vercel.com et connecte ton compte GitHub
3. Clique "New Project" → sélectionne ton repo
4. Clique "Deploy" → c'est en ligne !

**Option B — Via CLI**
```bash
npm install -g vercel
vercel
```

## Structure du projet

```
prospectimmo/
├── app/
│   ├── layout.js      # Layout racine + fonts + metadata
│   ├── page.js        # Page d'accueil
│   └── globals.css    # Styles globaux
├── components/
│   ├── Navbar.js      # Navigation
│   ├── Hero.js        # Section héro
│   ├── Features.js    # Section fonctionnalités
│   ├── Testimonials.js # Témoignages
│   ├── Pricing.js     # Tarifs
│   └── Footer.js      # Pied de page
├── package.json
├── tailwind.config.js
└── vercel.json
```

## Prochaines étapes

- [ ] Étape 2 : Authentification (NextAuth.js)
- [ ] Étape 3 : Paiement (Stripe)
- [ ] Étape 4 : Génération de leads + emails
"# prospectimmo" 
