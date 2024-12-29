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
          contentStyle={{ background: "#F1F3E6", color: "#4E3B31" }}
          contentArrowStyle={{ borderRight: "7px solid #F1F3E6" }}
        >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
            {item.image && (
            <NextImage
              src={item.image.src }
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              className="rounded-lg object-contain"
              />
            )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
