import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Copy, ListChecks, Rocket, Ticket } from "lucide-react";
import { PaymentLogos } from "@/components/registration/PaymentLogos";
import { useEffect, useState } from "react";
import ligaportalHeroCroppedAsset from "@/assets/ligaportal-hero-cropped.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "500% Quotenboost + 100€ Bonus – Willkommenspaket | bet-at-home" },
      {
        name: "description",
        content:
          "Sichere dir dein Startguthaben: 500% Quotenboost + bis zu 100 € Bonus. Wähle deine Wette und zünde den Boost im Wettschein.",
      },
      { property: "og:title", content: "500% Quotenboost + 100€ Bonus – Willkommenspaket" },
      {
        property: "og:description",
        content:
          "500% Quotenboost + bis zu 100 € Bonus. Wähle deine Wette und aktiviere den Boost im Wettschein.",
      },
    ],
  }),
  component: PromoWillkommensbonus,
});

const TERMS = [
  "Teilnahmeberechtigt sind Spieler mit Wohnsitz oder gewöhnlichem Aufenthalt in Deutschland, die sich ab dem 01.05.2025 Uhr registriert haben und noch kein Neukunden-Einzahlungsangebot in Anspruch genommen haben.",
  "Der Bonus beträgt 100% und kann einmalig aktiviert werden bei einer Einzahlung mit dem Bonuscode WELCOME100.",
  "Maximaler Bonus: 100 Euro bzw. der entsprechende Gegenwert in anderen Währungen, in Form von Bonusgeld.",
  "Umsatzbedingung: Einbezahlter Betrag und Bonus müssen innerhalb von 60 Tagen 6x zu einer Mindestquote von je 1.70 eingesetzt werden, ehe eine Auszahlung möglich ist.",
  "Der Bonus kann nicht mit anderen Aktionen kombiniert werden. Cashout-Wetten zählen nicht zum Umsatz.",
  "Bei Wetten, die abgerechnet werden, nachdem der Bonus storniert wurde oder verfallen ist, wird der mit gebundenem Guthaben erzielte Gewinn gutgebucht. Mit Bonusgeld erzielte Gewinne werden von bet-at-home einbehalten.",
  "Der Quotenboost gilt für eine beliebige Prematch-Einzelwette (Min. Quote = 1.20), versechsfacht die ausgewählte Wettquote und kann innerhalb von 30 Tagen 1x bei der Wettabgabe unter \u201cBonusangebote\u201d genutzt werden.",
  "Damit erzielte Extra-Gewinne sind Echtgeld und unterliegen keinen Umsatzbedingungen. Maximaler Extra-Gewinn: 30 Euro.",
  "In folgenden Fällen behält sich bet-at-home nach alleinigem Ermessen das Recht vor, das im Zusammenhang mit dem Promotionangebot gewährte Guthaben sowie damit erzielte Gewinne zu stornieren oder etwaige zu Unrecht erlangte Beträge zurückzufordern: wenn der Kunde gegen eine Bedingung des Promotionangebots verstößt; wenn der begründete Verdacht besteht, dass ein Kunde alleine oder im Zusammenwirken mit anderen Kunden die Teilnahmebedingungen des Promotionangebots aushebelt oder dies versucht; wenn ein Kunde das Promotionangebot erschlichen oder durch Betrug erlangt hat.",
  "Mit der Teilnahme an dieser Promotion akzeptiert der Spieler die Teilnahmebedingungen sowie die Allgemeinen Geschäftsbedingungen von bet-at-home.",
  "bet-at-home behält sich das Recht vor, diese Promotion jederzeit und nach eigenem Ermessen ändern oder beenden zu können.",
];

