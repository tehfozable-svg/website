/**
 * Ramon Portfolio – Simplified Version
 * No image injection – just regular asset paths
 */

const projectData = {
    "snn": {
        title: "Werken bij SNN",
        role: "UX/UI Design",
        client: "Designteam Alserda",
        year: "2026",
        liveUrl: "https://www.snn.nl/werken-bij-snn",
        context: "Het transformeren van een publieke instantie tot een modern werkgeversmerk.",
        challenge: "Hoe trek je toptalent aan in een oververhitte tech- en beleidsmarkt als overheidsorgaan? De oude website voelde afstandelijk en procedureel. De uitdaging was om de maatschappelijke impact van SNN tastbaar te maken. Je werkt hier niet voor de cijfers; je werkt hier aan de tastbare toekomst van Noord-Nederland.",
        colorBase: "linear-gradient(180deg, #e4ead8 0%, rgba(244, 243, 239, 0) 100%)",
        impact: [
            { num: "5", suffix: "", label: "stappen candidate journey opnieuw ontworpen" },
            { num: "AA", suffix: "", label: "WCAG-contrastniveau over de hele site" },
            { num: "1", suffix: "", label: "herbruikbaar contentpatroon voor alle teams" },
            { num: "100", suffix: "%", label: "fotografie van échte SNN-medewerkers" }
        ],
        blocks: [
            {
                type: "narrative",
                eyebrow: "01 · De UX Strategie",
                title: "Van vacatures naar verhalen: de journey omgedraaid",
                body: [
                    "Traditionele recruitmentsites hanteren de lineaire route: vacature, sollicitatie. Voor SNN hebben we de candidate journey volledig omgedraaid: cultuur, teams, werkzaamheden, vacature, sollicitatie.",
                    "Mensen solliciteren namelijk niet alleen op een functie; ze solliciteren op collega's, sfeer en betekenisvol werk. Door teams centraal te stellen, activeren we de intrinsieke motivatie van de bezoeker vanaf het eerste moment."
                ],
                image: "assets/images/snn-screenshot-1.jpeg"
            },
            {
                type: "narrative",
                flip: true,
                eyebrow: "02 · Het Visuele Systeem",
                title: "Toegankelijkheid ontmoet moderniteit",
                body: [
                    "Voor een overheidsinstantie is digitale toegankelijkheid (WCAG) een vereiste, geen optie. We hebben een kleurenpalet en typografie ontwikkeld die zowel een fris, modern gevoel overbrengen als voldoen aan de strengste contrastnormen.",
                    "Het resultaat voelt eigentijds en levert nooit in op leesbaarheid, voor élke bezoeker."
                ],
                image: "assets/images/snn-screenshot-3.jpeg"
            },
            {
                type: "pullquote",
                quote: "Goed design voor de overheid is niet luider praten, het is duidelijker zijn."
            },
            {
                type: "principles",
                eyebrow: "03 · UI Design & Principes",
                title: "Een menselijke overheid in beeld en structuur",
                intro: "SNN doorbreekt het stoffige imago via een handvol consequent toegepaste designprincipes.",
                items: [
                    { title: "Echte mensen, grote fotografie", body: "Geen stockfoto's, maar herkenbare medewerkers op groot formaat zodat de bezoeker zich kan inleven in het team." },
                    { title: "Warmte en witruimte", body: "Warme kleuren en royale witruimte geven de pagina rust en maken complexe informatie behapbaar." },
                    { title: "Eén consistent patroon", body: "Intro, teamverhaal, werkwijze, 'hier kom je tot je recht als...' en CTA. Bezoekers vergelijken teams moeiteloos." }
                ]
            }
        ],
        results: {
            headline: "Een sollicitatie-ervaring die voelt als een uitnodiging, niet als een formulier.",
            body: [
                "Het eindresultaat is een platform dat de maatschappelijke missie van SNN voorop stelt en kandidaten meeneemt in het verhaal vóórdat er over een vacature wordt gesproken.",
                "Door het herbruikbare contentpatroon kan het SNN-team zelfstandig nieuwe teams toevoegen zonder telkens een nieuw ontwerp nodig te hebben, schaalbaar en consistent."
            ]
        },
        reflection: {
            body: [
                "Het mooiste aan dit project was het ontkrachten van het idee dat 'overheid' en 'inspirerend' niet samengaan. De grootste designwinst zat niet in een mooi scherm, maar in het omdraaien van de volgorde waarin we informatie aanbieden.",
                "Als ik iets meeneem naar een volgend project: begin bij de motivatie van de gebruiker, niet bij de structuur van de organisatie."
            ]
        },
        next: "dakgevel"
    },
    "dakgevel": {
        title: "Dak & Gevel Noord",
        role: "UX/UI Design (duo)",
        client: "Dak & Gevel Noord",
        year: "2026",
        liveUrl: "https://www.dakgevelnoord.nl",
        context: "Een dienstenwebsite voor dak- en gevelreiniging in Noord-Nederland.",
        challenge: "Dak & Gevel Noord biedt een breed pakket: reinigen, coaten, impregneren, softwash, anti-alg en torboneren, voor zowel woningen als bedrijfspanden. Al die losse diensten maakten de oude site onoverzichtelijk, waardoor bezoekers afhaakten vóór ze een offerte aanvroegen. De uitdaging: de dienstenstructuur zó helder maken dat elke bezoeker binnen enkele klikken de juiste behandeling vindt en moeiteloos een offerte aanvraagt.",
        colorBase: "linear-gradient(180deg, #dfe3e1 0%, rgba(244, 243, 239, 0) 100%)",
        heroImage: "assets/images/dakgevel-main.jpg",
        impact: [
            { num: "6", suffix: "", label: "losse diensten teruggebracht tot één heldere structuur" },
            { num: "24", suffix: "u", label: "tot een vrijblijvende offerte, prominent in beeld" },
            { num: "8.9", suffix: "", label: "klanttevredenheid actief ingezet als vertrouwenssignaal" },
            { num: "1", suffix: "", label: "duidelijke route van probleem naar offerteaanvraag" }
        ],
        blocks: [
            {
                type: "narrative",
                eyebrow: "01 · De UX Strategie",
                title: "Van een wirwar aan diensten naar één heldere keuze",
                body: [
                    "De kern van het probleem was keuzestress: daken, gevels, softwash, anti-alg, torboneren en coatings stonden als losse opties naast elkaar, zonder hiërarchie. Een bezoeker met een mosdak wist niet welke behandeling bij hem paste.",
                    "Samen met de tweede designer hebben we de diensten geclusterd onder twee herkenbare ingangen, woning of bedrijfspand, en per situatie de juiste behandeling voorgesteld. Zo leidt de structuur de bezoeker naar de oplossing in plaats van hem te laten zoeken."
                ],
                image: "assets/images/dakgevel-screenshot-1.jpeg"
            },
            {
                type: "narrative",
                flip: true,
                eyebrow: "02 · Conversie & Vertrouwen",
                title: "De offerteaanvraag binnen handbereik",
                body: [
                    "Het bedrijf leeft van offerteaanvragen, dus die actie mocht nooit meer dan één klik weg zijn. We hebben de 'Offerte aanvragen'-knop consequent verankerd in de header en aan het einde van elke dienstpagina.",
                    "Daaromheen plaatsten we de vertrouwenssignalen die er echt toe doen: 20+ jaar ervaring, 8.9 klanttevredenheid, binnen 24 uur een offerte en volledige certificering. Voor een fysieke dienst is vertrouwen de grootste conversiehefboom."
                ],
                image: "assets/images/dakgevel-screenshot-3.jpeg"
            },
            {
                type: "pullquote",
                quote: "Bij een dienst die je niet kunt aanraken, verkoop je vertrouwen, niet een knop."
            },
            {
                type: "principles",
                eyebrow: "03 · UI Design & Principes",
                title: "Vakmanschap zichtbaar maken in beeld en ritme",
                intro: "De UI moest de degelijkheid van het vakwerk uitstralen, zonder druk of rommelig te worden.",
                items: [
                    { title: "Bewijs door echte projecten", body: "Klantverhalen met voor-en-na-fotografie van echt werk maken het resultaat tastbaar en wegen zwaarder dan elke marketingtekst." },
                    { title: "Rust en duidelijkheid", body: "Royale witruimte, een ingetogen palet en korte, heldere teksten geven de bezoeker overzicht in plaats van keuzestress." },
                    { title: "Eén herhaald patroon", body: "Elke dienstpagina volgt dezelfde opbouw: probleem, behandeling, resultaat en offerte. Bezoekers leren de structuur één keer en vinden daarna alles." }
                ]
            }
        ],
        results: {
            headline: "Een site die de bezoeker bij de hand neemt: van twijfel over zijn dak naar een aanvraag in een paar klikken.",
            body: [
                "Het eindresultaat is een platform waarin de dienstenstructuur logisch aanvoelt en de offerteaanvraag nooit ver weg is. Bezoekers herkennen hun eigen situatie en worden moeiteloos naar de juiste behandeling geleid.",
                "Door het herhaalde paginapatroon en de centrale plek van vertrouwenssignalen en de offerte-CTA is de drempel om contact op te nemen flink verlaagd, precies waar dit bedrijf op draait."
            ]
        },
        reflection: {
            body: [
                "Dit project liet zien dat goede UX voor een vakbedrijf vooral neerkomt op weglaten en ordenen. Niet méér tonen, maar de juiste dingen op het juiste moment.",
                "Samenwerken met een tweede designer dwong ons elke beslissing hardop te beargumenteren. Dat maakte de structuur uiteindelijk scherper dan wanneer ik het alleen had gedaan."
            ]
        },
        next: "snn"
    }
};

