"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Button, cn } from "@nextui-org/react";

interface LanguageSwitcherProps {
    locale: "en-AU" | "ja";
}

export function LanguageSwitcher({
    locale
}: LanguageSwitcherProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

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
        <div className="flex items-center space-x-2">
            <Button
                size="sm"
                color="primary"
                // variant={locale === "en-AU" ? "solid" : "light"}
                onClick={() => handleChange("en-AU")}
                className={cn("text-sm text-main mr-2", locale === "en-AU" ? "font-semibold bg-bone" : "font-normal bg-transparent")}
            >
                EN
            </Button>
            {" "}/
            <Button
                size="sm"
                variant={locale === "ja" ? "solid" : "light"}
                onClick={() => handleChange("ja")}
                className={cn("text-sm text-main", locale === "ja" ? "font-semibold bg-bone" : "font-normal bg-transparent")}
            >
                日本語
            </Button>
        </div>
    );
}