function PromoWillkommensbonus() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("WELCOME100");
      setCopied(true);
      setTimeout(() => setCopied(false), 10000);
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-dvh bg-background pb-36 md:pb-0">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0A2540]/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <img src="/bet-at-home-logo-white.svg" alt="bet-at-home" className="h-5 w-auto" />
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#0A2540] text-white">
        <div className="absolute inset-0 hidden md:block overflow-hidden">
          <div className="absolute left-1/2 top-1/2 aspect-video min-h-full min-w-full -translate-x-1/2 -translate-y-1/2">
            <iframe
              className="h-full w-full pointer-events-none"
              src="https://www.youtube.com/embed/htYA9iGmQQY?autoplay=1&mute=1&loop=1&playlist=htYA9iGmQQY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&fs=0&disablekb=1&iv_load_policy=3&cc_load_policy=0"
              title="bet-at-home Willkommensbonus Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="lazy"
              frameBorder="0"
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-0 h-[50%] bg-cover bg-top bg-no-repeat md:hidden"
          style={{ backgroundImage: `url(${ligaportalHeroCroppedAsset.url})` }}
        />
        <div className="absolute inset-x-0 top-0 h-[50%] bg-[#0A2540]/75 md:h-full md:bg-[#0A2540]/70" />
        <div
          className="absolute inset-x-0 top-[35%] h-[15%] md:hidden"
          style={{ background: "linear-gradient(to bottom, transparent 0%, #0A2540 100%)" }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.7) 55%, rgba(10,37,64,0.3) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 pb-8 pt-8 sm:px-6 md:max-w-6xl md:grid md:grid-cols-2 md:gap-12 md:py-20 lg:py-24 lg:gap-16">
          <div className="md:flex md:flex-col md:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur"
            >
              bet-at-home Willkommensbonus
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-[36px] font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-brand">500% Quotenboost</span>
              {"\u00a0"}
              <br />+ 100€ Bonus
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-base font-semibold text-white/90 sm:text-lg md:mt-5 md:text-xl"
            >
              Sichere dir dein Startguthaben und vervielfache eine Quote deiner Wahl.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 hidden md:block"
            >
              <a
                href="#"
                className="group inline-flex h-[60px] items-center justify-center gap-2 rounded-2xl bg-brand px-8 text-base font-bold text-brand-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-[0.98]"
              >
                100€ Bonus & Boost sichern
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <div className="md:flex md:flex-col md:justify-center md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="relative mt-5 md:mt-0"
            >
              <AnimatePresence>
                {copied && (
                  <motion.div
                    key="copied-tooltip"
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="absolute -top-11 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-success px-3.5 py-1.5 text-xs font-extrabold text-[#0A2540] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  >
                    In Zwischenablage kopiert!
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={copyCode}
                className={`flex w-full items-center gap-3 rounded-3xl border p-3 text-left backdrop-blur transition-all active:scale-[0.99] md:p-4 ${
                  copied
                    ? "border-success bg-success/15 shadow-[0_0_28px_rgba(132,204,22,0.45)]"
                    : "border-white/20 bg-white/[0.08] hover:bg-white/[0.12] hover:border-white/30"
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-success text-white sm:h-14 sm:w-14">
                  <Ticket className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                    Bonuscode
                  </span>
                  <span className="block truncate font-mono text-[22px] font-black leading-none tracking-wider text-white sm:text-[28px]">
                    WELCOME100
                  </span>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-success px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors sm:px-3 sm:text-xs">
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Kopiert" : "Kopieren"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {copied && (
                  <motion.div
                    key="redeem-cta"
                    initial={{ height: 0, opacity: 0, y: -8 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <a
                      href="#"
                      className="group mt-3 flex h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-brand text-base font-bold text-brand-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-[0.98]"
                    >
                      Jetzt registrieren und einlösen
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 rounded-3xl border border-white/15 bg-white/[0.06] p-4 backdrop-blur sm:p-5 md:mt-0"
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-white/70">
                <span>So funktioniert der 500% Welcome Boost</span>
              </div>
              <p className="mt-2 text-sm text-white/80">
                Wähle deine Wette und aktiviere den Boost im Wettschein.
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                    <ListChecks className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <span className="mt-1 text-sm font-bold text-white">1. Wette wählen</span>
                  <span className="text-[11px] leading-snug text-white/70">
                    Suche dir nach der Anmeldung ein Spiel aus dem gesamten Sportangebot aus.
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                    <Rocket className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                  <span className="mt-1 text-sm font-bold text-white">2. Boost zünden</span>
                  <span className="text-[11px] leading-snug text-white/70">
                    Aktiviere im Wettschein einfach den „500% WELCOME BOOST" für massiv höhere
                    Gewinne.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-12 pb-10 sm:px-6 md:py-16">
        <TermsDropdown />
        <div className="mt-6">
          <PaymentLogos singleRow />
        </div>
      </section>

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t border-border/60 bg-background/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 ease-out md:hidden ${
          scrolled ? "translate-y-0" : "translate-y-[calc(100%+1px)]"
        }`}
      >
        <div className="mx-auto max-w-2xl">
          <a
            href="#"
            className="group flex h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-brand text-base font-bold text-brand-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-[0.98]"
          >
            100€ Bonus & Boost sichern
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </main>
  );
}

function TermsDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-left transition-colors hover:bg-accent"
        aria-expanded={open}
      >
        <span className="text-sm font-extrabold text-foreground">Teilnahmebedingungen</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <ul className="space-y-3 px-4 pb-4 pt-1">
              {TERMS.map((t) => (
                <li key={t} className="flex gap-2 text-xs text-muted-foreground sm:text-sm">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}