document.addEventListener("DOMContentLoaded", () => {

    // ── Mobile nav toggle ──────────────────────────────────────
    const navToggle = document.getElementById('nav-toggle');
    const navLinks  = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.classList.toggle('open', open);
            navToggle.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
            document.body.style.overflow = open ? 'hidden' : '';
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navLinks.classList.remove('open');
                navToggle.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Pre-wrap title words immediately (before preloader ends) ─
    // This runs synchronously so there's no flash of unstyled text
    (function prewrapTitle() {
        const titleEl = document.querySelector(".editorial-title");
        if (!titleEl) return;
        const nodes = Array.from(titleEl.childNodes);
        nodes.forEach(node => {
            if (node.nodeType === 3) { // text node
                const words = node.textContent.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                words.forEach(word => {
                    if (word.match(/^\s+$/)) {
                        frag.appendChild(document.createTextNode(word));
                    } else if (word) {
                        const span = document.createElement('span');
                        span.className = 'word-unit';
                        span.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1.25;';
                        const inner = document.createElement('span');
                        inner.className = 'word-inner';
                        inner.style.cssText = 'display:inline-block;transform:translateY(110%);';
                        inner.textContent = word;
                        span.appendChild(inner);
                        frag.appendChild(span);
                    }
                });
                node.replaceWith(frag);
            } else if (node.nodeType === 1) {
                if (node.classList.contains('inline-media')) {
                    // Don't wrap inline-media in a clip — it would kill border-radius.
                    // Just start it invisible; GSAP will animate opacity + slight translateY.
                    node.style.opacity = '0';
                } else {
                    // .word-hover spans: wrap in a clip container for the slide-up reveal
                    const clip = document.createElement('span');
                    clip.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1.25;';
                    node.parentNode.insertBefore(clip, node);
                    clip.appendChild(node);
                    node.style.cssText += 'display:inline-block;transform:translateY(110%);';
                }
            }
        });
        titleEl.style.opacity = '0';
    })();

    // ── Scroll progress bar ───────────────────────────────────
    const progressBar = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        if (!progressBar) return;
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = pct + '%';
    }, { passive: true });

    // ── Lenis smooth scroll ───────────────────────────────────
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
        try {
            lenis = new Lenis({ 
                duration: 1.4, 
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
                smoothWheel: true 
            });
            function raf(time) { if (lenis) lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
            if (typeof ScrollTrigger !== 'undefined') lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { if (lenis) lenis.raf(time * 1000); });
        } catch (e) {}
    }

    // ── Preloader ─────────────────────────────────────────────
    if (lenis) lenis.stop();
    const tlLoader = gsap.timeline({ 
        onComplete: () => { 
            if (lenis) lenis.start(); 
            initScrollAnimations(); 
            initOrganicHero();
        } 
    });
    let count = { val: 0 };
    tlLoader
        .to(count, { 
            val: 100, duration: 1.8, ease: "power4.inOut", 
            onUpdate: () => { 
                const c = document.getElementById("counter"); 
                if (c) c.innerHTML = Math.round(count.val); 
            }
        })
        .to(".preloader", { yPercent: -100, duration: 1.2, ease: "power4.inOut" }, "-=0.3");

    // ── Interactive hero words ────────────────────────────────
    document.querySelectorAll('.word-hover').forEach(word => {
        word.addEventListener('mouseenter', () => {
            gsap.to(word, { letterSpacing: '0.02em', duration: 0.4, ease: 'power2.out' });
        });
        word.addEventListener('mouseleave', () => {
            gsap.to(word, { letterSpacing: '-0.025em', duration: 0.5, ease: 'power2.out' });
        });
    });

    // ── Organic editorial hero ────────────────────────────────
    function initOrganicHero() {
        const editorialHero = document.getElementById('hero');
        if (!editorialHero) return;

        const ambientBlobs    = document.querySelectorAll('.blob');
        const floatingBadge   = document.querySelector('.status-badge');
        const floatingStar    = document.querySelector('.floating-star');
        const floatingCircles = document.querySelectorAll('.floating-circle');
        const floatingCross   = document.querySelector('.floating-cross');

        // Animate the pre-wrapped word inners + word-hover slides
        const titleEl = document.querySelector(".editorial-title");
        if (titleEl) {
            titleEl.style.opacity = '1';

            // Slide-up: text words and word-hover spans
            const slideTargets = titleEl.querySelectorAll('.word-inner, .word-hover');
            gsap.fromTo(slideTargets,
                { y: '110%' },
                { y: '0%', duration: 1.1, stagger: 0.026, ease: "power4.out", delay: 0.05 }
            );

            // Fade-in: inline-media images (no clip, no slide — preserves border-radius)
            const mediaTargets = titleEl.querySelectorAll('.inline-media');
            gsap.fromTo(mediaTargets,
                { opacity: 0, y: 6 },
                { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.35 }
            );
        }

        const entryTl = gsap.timeline({ delay: 0.05 });
        if (document.querySelector(".status-badge")) {
            entryTl.fromTo(".status-badge", 
                { opacity: 0, y: -15 }, 
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 
                "+=0.2"
            );
        }

        // Mouse parallax — skip on touch devices
        if (window.matchMedia('(pointer: fine)').matches) {
            editorialHero.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5);
                const y = (e.clientY / window.innerHeight - 0.5);
                
                // Subtle tilt on the whole content block
                const contentEl = document.querySelector('.hero-content-editorial');
                if (contentEl) gsap.to(contentEl, { rotationY: x * 3, rotationX: -y * 2, transformPerspective: 1200, duration: 1.5, ease: "power2.out" });
                
                ambientBlobs.forEach((blob, i) => { 
                    gsap.to(blob, { x: x * (i + 1) * 35, y: y * (i + 1) * 35, duration: 2, ease: "power2.out" }); 
                });
                if (floatingBadge) gsap.to(floatingBadge, { x: x * -35, y: y * -35, duration: 1.5, ease: "power2.out" });
                if (floatingStar)  gsap.to(floatingStar,  { x: x * 50,  y: y * 50,  duration: 2.2, ease: "power2.out" });
                floatingCircles.forEach((c, i) => { 
                    gsap.to(c, { x: x * (i + 1) * 20, y: y * (i + 1) * 20, duration: 1.8, ease: "power2.out" }); 
                });
                if (floatingCross) gsap.to(floatingCross, { x: x * -40, y: y * -40, duration: 2, ease: "power2.out" });
            });
            editorialHero.addEventListener('mouseleave', () => {
                const contentEl = document.querySelector('.hero-content-editorial');
                if (contentEl) gsap.to(contentEl, { rotationY: 0, rotationX: 0, duration: 1.5, ease: "power2.out" });
                gsap.to([ambientBlobs, floatingBadge, floatingStar, floatingCircles, floatingCross], 
                    { x: 0, y: 0, duration: 1.5, ease: "power2.out" }
                ); 
            });
        }
    }

    // ── Custom cursor (desktop only) ──────────────────────────
    const cursorDot  = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    const cursorText = document.querySelector(".cursor-text");

    if (window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener("mousemove", (e) => {
            if (cursorDot)  gsap.to(cursorDot,  { x: e.clientX, y: e.clientY, duration: 0 });
            if (cursorRing) gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.18, ease: "power2.out" });
        });

        document.querySelectorAll(".magnetic").forEach(el => {
            el.addEventListener("mousemove", (e) => {
                const rect     = el.getBoundingClientRect();
                const strength = el.dataset.strength || 20;
                const x = ((e.clientX - rect.left) / el.offsetWidth  - 0.5) * strength;
                const y = ((e.clientY - rect.top)  / el.offsetHeight - 0.5) * strength;
                gsap.to(el, { x, y, duration: 0.5, ease: "power4.out" });
            });
            el.addEventListener("mouseleave", () => { 
                gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" }); 
            });
        });

        document.querySelectorAll(".project-card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                if (cursorRing) gsap.to(cursorRing, { width: 80, height: 80, background: "var(--text-dark)", borderColor: "var(--text-dark)", duration: 0.3 });
                if (cursorDot)  gsap.to(cursorDot,  { opacity: 0, duration: 0.15 });
                if (cursorText) { cursorText.style.display = "block"; gsap.to(cursorText, { opacity: 1, delay: 0.1, duration: 0.2 }); }
            });
            card.addEventListener("mouseleave", () => {
                if (cursorRing) gsap.to(cursorRing, { width: 44, height: 44, background: "transparent", borderColor: "rgba(42, 51, 36, 0.25)", duration: 0.3 });
                if (cursorDot)  gsap.to(cursorDot,  { opacity: 1, duration: 0.15 });
                if (cursorText) gsap.to(cursorText, { opacity: 0, duration: 0.2, onComplete: () => { cursorText.style.display = "none"; }});
            });
        });

        document.querySelectorAll(".footer-btn").forEach(btn => {
            btn.addEventListener("mouseenter", () => { if (cursorRing) gsap.to(cursorRing, { width: 60, height: 60, duration: 0.3 }); });
            btn.addEventListener("mouseleave", () => { if (cursorRing) gsap.to(cursorRing, { width: 44, height: 44, duration: 0.3 }); });
        });
    }

    // ── Scroll animations ─────────────────────────────────────
    function initScrollAnimations() {
        if (typeof ScrollTrigger === 'undefined') return;

        document.querySelectorAll(".project-card").forEach(item => {
            const reveal = item.querySelector(".visual-reveal");
            if (reveal) {
                gsap.to(reveal, { 
                    clipPath: "inset(0% 0 0 0)", ease: "power2.inOut", 
                    scrollTrigger: { trigger: item, start: "top 88%", end: "top 35%", scrub: 1.2 }
                });
            }
        });

        gsap.fromTo(".marquee-strip", 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.8, scrollTrigger: { trigger: ".marquee-strip", start: "top 95%" }}
        );

        document.querySelectorAll(".project-content > *").forEach((el, i) => {
            gsap.fromTo(el, 
                { opacity: 0, y: 25 }, 
                { opacity: 1, y: 0, duration: 0.7, delay: i * 0.08,
                  scrollTrigger: { trigger: el, start: "top 88%", once: true }
                }
            );
        });

        gsap.fromTo(".footer .cta-title", 
            { opacity: 0, y: 40 }, 
            { opacity: 1, y: 0, duration: 1, ease: "power3.out",
              scrollTrigger: { trigger: ".footer", start: "top 80%", once: true }
            }
        );
        gsap.fromTo(".footer-actions", 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.9, delay: 0.3, ease: "power2.out",
              scrollTrigger: { trigger: ".footer-actions", start: "top 85%", once: true }
            }
        );

        // About section animations
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            gsap.fromTo('.about-headline',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: '.about-headline', start: 'top 85%', once: true }
                }
            );
            gsap.fromTo('.about-body',
                { opacity: 0, y: 25 },
                { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", delay: 0.15,
                  scrollTrigger: { trigger: '.about-body', start: 'top 85%', once: true }
                }
            );

            // Animated counters
            document.querySelectorAll('.stat-item').forEach((item, i) => {
                const counterEl = item.querySelector('.stat-counter');
                const target = parseFloat(item.querySelector('.stat-number').dataset.target || 0);
                const isDecimal = target % 1 !== 0;
                let started = false;

                ScrollTrigger.create({
                    trigger: item,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        if (started) return;
                        started = true;
                        gsap.fromTo(item, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.12, ease: 'power3.out' });
                        gsap.to({ val: 0 }, {
                            val: target, duration: 1.8, delay: i * 0.12, ease: 'power2.out',
                            onUpdate: function() {
                                if (counterEl) counterEl.textContent = isDecimal ? this.targets()[0].val.toFixed(1) : Math.round(this.targets()[0].val);
                            }
                        });
                    }
                });
            });

            // Skill chips stagger
            gsap.fromTo('.skill-chip',
                { opacity: 0, y: 15, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.05, ease: 'power2.out',
                  scrollTrigger: { trigger: '.skill-chips', start: 'top 88%', once: true }
                }
            );
        }
    }

    // ── Case overlay ──────────────────────────────────────────
    const casePage = document.getElementById("case-page");
    const closeBtn = document.getElementById("close-case");

    window.openCase = function(projectId) {
        const data = projectData[projectId];
        if (!data || !casePage) return;

        document.getElementById("detail-title").innerText   = data.title;
        document.getElementById("detail-role").innerText    = data.role;
        document.getElementById("detail-client").innerText  = data.client;
        document.getElementById("detail-year").innerText    = data.year;
        document.getElementById("detail-context").innerText = data.context;
        document.getElementById("detail-challenge").innerText = data.challenge;

        const heroImg = document.getElementById("detail-hero-img");
        if (heroImg) {
            if (data.heroImage) {
                heroImg.style.background = `${data.colorBase}, url(${data.heroImage}) center/cover no-repeat`;
            } else {
                heroImg.style.background = data.colorBase;
            }
        }

        const esc = (s) => String(s == null ? '' : s);
        const paras = (arr) => (Array.isArray(arr) ? arr : [arr]).map(p => `<p>${esc(p)}</p>`).join('');

        const caseBody = document.querySelector(".case-body");
        if (caseBody) {
            let html = "";

            // Live website marquee strip
            if (data.liveUrl) {
                const displayUrl = esc(data.liveUrl.replace(/^https?:\/\//, ''));
                const item = `<a href="${esc(data.liveUrl)}" target="_blank" rel="noopener" class="live-item">Bekijk live site <span class="live-arrow">↗</span></a><span class="live-dot">✦</span><span class="live-item">${displayUrl}</span><span class="live-dot">✦</span>`;
                const repeated = item.repeat(8);
                html += `
                    <div class="case-live-strip" onclick="window.open('${esc(data.liveUrl)}','_blank')">
                        <div class="case-live-track">${repeated}</div>
                    </div>`;
            }

            // Quick impact strip
            if (data.impact && data.impact.length) {
                html += `<div class="case-impact-strip"><div class="case-impact-inner">`;
                data.impact.forEach(it => {
                    html += `
                        <div class="impact-item reveal-up">
                            <div class="impact-num">${esc(it.num)}<span class="impact-suffix">${esc(it.suffix)}</span></div>
                            <div class="impact-label">${esc(it.label)}</div>
                        </div>`;
                });
                html += `</div></div>`;
            }

            // Narrative + media blocks
            (data.blocks || []).forEach(block => {
                if (block.type === "feature-image") {
                    html += `<div class="case-feature-image reveal-up" style="background-image:url(${esc(block.image)});"></div>`;
                } else if (block.type === "pullquote") {
                    html += `
                        <div class="case-pullquote reveal-up">
                            <blockquote><span class="pq-mark">“</span>${esc(block.quote)}<span class="pq-mark">”</span></blockquote>
                        </div>`;
                } else if (block.type === "principles") {
                    html += `<div class="case-section tight">`;
                    if (block.eyebrow) html += `<span class="section-eyebrow reveal-up"><span class="eyebrow-num">✦</span>${esc(block.eyebrow)}</span>`;
                    if (block.title) html += `<h2 class="cn-text-title reveal-up" style="font-family:var(--font-serif);font-style:italic;font-size:clamp(2.2rem,4vw,3.4rem);font-weight:400;line-height:1.15;letter-spacing:-0.01em;max-width:760px;margin-bottom:18px;">${esc(block.title)}</h2>`;
                    if (block.intro) html += `<p class="reveal-up" style="font-size:1.18rem;line-height:1.8;color:var(--text-dim);max-width:620px;">${esc(block.intro)}</p>`;
                    html += `</div><div class="case-principles">`;
                    (block.items || []).forEach((it, i) => {
                        html += `
                            <div class="principle-card reveal-up">
                                <div class="pc-num">0${i + 1}</div>
                                <h4>${esc(it.title)}</h4>
                                <p>${esc(it.body)}</p>
                            </div>`;
                    });
                    html += `</div>`;
                } else { // narrative (default)
                    const flip = block.flip ? " flip" : "";
                    const eyebrow = block.eyebrow ? `<span class="section-eyebrow"><span class="eyebrow-num">✦</span>${esc(block.eyebrow)}</span>` : '';
                    html += `
                        <div class="case-section">
                            <div class="case-narrative${flip} reveal-up">
                                <div class="cn-text">
                                    ${eyebrow}
                                    <h2>${esc(block.title)}</h2>
                                    ${paras(block.body)}
                                </div>
                                <div class="cn-media" style="background-image:url(${esc(block.image)});"></div>
                            </div>
                        </div>`;
                }
            });

            // Results
            if (data.results) {
                html += `
                    <div class="case-results">
                        <div class="case-results-head reveal-up">
                            <span class="section-eyebrow"><span class="eyebrow-num">✦</span>Het Resultaat</span>
                            <h2>${esc(data.results.headline)}</h2>
                        </div>
                        <div class="case-results-body reveal-up">${paras(data.results.body)}</div>
                    </div>`;
            }

            // Reflection
            if (data.reflection) {
                html += `
                    <div class="case-reflection reveal-up">
                        <div class="cr-head"><span class="section-eyebrow"><span class="eyebrow-num">✦</span>Reflectie</span></div>
                        <div class="cr-body">${paras(data.reflection.body)}</div>
                    </div>`;
            }

            // Next project
            if (data.next && projectData[data.next]) {
                const nx = projectData[data.next];
                html += `
                    <div class="case-next reveal-up">
                        <div>
                            <div class="cn-eyebrow">Volgend project</div>
                            <div class="case-next-title">${esc(nx.title)}</div>
                        </div>
                        <a class="case-next-link magnetic" data-strength="30" href="#" onclick="openCase('${esc(data.next)}'); return false;">Bekijk project <span class="arrow">→</span></a>
                    </div>`;
            }

            caseBody.innerHTML = html;
        }

        casePage.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        document.body.classList.add("case-open");

        const openTl = gsap.timeline();
        openTl.to(casePage, { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power4.inOut" });
        if (heroImg) openTl.fromTo(heroImg, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" }, "-=0.8");
        openTl.fromTo(".case-hero-title",  { y: "115%", rotation: 1.5 }, { y: "0%", rotation: 0, duration: 1.3, ease: "power4.out" }, "-=1.3");
        openTl.fromTo([".case-meta-grid .meta-col", ".case-intro-summary"], { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power2.out" }, "-=0.9");

        if (cursorRing) gsap.to(cursorRing, { width: 44, height: 44, background: "transparent", borderColor: "rgba(42, 51, 36, 0.25)" });
        if (cursorText) cursorText.style.display = "none";
        if (cursorDot)  gsap.to(cursorDot, { opacity: 1 });

        // Scroll-reveal for dynamically generated case content
        if (typeof ScrollTrigger !== 'undefined') {
            // Clean up any triggers from a previously opened case
            ScrollTrigger.getAll().forEach(t => { if (t.vars && t.vars.id && String(t.vars.id).indexOf('case-reveal') === 0) t.kill(); });

            requestAnimationFrame(() => {
                caseBody.querySelectorAll('.reveal-up').forEach((el, i) => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 36 },
                        {
                            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
                            scrollTrigger: {
                                id: 'case-reveal-' + i,
                                trigger: el,
                                scroller: casePage,
                                start: 'top 90%',
                                once: true
                            }
                        }
                    );
                });
                ScrollTrigger.refresh();
            });
        }

        // Re-bind magnetic cursor effect to freshly injected elements
        if (window.matchMedia('(pointer: fine)').matches) {
            caseBody.querySelectorAll('.magnetic').forEach(el => {
                el.addEventListener("mousemove", (e) => {
                    const rect = el.getBoundingClientRect();
                    const strength = el.dataset.strength || 20;
                    const x = ((e.clientX - rect.left) / el.offsetWidth - 0.5) * strength;
                    const y = ((e.clientY - rect.top) / el.offsetHeight - 0.5) * strength;
                    gsap.to(el, { x, y, duration: 0.5, ease: "power4.out" });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
                });
            });
        }
    };

    if (closeBtn && casePage) {
        closeBtn.addEventListener("click", () => {
            gsap.to(casePage, {
                clipPath: "inset(100% 0 0 0)", duration: 0.9, ease: "power3.inOut",
                onComplete: () => { document.body.style.overflow = ""; document.body.classList.remove("case-open"); }
            });
        });
    }
});