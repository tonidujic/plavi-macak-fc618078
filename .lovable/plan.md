

## Prijedlozi za modernizaciju stranice

Analizirao sam cijelu stranicu i evo konkretnih promjena koje bi podigle kvalitetu dizajna:

---

### 1. Parallax efekt na hero pozadini
Umjesto statične pozadinske slike, dodati blagi parallax pomak pri skrolanju -- slika se pomiče sporije od sadržaja, dajući dubinu.

### 2. Glassmorphism kartice za usluge
Umjesto ravnih kartica, koristiti efekt zamućenog stakla (`backdrop-blur-xl`, poluprovidna pozadina) sa suptilnim obrubom. Daje moderan, premium osjećaj.

### 3. Animirani brojač / statistike
Dodati novu sekciju s animiranim brojevima (npr. "500+ članova", "50+ sprava", "5+ trenera") koji se "broje" od nule kad sekcija uđe u ekran. Vizualno vrlo efektno.

### 4. Gradient borderi umjesto ravnih
Kartice i sekcije dobivaju suptilne gradient obrube (zlatno-zeleni) umjesto jednobojih, koristeći CSS trik s `background-clip` i dvostrukom pozadinom.

### 5. Suptilna pozadinska tekstura / pattern
Dodati CSS grain/noise teksturu preko pozadine sekcija -- lagani šum koji dodaje dubinu i profesionalan osjećaj. Čisto CSS rješenje.

### 6. Poboljšani prijelazi između sekcija
Zamijeniti trenutne SVG divider-e s modernijim pristupom: mesh gradient prijelazi ili veći, mekši wave oblici s animacijom boje.

### 7. Hover efekti na galeriji
Dodati overlay s opisom slike i zoom ikonicom pri hoveru, umjesto samo scale efekta. Tekst se fade-in prikaže na tamnom overlaju.

### 8. Glow efekti na ikonama usluga
Ikone usluga dobivaju suptilan glow/sjaj u boji zlata pri hoveru, sa smooth tranzicijom.

### 9. Scroll-driven progress bar
Tanka zlatna linija na vrhu stranice koja pokazuje koliko je korisnik odskrolao. Mali detalj ali daje osjećaj poliranosti.

### 10. Footer sa više sadržaja
Proširiti footer -- dodati kratke linkove, radno vrijeme u minijaturi i socijalne mreže, umjesto samo loga i copyright-a.

---

### Tehnički detalji implementacije

**Datoteke koje se mijenjaju:**
- `src/index.css` -- novi utility klasovi (glassmorphism, grain tekstura, gradient borderi, glow efekti)
- `tailwind.config.ts` -- nove keyframe animacije (count-up, parallax pulse)
- `src/pages/Index.tsx` -- parallax hero, glassmorphism kartice, animirani brojači sekcija, prošireni footer, scroll progress bar
- `src/components/Gallery.tsx` -- hover overlay s opisom i ikonicom
- `src/components/SectionDivider.tsx` -- moderniji wave oblici s bogatijim gradijentima
- `src/components/AnimatedSection.tsx` -- dodatne varijante animacija (slide-left, slide-right)

**Novi komponenti:**
- `src/components/CounterSection.tsx` -- animirani brojači statistika
- `src/components/ScrollProgress.tsx` -- progress bar na vrhu stranice

Sve promjene koriste isključivo CSS/Tailwind bez eksternih biblioteka.

