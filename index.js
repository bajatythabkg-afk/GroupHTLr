/* ==========================================================
   GRoupHTLr — index.js
   ✏️✏️✏️ كل التعديلات بتاعتك في أول الملف ده بس ✏️✏️✏️
   ========================================================== */


/* ============================================
   1) إعدادات الموقع — عدّل من هنا
   ============================================ */
const SITE = {
    name: "GRoupHTLr",

    // ✏️ لوقو: لو عندك صورة لوقو حط رابطها هنا بين العلامتين ""
    // اتركها فاضية "" وهيستخدم الحرف G تلقائي
    logoImage: "",

    // ✏️ الروابط — غيّر كل رابط لرابطك أنت
    discord: "https://discord.gg/PUT-YOUR-LINK-HERE",
    youtube: "https://youtube.com/PUT-YOUR-LINK-HERE",
    github:  "https://github.com/PUT-YOUR-LINK-HERE",

    // ✏️ عدادات الهيرو
    membersCount: 500,   // عدد الأعضاء
    roomsCount:   20,    // عدد الرومات
};


/* ============================================
   2) الأقسام (الكاتيجوري) — عدّل الأسماء والوصف من هنا
   ============================================ */
const CATEGORIES = [
    { name: "ماهي البرمجة",         desc: "تعريف البرمجة وفكرتها الأساسية بطريقة بسيطة — أول خطوة قبل أي حاجة." },
    { name: "مفهوم البرمجة",        desc: "إزاي الكود بيشتغل، إزاي الكمبيوتر بيفهمك، والفرق بين اللغات والمستويات." },
    { name: "نصائح برمجية",         desc: "نصايح ذهبية للمبتدئين والمحترفين — إزاي تتعلم أسرع وتغلط أقل." },
    { name: "المعرفة البرمجية",     desc: "معلومات وخلفية نظرية مهمة بتفرق في شغل المطور الحقيقي." },
    { name: "تعليمات برمجية",       desc: "خطوات عملية وتمارين تطبيقية تطبق بيها اللي اتعلمته على طول." },
    { name: "تعليم الامن السبراني", desc: "أساسيات الأمن السيبراني وحماية الأنظمة — من أهم المجالات حاليًا." },
    { name: "كورس تعليم بايثون",    desc: "كورس كامل للغة بايثون من الصفر: متغيرات، شروط، دوال، ومشاريع صغيرة." },
    { name: "كورس برمجة التطبيقات", desc: "تعلم بناء تطبيقات موبايل حقيقية وتنزّلها على جهازك خطوة بخطوة." },
    { name: "مواقع مهمة للهكرز",    desc: "مجموعة مواقع وأدوات كل متعلم أمن سيبراني لازم يعرفها ويستخدمها." },
    { name: "كورس الهندسة الجامعية", desc: "شرح مبسّط لمواد هندسة الحاسب اللي بتواجه أي طالب في الجامعة." },
];


/* ============================================
   3) الرومات — ✏️ عدّل الأسماء والعناوين والكلام من هنا
   كل روم = اسم روم + (عنوان بالإفكت) + (كلام تحبه)
   ============================================ */
const ROOMS = [
    { name: "قاعة الترحيب",        title: "أهلًا بيك في GRoupHTLr 👋",           text: "هنا بنستقبل الأعضاء الجدد — عرّف بنفسك وقول إيه اللي جابك، وهتلاقي ناس تساعدك على طول." },
    { name: "روم-الأسئلة",         title: "اسأل براحتك، مفيش سؤال غبي ❓",      text: "عندك مشكلة في الكود؟ حاجة مش واضحة؟ اكتب سؤالك هنا والمجتمع هيرد عليك بسرعة." },
    { name: "روم-الكورسات",        title: "كل الكورسات في مكان واحد 📚",         text: "روابط وملفات كل الكورسات المتاحة في المجموعة — Python، تطبيقات، أمن سيبراني، وأكتر." },
    { name: "روم-المشاريع",        title: "شاركنا مشروعك الأول 🚀",              text: "بعت مشروعك وحط الكود وخد رأي الناس — التطبيق العملي هو أسرع طريق للاحتراف." },
    { name: "روم-الأمن-السيبراني", title: "ادخل عالم الأمن السيبراني 🔐",        text: "نقاشات ومصادر وأدوات الأمن السيبراني — للمبتدئين والمحترفين، بشكل قانوني وأمن." },
    { name: "روم-النقاش-العام",    title: "فضفضة مبرمجين ☕",                    text: "أي كلام برمجي أو حتى خارج البرمجة — النقاشات الحرة والخبرات بتتقال هنا." },
];


/* ==========================================================
   👇 تحت ده كود الشغل — متعدلش فيه إلا لو فاهم 👇
   ========================================================== */

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);


/* ---------- تشغيل أول ما الصفحة تفتح ---------- */
document.addEventListener("DOMContentLoaded", () => {

    // الروابط
    applyLinks();

    // اللوقو
    applyLogo();

    // عدادات الهيرو
    countUp($("#membersCount"), SITE.membersCount);
    countUp($("#roomsCount"),   SITE.roomsCount);

    // القايمة الجنب في الرئيسية
    if ($("#catList"))   renderCatTabs();
    if ($("#catFull"))   renderCatFull();

    // صفحة الرومات
    if ($("#roomsList")) renderRooms();

    // الموبايل منيو
    initMenu();

    // زرار الصعود
    initToTop();

    // أنيميشن الظهور
    initReveal();

    // عدادات الإحصائيات
    initCounters();

    // خلفية النجوم
    initStars();
});


