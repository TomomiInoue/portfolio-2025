"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const LOCALES = [
    { code: "en-AU", label: "EN" },
    { code: "ja", label: "日本語" },
];

export function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentLocale = LOCALES.find(l =>
        pathname?.startsWith(`/${l.code}/`)
    )?.code || "en-AU";

    const handleChange = (newLocale: string) => {
        // Build next path preserving query params
        const params = Array.from(searchParams.entries());
        const search = params.length > 0
            ? "?" + params.map(([k, v]) => `${k}=${v}`).join("&")
            : "";
        // Remove old locale prefix, then add new one
        const pathWithoutLocale = pathname!.replace(/^\/[^/]+/, "");
        const newPath = `/${newLocale}${pathWithoutLocale}${search}`;
        router.push(newPath);
    };

    return (
        <select
            value={currentLocale}
            onChange={(e) => handleChange(e.target.value)}
            className="border rounded px-2 py-1 bg-white dark:bg-gray-800"
        >
            {LOCALES.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    );
}
