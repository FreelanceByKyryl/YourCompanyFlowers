
document.documentElement.classList.add("js");

const page = document.body.dataset.page || "home";
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const photo = (id, w = 800, h = 1000) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=78`;

const products = [
    {
        id: "peony-blush",
        name: "Peony Blush",
        tag: "Bestseller",
        category: "romance",
        description: "Soft pink blooms and a little everyday magic.",
        image: photo("photo-1490750967868-88aa4486c946")
    },
    {
        id: "garden-romance",
        name: "Garden Romance",
        tag: "Romantic",
        category: "romance",
        description: "Elegant florals for heartfelt moments.",
        image: photo("photo-1525310072745-f49212b5ac6d")
    },
    {
        id: "spring-tulips",
        name: "Spring Tulips",
        tag: "Seasonal",
        category: "seasonal",
        description: "Fresh, colourful flowers with a sunny mood.",
        image: photo("photo-1526045478516-99145907023c")
    },
    {
        id: "wild-meadow",
        name: "Wild Meadow",
        tag: "Hand-tied",
        category: "seasonal",
        description: "Loose garden styling, inspired by nature.",
        image: photo("photo-1468327768560-75b778cbb551")
    },
    {
        id: "soft-petals",
        name: "Soft Petals",
        tag: "Thoughtful",
        category: "romance",
        description: "A gentle statement for someone special.",
        image: photo("photo-1494972308805-463bc619d34e")
    },
    {
        id: "rose-story",
        name: "Rose Story",
        tag: "Classic",
        category: "celebration",
        description: "Timeless flowers for meaningful occasions.",
        image: photo("photo-1508615070457-7baeba4003ab")
    },
    {
        id: "morning-bloom",
        name: "Morning Bloom",
        tag: "Bright",
        category: "celebration",
        description: "A radiant surprise that lifts the day.",
        image: photo("photo-1519378058457-4c29a0a2efac")
    },
    {
        id: "pastel-dream",
        name: "Pastel Dream",
        tag: "Popular",
        category: "wedding",
        description: "Delicate colours for a lovely celebration.",
        image: photo("photo-1487530811176-3780de880c2d")
    },
    {
        id: "flower-poetry",
        name: "Flower Poetry",
        tag: "Wedding",
        category: "wedding",
        description: "A graceful arrangement for beautiful memories.",
        image: photo("photo-1494336934272-f0efcedfc8a1")
    },
    {
        id: "simply-lovely",
        name: "Simply Lovely",
        tag: "Signature",
        category: "celebration",
        description: "Full of charm, perfect for a little gift.",
        image: photo("photo-1457089328109-e5d9bd499191")
    }
];

const navItems = [
    ["home", "Home", "index.html"],
    ["bouquets", "Bouquets", "bouquets.html"],
    ["occasions", "Occasions", "occasions.html"],
    ["story", "Our Story", "story.html"],
    ["gallery", "Gallery", "gallery.html"],
    ["visit", "Visit", "visit.html"],
    ["contact", "Contact", "contact.html"]
];

const leaf = `
    <svg class="leafmark" viewBox="0 0 36 38" fill="none" aria-hidden="true">
        <path
            d="M17 35V17M17 21C4 23 2 12 4 5c12 1 17 7 13 16ZM17 20C16 9 23 3 33 3c1 13-5 19-16 17Z"
            stroke="currentColor"
            stroke-width="2.6"
            stroke-linejoin="round"
        />
        <path
            d="M17 20 8 11M17 20 26 10"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
        />
    </svg>
