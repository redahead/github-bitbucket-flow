import { ShieldCheck, Lock } from "lucide-react";

const methods = [
  { name: "PayPal", src: "/payment/paypal.svg" },
  { name: "Maestro", src: "/payment/maestro.svg" },
  { name: "Mastercard", src: "/payment/mastercard.svg" },
  { name: "Klarna", src: "/payment/klarna.svg" },
  { name: "paysafecard", src: "/payment/paysafecard.svg" },
  { name: "Neteller", src: "/payment/neteller.svg" },
];

export function PaymentLogos({ singleRow = false }: { singleRow?: boolean }) {
  if (singleRow) {
    return (
      <div className="mx-auto flex w-[96%] items-center justify-between gap-1.5">
        {methods.map((m) => (
          <div
            key={m.name}
            className="flex h-7 flex-1 items-center justify-center rounded-md bg-white px-1 shadow-sm ring-1 ring-black/5"
          >
            <img src={m.src} alt={m.name} className="max-h-4 w-auto max-w-full object-contain" />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-center gap-2 py-1">
        {methods.map((m) => (
          <div
            key={m.name}
            className="flex h-8 items-center justify-center rounded-md bg-white px-2 shadow-sm ring-1 ring-black/5"
          >
            <img src={m.src} alt={m.name} className="h-5 w-auto" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        <span className="flex items-center gap-1">
          <ShieldCheck className="h-3 w-3" />
          SSL-Verschlüsselt
        </span>
        <span className="h-3 w-px bg-border" />
        <span className="flex items-center gap-1">
          <Lock className="h-3 w-3" />
          PCI-DSS konform
        </span>
      </div>
    </div>
  );
}
