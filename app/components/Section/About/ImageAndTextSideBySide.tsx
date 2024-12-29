import React from "react";
import NextImage from "next/image";
import { ImageAndTextSideBySiteType } from "@/app/type/types";
import { cn } from "@/app/lib/utils";

interface Props {
    item: ImageAndTextSideBySiteType;
}

export const ImageAndTextSideBySide = ({item}: Props) => {
    return (
        <div className={cn("grid grid-cols-8 grid-rows-1 gap-5 items-center")}>
                       {/* Image Block */}
                       <div
                className={cn(
                    "relative h-[626px] col-span-3",
                    item.isImageRight ? "order-2 col-start-6" : "col-start-1"
                )}
            >
                <NextImage
                    src={item.image.src}
                    alt={item.image.alt}
                    width={417}
                    height={626}
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>

            {/* Text Block */}
            <div
                className={cn(
                   "flex flex-col gap-6 col-span-4",
                    item.isImageRight ? "order-1 col-start-2" : "col-start-5"
                )}
            >
                <h4 className="text-[40px] font-semibold">{item.title}</h4>
                <p className="text-lg font-normal">{item.text}</p>
            </div>
        </div>
      
    );
};