`;

const header = document.getElementById("siteHeader");

if (header) {
    header.className = "site-header";

    header.innerHTML = `
        <div class="container header-inner">
            <a href="index.html" class="logo" aria-label="YourCompanyName homepage">
                ${leaf}
                <span>YourCompanyName.</span>
            </a>

            <nav id="primaryNav" class="nav-links" aria-label="Main navigation">
                ${navItems.map(([id, label, url]) => `
                    <a href="${url}" ${
                        id === page
                            ? 'class="active" aria-current="page"'
                            : ""
                    }>${label}</a>
                `).join("")}
            </nav>

            <div class="header-actions">
                <a class="btn btn-primary" href="bouquets.html">
                    Explore blooms ↗
                </a>

                <button
                    class="menu-toggle"
                    type="button"
                    aria-controls="primaryNav"
                    aria-expanded="false"
                    aria-label="Open menu"
                >
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    `;

    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector("#primaryNav");

    const close = () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");

        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.classList.toggle("menu-open", open);
    });

    nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", close);
    });

    document.addEventListener("click", e => {
        if (!header.contains(e.target)) {
            close();
        }
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            close();
        }
    });

    addEventListener("resize", () => {
        if (innerWidth > 820) {
            close();
        }
    });
}

const footer = document.getElementById("siteFooter");

if (footer) {
    footer.className = "site-footer";

    footer.innerHTML = `
        <div class="container">
            <div class="footer-top">
                <div>
                    <a href="index.html" class="logo">
                        ${leaf} YourCompanyName.
                    </a>
                    <p>
                        Beautiful blooms for moments big and small.
                        An independent flower shop concept, ready
                        to be customised for a real business.
                    </p>
                </div>

                <div>
                    <h3>Discover</h3>
                    <a href="bouquets.html">All bouquets</a>
                    <a href="occasions.html">Occasions</a>
                    <a href="gallery.html">Gallery</a>
                </div>

                <div>
                    <h3>Company</h3>
                    <a href="story.html">Our story</a>
                    <a href="visit.html">Visit us</a>
                    <a href="contact.html">Contact</a>
                </div>

                <div>
                    <h3>Get in touch</h3>
                    <a href="visit.html">YourCompany Address</a>
                    <a href="visit.html">Opening hours</a>
                    <a href="contact.html">Send an enquiry</a>
                </div>
            </div>

            <div class="footer-bottom">
                <span>
                    © ${new Date().getFullYear()} YourCompanyName.
                    All rights reserved.
                </span>

                <span>
                    Independent floral website demo · Contact details are examples.
                </span>
            </div>
        </div>
    `;
}

const topButton = document.createElement("button");

topButton.type = "button";
topButton.className = "to-top";
topButton.textContent = "↑";
topButton.setAttribute("aria-label", "Back to top");

document.body.append(topButton);

topButton.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: reduced ? "instant" : "smooth"
    });
});

addEventListener("scroll", () => {
    topButton.classList.toggle("visible", scrollY > 580);
}, { passive: true });

const revealEls = document.querySelectorAll(".reveal");

if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("show"));
} else {
    const ro = new IntersectionObserver((entries, ob) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("show");
                ob.unobserve(e.target);
            }
        });
    }, {
        threshold: .08,
        rootMargin: "0px 0px 35px 0px"
    });

    revealEls.forEach(el => ro.observe(el));
}

const modal = document.getElementById("flowerDialog");

if (modal) {
    modal.className = "dialog";

    modal.innerHTML = `
        <div class="dialog-inner">
            <button type="button" class="dialog-close"
                    aria-label="Close dialog">×</button>
            <div id="dialogContent"></div>
        </div>
    `;

    modal.querySelector(".dialog-close").addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.close();
        }
    });
}

function openProduct(index) {
    const p = products[index];

    if (!modal || !p) return;

    modal.querySelector("#dialogContent").innerHTML = `
        <div class="dialog-body">
            <img src="${p.image}" alt="${p.name}">

            <div>
                <span class="pill">${p.tag} · Flower collection</span>
                <h2>${p.name}</h2>

                <p>
                    ${p.description}
                    Thoughtfully chosen blooms in our example collection.
                </p>

                <p>
                    Every bouquet is a sample design.
                    Ask about a personalised version of this arrangement.
                </p>

                <a class="btn btn-primary"
                   href="contact.html?bouquet=${encodeURIComponent(p.name)}">
                    Enquire about this bouquet ↗
                </a>
            </div>
        </div>
    `;

    modal.showModal();
}

function productCard(p, i) {
    return `
        <article class="product-card reveal">
            <button
                type="button"
                class="product-photo"
                data-product="${i}"
                aria-label="View ${p.name}"
            >
                <img
                    src="${p.image}"
                    alt="${p.name} flower arrangement"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="750"
                >
                <span class="product-tag">${p.tag}</span>
            </button>

            <div class="product-info">
                <h3>${p.name}</h3>
                <p>${p.description}</p>

                <div class="detail-row">
                    <span>Made to order · Enquire</span>

                    <button
                        type="button"
                        class="round-btn"
                        data-product="${i}"
                        aria-label="View ${p.name}"
                    >↗</button>
                </div>
            </div>
        </article>
    `;
}

function wireProductClicks(scope = document) {
    scope.querySelectorAll("[data-product]").forEach(button => {
        button.addEventListener("click", () => {
            openProduct(Number(button.dataset.product));
        });
    });
}

function applyReveal(scope) {
    if (reduced || !("IntersectionObserver" in window)) {
        scope.querySelectorAll(".reveal").forEach(el => {
            el.classList.add("show");
        });
        return;
    }

    const obs = new IntersectionObserver((entries, ob) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("show");
                ob.unobserve(e.target);
            }
        });
    }, { threshold: .06 });

    scope.querySelectorAll(".reveal").forEach(el => {
        obs.observe(el);
    });
}

const featured = document.getElementById("featuredGrid");

if (featured) {
    featured.className = "product-grid";

    featured.innerHTML = products
        .slice(0, 4)
        .map((p, i) => productCard(p, i))
        .join("");

    wireProductClicks(featured);
    applyReveal(featured);
}

const catalogue = document.getElementById("bouquetGrid");

if (catalogue) {
    catalogue.className = "product-grid";

    const params = new URLSearchParams(location.search);

    const allowed = [
        "all",
        "romance",
        "seasonal",
        "celebration",
        "wedding"
    ];

    let selected = allowed.includes(params.get("category"))
        ? params.get("category")
        : "all";

    const bar = document.getElementById("filterBar");

    function update() {
        bar.querySelectorAll("button").forEach(b => {
            b.setAttribute(
                "aria-pressed",
                String(b.dataset.filter === selected)
            );
        });

        catalogue.innerHTML = products
            .map((p, i) => ({ p, i }))
            .filter(({ p }) => {
                return selected === "all" || p.category === selected;
            })
            .map(({ p, i }) => productCard(p, i))
            .join("");

        wireProductClicks(catalogue);
        applyReveal(catalogue);
    }

    bar.querySelectorAll("[data-filter]").forEach(btn => {
        btn.addEventListener("click", () => {
            selected = btn.dataset.filter;

            history.replaceState(
                {},
                "",
                selected === "all"
                    ? "bouquets.html"
                    : `bouquets.html?category=${selected}`
            );

            update();
        });
    });

    update();
}

const galleryGrid = document.getElementById("galleryGrid");

let galleryIndex = 0;

if (galleryGrid) {
    galleryGrid.className = "gallery-grid";

    galleryGrid.innerHTML = products.map((p, i) => `
        <button
            type="button"
            class="gallery-button reveal"
            data-gallery="${i}"
            aria-label="View ${p.name} photo"
        >
            <img
                src="${p.image}"
                alt="${p.name} flowers"
                loading="lazy"
                decoding="async"
                width="600"
                height="750"
            >
        </button>
    `).join("");

    applyReveal(galleryGrid);

    galleryGrid.querySelectorAll("[data-gallery]").forEach(b => {
        b.addEventListener("click", () => {
            openGallery(Number(b.dataset.gallery));
        });
    });
}

function openGallery(i) {
    if (!modal) return;

    galleryIndex = (i + products.length) % products.length;

    const p = products[galleryIndex];

    modal.querySelector("#dialogContent").innerHTML = `
        <img class="dialog-photo-only" src="${p.image}" alt="${p.name}">

        <div class="dialog-toolbar">
            <button type="button" id="prevGallery"
                    aria-label="Previous photo">← Previous</button>

            <span>${p.name} · ${galleryIndex + 1}/${products.length}</span>

            <button type="button" id="nextGallery"
                    aria-label="Next photo">Next →</button>
        </div>
    `;

    modal.querySelector("#prevGallery").addEventListener("click", () => {
        openGallery(galleryIndex - 1);
    });

    modal.querySelector("#nextGallery").addEventListener("click", () => {
        openGallery(galleryIndex + 1);
    });

    if (!modal.open) {
        modal.showModal();
    }
}

if (modal) {
    modal.addEventListener("keydown", e => {
        if (!modal.open || !document.getElementById("prevGallery")) return;

        if (e.key === "ArrowRight") {
            openGallery(galleryIndex + 1);
        }

        if (e.key === "ArrowLeft") {
            openGallery(galleryIndex - 1);
        }
    });
}

function buildMosaic(mosaic) {
    const specs = [
        [0, "green", 3, 6, "yellow"],
        [2, 5, "pink", 8, 1],
        ["pink", 4, 7, "green", 9]
    ];

    mosaic.innerHTML = specs.map((col, i) => `
        <div class="mosaic-col">
            <div class="mosaic-track">
                ${[0, 1].map((_, repeat) => `
                    <div class="mosaic-group"
                         ${repeat ? 'aria-hidden="true"' : ""}>
                        ${col.map(item => {
                            if (typeof item === "number") {
                                return `
                                    <div class="mosaic-tile">
                                        <img
                                            src="${products[item].image}"
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                        >
                                    </div>
                                `;
                            }

                            const colorClass = item === "green"
                                ? "green"
                                : item === "yellow"
                                    ? "yellow"
                                    : "";

                            const words = item === "green"
                                ? "Grow with love."
                                : item === "yellow"
                                    ? "Something lovely."
                                    : "Let it bloom.";

                            return `
                                <div class="mosaic-tile color-tile ${colorClass}">
                                    ${words}
                                </div>
                            `;
                        }).join("")}
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");

    if (!reduced && "IntersectionObserver" in window) {
        const mo = new IntersectionObserver(entries => {
            entries.forEach(e => {
                mosaic.classList.toggle("paused", !e.isIntersecting);
            });
        }, { threshold: .02 });

        mo.observe(mosaic);
    }
}

document.querySelectorAll("[data-mosaic]").forEach(buildMosaic);

function initTicker() {
    const run = document.getElementById("tickerRun");

    if (!run) return;

    const group = run.querySelector(".ticker-group");

    if (!group) return;

    const original = group.innerHTML;

    function sync() {
        run.style.animation = "none";
        run.innerHTML = "";

        const base = document.createElement("div");

        base.className = "ticker-group";
        base.innerHTML = original;

        run.append(base);

        let guard = 0;

        while (base.scrollWidth < innerWidth + 160 && guard++ < 30) {
            base.insertAdjacentHTML("beforeend", original);
        }

        const duplicate = base.cloneNode(true);

        duplicate.setAttribute("aria-hidden", "true");
        run.append(duplicate);

        void run.offsetWidth;
        run.style.animation = "";
    }

    sync();

    let resizeTimer;

    addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(sync, 200);
    });
}

initTicker();

function initArc() {
    const desktop = document.getElementById("arcDesktop");
    const mobile = document.getElementById("arcMobile");
    const band = document.getElementById("arcBand");

    if (!desktop || !mobile || !band) return;

    const markup = (p, i) => `
        <button
            type="button"
            class="arc-card"
            data-product="${i}"
            aria-label="View ${p.name}"
        >
            <img
                src="${p.image}"
                alt="${p.name}"
                draggable="false"
                width="500"
                height="660"
                ${i < 7 ? 'fetchpriority="high"' : 'loading="lazy"'}
            >

            <span class="arc-bubble" aria-hidden="true">↗</span>
            <span class="arc-name">${p.name}</span>
        </button>
    `;

    desktop.innerHTML = products.map(markup).join("");

    mobile.innerHTML = [...products, ...products]
        .map((p, i) => markup(p, i % products.length))
        .join("");

    wireProductClicks(desktop);
    wireProductClicks(mobile);

    const cards = [...desktop.children];
    const pitch = 196;
    const perimeter = products.length * pitch;
    const mod = (a, b) => ((a % b) + b) % b;

    let travel = 0;
    let velocity = 0;
    let last = 0;
    let drag = false;
    let lastX = 0;
    let downX = 0;
    let lastStamp = 0;
    let suppressUntil = 0;
    let visible = true;
    let mobilePauseUntil = 0;

    function render() {
        const width = band.clientWidth;
        const s = width / 1440;
        const norm = 706;
        const yBase = band.clientHeight / 2;

        cards.forEach((card, i) => {
            const t = mod(
                i * pitch - travel + perimeter / 2,
                perimeter
            ) - perimeter / 2;

            const d = Math.abs(t) / norm;

            const pushed = t * (1 + .083 * (t / norm) ** 2);
            const x = 720 + pushed;
            const w = 170 + 48 * Math.min(d * d, 2);

            const xl = x - w / 2;
            const xr = x + w / 2;

            if (xr < -50 || xl > 1490) {
                card.style.visibility = "hidden";
                return;
            }

            card.style.visibility = "visible";

            const edge = z => {
                return 280 + 92 * Math.pow(
                    Math.min(Math.abs(z - 720) / norm, 1.5),
                    2.6
                );
            };

            const hl = edge(xl);
            const hr = edge(xr);
            const H = Math.max(hl, hr);

            const topL = (H - hl) / 2;
            const topR = (H - hr) / 2;
            const botL = topL + hl;
            const botR = topR + hr;

            card.style.width = `${w * s}px`;
            card.style.height = `${H * s}px`;

            card.style.transform = `translate3d(
                ${(x - w / 2) * s}px,
                ${yBase - H * s / 2 - 8 * d * d * s}px,
                0
            )`;

            const r = 15;
            const n = v => Number((v * s).toFixed(2));

            const poly = `
                M ${n(r)} ${n(topL)}
                L ${n(w-r)} ${n(topR)}
                Q ${n(w)} ${n(topR)} ${n(w)} ${n(topR+r)}
                L ${n(w)} ${n(botR-r)}
                Q ${n(w)} ${n(botR)} ${n(w-r)} ${n(botR)}
                L ${n(r)} ${n(botL)}
                Q 0 ${n(botL)} 0 ${n(botL-r)}
                L 0 ${n(topL+r)}
                Q 0 ${n(topL)} ${n(r)} ${n(topL)}
                Z
            `;

            card.style.clipPath = `path("${poly}")`;
            card.style.zIndex = String(50 - Math.round(d * 7));
        });
    }

    band.addEventListener("click", e => {
        if (performance.now() < suppressUntil) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);

    band.addEventListener("pointerdown", e => {
        if (innerWidth <= 820 || e.button !== 0) return;

        drag = true;
        lastX = e.clientX;
        downX = e.clientX;
        lastStamp = performance.now();
        velocity = 0;
    });

    band.addEventListener("pointermove", e => {
        if (!drag || innerWidth <= 820) return;

        const now = performance.now();
        const dx = e.clientX - lastX;
        const dt = Math.max((now - lastStamp) / 1000, .012);

        travel -= dx / (band.clientWidth / 1440);

        velocity = Math.max(
            -900,
            Math.min(
                900,
                -dx / (band.clientWidth / 1440) / dt
            )
        );

        if (Math.abs(e.clientX - downX) > 6) {
            suppressUntil = now + 220;

            if (!band.hasPointerCapture(e.pointerId)) {
                band.setPointerCapture(e.pointerId);
                band.classList.add("dragging");
            }
        }

        lastX = e.clientX;
        lastStamp = now;
        render();
    });

    function end(e) {
        if (!drag) return;

        drag = false;
        band.classList.remove("dragging");

        if (band.hasPointerCapture(e.pointerId)) {
            band.releasePointerCapture(e.pointerId);
        }
    }

    band.addEventListener("pointerup", end);
    band.addEventListener("pointercancel", end);

    mobile.addEventListener("pointerdown", () => {
        mobilePauseUntil = performance.now() + 3000;
    }, { passive: true });

    mobile.addEventListener("pointerup", () => {
        mobilePauseUntil = performance.now() + 2600;
    }, { passive: true });

    mobile.addEventListener("scroll", () => {
        if (performance.now() < mobilePauseUntil) return;
        mobilePauseUntil = performance.now() + 450;
    }, { passive: true });

    if ("IntersectionObserver" in window) {
        new IntersectionObserver(entries => {
            visible = entries[0]?.isIntersecting ?? true;
        }, { threshold: .01 }).observe(band);
    }

    const mobileWidth = () => mobile.scrollWidth / 2;

    const motionFrame = stamp => {
        if (visible && !document.hidden && !reduced) {
            const dt = last
                ? Math.min((stamp - last) / 1000, .05)
                : 0;

            if (innerWidth > 820) {
                if (!drag) {
                    travel += 49 * dt + velocity * dt;
                    velocity *= Math.pow(.06, dt);
                }

                render();
            } else if (stamp > mobilePauseUntil) {
                mobile.scrollLeft += 35 * dt;

                if (mobile.scrollLeft >= mobileWidth()) {
                    mobile.scrollLeft -= mobileWidth();
                }
            }
        }

        last = stamp;
        requestAnimationFrame(motionFrame);
    };

    requestAnimationFrame(motionFrame);

    addEventListener("resize", () => {
        if (innerWidth > 820) {
            render();
        }
    });

    render();

    if (!reduced) {
        const nodes = [
            document.querySelector(".hero-top .pill"),
            ...document.querySelectorAll(".hero-top .line"),
            document.querySelector(".hero-top .intro"),
            band,
            document.querySelector(".hero-bottom")
        ].filter(Boolean);

        nodes.forEach((node, i) => {
            node.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(26px)",
                        filter: "blur(8px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)",
                        filter: "blur(0px)"
                    }
                ],
                {
                    duration: 700,
                    delay: 130 + i * 105,
                    easing: "cubic-bezier(.2,.7,.2,1)",
                    fill: "both"
                }
            );
        });

        document.querySelectorAll(".draw-line").forEach((path, i) => {
            const length = path.getTotalLength();

            path.style.strokeDasharray = String(length);

            path.animate(
                [
                    { strokeDashoffset: length },
                    { strokeDashoffset: 0 }
                ],
                {
                    duration: 900,
                    delay: 950 + i * 160,
                    fill: "forwards"
                }
            );
        });
    }
}

initArc();

const inquiry = document.getElementById("inquiryForm");

if (inquiry) {
    const params = new URLSearchParams(location.search);
    const requested = params.get("bouquet");
    const topic = params.get("topic");

    if (requested && products.some(p => p.name === requested)) {
        inquiry.querySelector('[name="subject"]').value =
            `Question about ${requested}`;

        inquiry.querySelector('[name="message"]').value =
            `Hello! I would like to ask about the ${requested} bouquet. `;
    }

    if (topic === "custom") {
        inquiry.querySelector('[name="topic"]').value = "Custom flowers";
    }

    const status = document.getElementById("formStatus");

    inquiry.addEventListener("submit", e => {
        if (["localhost", "127.0.0.1", ""].includes(location.hostname)) {
            e.preventDefault();

            status.textContent =
                "Preview mode: this form starts receiving messages after you deploy the site to Netlify and enable Forms.";

            return;
        }

        if (!location.hostname.endsWith(".netlify.app")) {
            e.preventDefault();

            status.textContent =
                "Contact form delivery requires Netlify Forms configuration on the published website.";
        }
    });
}

const backupFlowerPhotos = [
    "https://images.pexels.com/photos/5948741/pexels-photo-5948741.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/16038103/pexels-photo-16038103.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/8305332/pexels-photo-8305332.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/7652705/pexels-photo-7652705.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/10728465/pexels-photo-10728465.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5566994/pexels-photo-5566994.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const flowerPlaceholder = "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
            <rect width="600" height="800" fill="#DAE7C7"/>
            <g transform="translate(300 365)">
                <g fill="#F3DDE4" stroke="#08482D" stroke-width="5">
                    <ellipse cy="-85" rx="60" ry="105"/>
                    <ellipse cy="85" rx="60" ry="105"/>
                    <ellipse cx="-85" rx="105" ry="60"/>
                    <ellipse cx="85" rx="105" ry="60"/>
                </g>
                <circle r="48" fill="#EBC16F" stroke="#08482D" stroke-width="5"/>
            </g>
            <text x="300" y="610" fill="#08482D" font-family="Georgia" font-size="38" text-anchor="middle">
                Fresh Blooms
            </text>
        </svg>
    `);

let flowerPhotoIndex = 0;

function protectFlowerImages(root = document) {
    const images = [];

    if (root.matches?.("img")) {
        images.push(root);
    }

    images.push(...root.querySelectorAll("img"));

    images.forEach(img => {
        if (img.dataset.fallbackReady) return;

        img.dataset.fallbackReady = "true";

        const backup = backupFlowerPhotos[
            flowerPhotoIndex++ % backupFlowerPhotos.length
        ];

        let attempt = 0;

        function useBackup() {
            if (attempt === 0) {
                attempt++;
                img.src = backup;
            } else {
                attempt++;
                img.src = flowerPlaceholder;
                img.removeEventListener("error", useBackup);
            }
        }

        img.addEventListener("error", useBackup);

        if (img.complete && img.naturalWidth === 0 && img.src) {
            useBackup();
        }
    });
}

protectFlowerImages();

const imageObserver = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                protectFlowerImages(node);
            }
        });
    });
});

imageObserver.observe(document.body, {
    childList: true,
    subtree: true
});
