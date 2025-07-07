import React from "react";
import { Button, cn } from "@nextui-org/react"
import Link from "next/link";

interface WorkTogetherProps {
    locale: "en-AU" | "ja";
}

const WorkTogetherCopy = {
    en: {
        title: "Let’s Work Together",
        description: "I’m always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!",
        buttonText: "Contact Me"
    },
    ja: {
        title: "一緒に働きましょう",
        description: "新しい機会やコラボレーションに常にオープンです。お気軽にご連絡ください。",
        buttonText: "お問い合わせ"
    }
};
export const WorkTogether = ({ locale }:
    WorkTogetherProps
) => {
    return (
        <div className="w-full min-h-[360px] md:min-h-[600px] flex items-center justify-center py-10 lg:py-[80px] bg-cream">
            <div className="container h-full px-6 lg:px-0 text-center">
                <h4 className="text-heading02 lg:text-heading01 font-semibold text-accent mb-6">
                    {locale === "ja"
                        ? WorkTogetherCopy.ja.title
                        : WorkTogetherCopy.en.title}
                </h4>
                <p className={cn("text-body03 lg:text-body02 font-regular text-brown font-heebo mb-8  mx-auto",
                    locale === "ja" ? "max-w-full" : "max-w-[800px]"
                )}>
                    {locale === "ja"
                        ? WorkTogetherCopy.ja.description
                        : WorkTogetherCopy.en.description}
                </p>
                <Button
                    variant='solid'
                    size='md'
                    className="inline-block px-8 bg-accent text-cream rounded-lg hover:bg-accent/90 transition-colors font-heebo"
                >
                    <Link href={locale === "ja" ? "/ja/connect" : "/connect"} className="text-inherit">
                        {locale === "ja"
                            ? WorkTogetherCopy.ja.buttonText
                            : WorkTogetherCopy.en.buttonText}
                    </Link>
                </Button>
            </div>
        </div>
    )
}