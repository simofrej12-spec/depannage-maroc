# Site — Dépannage & Remorquage Automobile (Mohammedia / Maroc)

Site vitrine Next.js (App Router) + TypeScript + Tailwind CSS pour une entreprise de
dépannage automobile, remorquage et transport de véhicules basée à Mohammedia, avec
couverture de transport partout au Maroc.

## 1. Avant de déployer : remplacer les placeholders

Toutes les informations de l'entreprise sont centralisées dans **`lib/constants.ts`**.
Remplacez :

| Placeholder | Description |
|---|---|
| `NOM_ENTREPRISE` | Nom de l'entreprise |
| `PHONE_NUMBER` | Numéro de téléphone, format `+212XXXXXXXXX` |
| `WHATSAPP_NUMBER` | Numéro WhatsApp, format `212XXXXXXXXX` (sans le `+`) |
| `EMAIL` | Adresse email de contact |
| `ADRESSE` | Adresse physique (utilisée aussi dans les données structurées SEO) |
| `HORAIRES` | Horaires de disponibilité |
| `SITE_URL` (dans le même fichier) | Domaine réel une fois connu, utilisé pour le SEO / Open Graph / sitemap |

Le formulaire de devis (`components/QuoteForm.tsx`) n'est connecté à aucun backend pour
l'instant : la soumission est simulée et journalisée dans la console du navigateur.
Le fichier contient un commentaire indiquant exactement où brancher un appel API
(`/api/devis` par exemple) le moment venu.

## 2. Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org/) 18.18 ou plus récent.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:3000 dans le navigateur
```

Pour vérifier que le build de production fonctionne avant de déployer :

```bash
npm run build
npm run start
```

## 3. Créer le repository GitHub

```bash
git init
git add .
git commit -m "Site dépannage et remorquage - version initiale"
git branch -M main
git remote add origin https://github.com/VOTRE_UTILISATEUR/VOTRE_REPO.git
git push -u origin main
```

(Créez au préalable un repository vide sur GitHub, sans README ni .gitignore, pour
éviter les conflits avec ce projet.)

## 4. Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous (ou créez un compte).
2. Cliquez sur **Add New → Project**.
3. Sélectionnez le repository GitHub que vous venez de créer.
4. Vercel détecte automatiquement qu'il s'agit d'un projet Next.js — laissez les
   paramètres par défaut (`Build Command: next build`, `Output: .next`).
5. Cliquez sur **Deploy**.
6. Une fois le déploiement terminé, Vercel fournit une URL du type
   `https://votre-projet.vercel.app`.
7. Optionnel : dans **Project → Settings → Domains**, ajoutez votre nom de domaine
   personnalisé, puis mettez à jour `SITE_URL` dans `lib/constants.ts` en conséquence
   et redéployez.

Chaque nouveau `git push` sur la branche `main` déclenche automatiquement un nouveau
déploiement.

## 5. Structure du projet

```
app/
  layout.tsx        Layout racine, polices, métadonnées SEO, données structurées
  page.tsx           Assemblage de la page d'accueil
  globals.css         Styles globaux et classes utilitaires
  sitemap.ts           Sitemap généré automatiquement
  robots.ts             robots.txt généré automatiquement
components/
  Header.tsx, Hero.tsx, Services.tsx, ServiceArea.tsx, HowItWorks.tsx,
  WhyUs.tsx, QuoteForm.tsx, QuoteSection.tsx, Testimonials.tsx, FAQ.tsx,
  Contact.tsx, Footer.tsx, WhatsAppButton.tsx, icons.tsx
lib/
  constants.ts        Informations de l'entreprise, placeholders, textes réutilisés
```

## 6. Prochaines étapes suggérées

- Remplacer les placeholders (section 1).
- Connecter le formulaire de devis à un vrai backend ou service d'emailing.
- Ajouter de vrais avis clients à la place des emplacements réservés.
- Ajouter une image Open Graph réelle (`public/og-image.jpg`) pour un meilleur rendu
  sur les réseaux sociaux.
- Préparer une version arabe (une structure d'internationalisation peut être ajoutée
  via `app/[locale]/` le moment venu).