/* ---------- تعبية الروابط تلقائي من SITE ---------- */
function applyLinks() {
    $$("[data-link]").forEach((a) => {
        const key = a.dataset.link;
        if (SITE[key]) a.href = SITE[key];
    });
}


/* ---------- اللوقو: صورة لو موجودة، وإلا حرف G ---------- */
function applyLogo() {
    $$(".logo-badge").forEach((b) => {
        if (SITE.logoImage && SITE.logoImage.trim() !== "") {
            b.innerHTML = `<img src="${SITE.logoImage}" alt="${SITE.name}">`;
        }
    });
}


/* ---------- القايمة الجنب (الرئيسية) ---------- */
function renderCatTabs() {
    const list  = $("#catList");
    const panel = $("#catPanel");

    CATEGORIES.forEach((c, i) => {
        const b = document.createElement("button");
        b.className = "cat-item" + (i === 0 ? " on" : "");
        b.innerHTML = `<span class="num">${String(i + 1).padStart(2, "0")}</span><span>${c.name}</span>`;
        b.onclick = () => {
            $$(".cat-item").forEach((x) => x.classList.remove("on"));
            b.classList.add("on");
            showCatPanel(c, i);
        };
        list.appendChild(b);
    });

    showCatPanel(CATEGORIES[0], 0);
}

function showCatPanel(c, i) {
    const panel = $("#catPanel");
    panel.innerHTML = `
        <span class="p-tag">القسم ${i + 1} من ${CATEGORIES.length}</span>
        <h3>${c.name}</h3>
        <p class="p-desc">${c.desc}</p>
        <div class="p-foot">
            <a href="category.html" class="btn btn-primary btn-sm">افتح الكاتيجوري</a>
            <a href="rooms.html" class="btn btn-outline btn-sm">رومات القسم</a>
        </div>`;
    panel.style.animation = "none";
    void panel.offsetWidth;
    panel.style.animation = "fadeUp .45s ease";
}


/* ---------- صفحة الكاتيجوري الكاملة ---------- */
function renderCatFull() {
    const box = $("#catFull");
    box.innerHTML = CATEGORIES.map((c, i) => `
        <a class="full-item" href="rooms.html">
            <span class="big-num">${String(i + 1).padStart(2, "0")}</span>
            <span class="fi-body">
                <h3>${c.name}</h3>
                <p>${c.desc}</p>
            </span>
            <svg class="arrow" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        </a>`).join("");
}


/* ---------- صفحة الرومات ---------- */
function renderRooms() {
    const box = $("#roomsList");
    box.innerHTML = ROOMS.map((r, i) => `
        <article class="room reveal in">
            <header class="room-head">
                <span class="room-num">${String(i + 1).padStart(2, "0")}</span>
                <h3>${r.name}</h3>
                <span class="room-hash">#${r.name.replace(/\s+/g, "-")}</span>
            </header>
            <blockquote class="room-title">"${r.title}"</blockquote>
            <blockquote class="room-text">${r.text}</blockquote>
        </article>`).join("");
}


/* ---------- الموبايل منيو ---------- */
function initMenu() {
    const t = $("#menuToggle");
    const n = $("#nav");
    if (!t || !n) return;

    t.onclick = () => {
        t.classList.toggle("open");
        n.classList.toggle("open");
    };

    $$("#nav a").forEach((a) => {
        a.addEventListener("click", () => {
            t.classList.remove("open");
            n.classList.remove("open");
        });
    });
}


/* ---------- زرار الصعود ---------- */
function initToTop() {
    const b = $("#toTop");
    if (!b) return;
    window.addEventListener("scroll", () => {
        b.classList.toggle("show", window.scrollY > 400);
    });
    b.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ---------- أنيميشن الظهور ---------- */
function initReveal() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
}


/* ---------- عدادات الإحصائيات ---------- */
function initCounters() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            countUp(e.target, +e.target.dataset.count);
            io.unobserve(e.target);
        });
    }, { threshold: 0.4 });
    $$(".counter").forEach((el) => io.observe(el));
}

function countUp(el, target) {
    if (!el) return;
    let cur = 0;
    const step = Math.max(1, Math.round(target / 60));
    const tick = () => {
        cur = Math.min(target, cur + step);
        el.textContent = cur.toLocaleString("en");
        if (cur < target) requestAnimationFrame(tick);
    };
    tick();
}


/* ---------- خلفية النجوم (كانفس) ---------- */
function initStars() {
    const cv = $("#bgCanvas");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let W, H, stars;

    function resize() {
        W = cv.width  = window.innerWidth;
        H = cv.height = window.innerHeight;
        const n = Math.min(90, Math.floor(W / 16));
        stars = Array.from({ length: n }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.4 + 0.3,
            s: Math.random() * 0.25 + 0.05,
            o: Math.random() * 0.5 + 0.1,
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        stars.forEach((st) => {
            st.y -= st.s;
            if (st.y < -4) { st.y = H + 4; st.x = Math.random() * W; }
            ctx.beginPath();
            ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${st.o})`;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
}
