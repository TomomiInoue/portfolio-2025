"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import NextImage from "next/image";
import { timelineElements } from "@/app/constants/timeline";

export const TimelineComponent = () => {


  return (
    <VerticalTimeline>
      {timelineElements.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          date={item.date}
          contentStyle={{ background: "#FFFCF5", color: "#4E3B31", boxShadow: "none"}}
          contentArrowStyle={{ borderRight: "7px solid #FFFCF5" }}
          iconStyle={{ background: "#FFFCF5", border: "none" }}
        >
          <h3 className="text-display05 text-accent mb-5">{item.date}</h3>
            <h3 className="text-heading03 mb-3">{item.title}</h3>
            <p className="text-caption01 mb-4 font-normal font-heebo leading-snug">{item.description}</p>
            <div className="w-full flex justify-center items-center">
            {item.image && (
            <NextImage
              src={item.image.src }
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="rounded-lg object-contain mt-4 justify-items-center text-center"
              />
            )}
            </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
