import React from "react";
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { newsScript } from "./data/news";

export const NewsShortVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineStart = 0;
  const headlineDuration = 6 * fps;

  const scene1Start = 7 * fps;
  const scene2Start = 13 * fps;
  const scene3Start = 19 * fps;
  const finalStart = 23 * fps;

  const renderTextBlock = (
    start: number,
    duration: number,
    title: string,
    content: string,
    color: string
  ) => {
    const relative = frame - start;
    const opacity = interpolate(relative, [0, 15, duration - 15, duration], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const y = interpolate(relative, [0, duration], [30, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    return (
      <Sequence key={`${title}-${start}`} from={start} durationInFrames={duration}>
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            top: 180,
            opacity,
            transform: `translateY(${y}px)`,
            transition: "all 0.2s ease",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color,
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 40,
              lineHeight: 1.2,
              fontWeight: 800,
              color: "white",
              maxWidth: 840,
            }}
          >
            {content}
          </div>
        </div>
      </Sequence>
    );
  };

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #07111F 0%, #101B31 45%, #132540 100%)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 20%, rgba(76, 201, 240, 0.22), transparent 25%), radial-gradient(circle at 80% 60%, rgba(255, 94, 91, 0.12), transparent 30%)",
        }}
      />

      <Sequence from={headlineStart} durationInFrames={headlineDuration}>
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 160,
            maxWidth: 700,
            opacity: interpolate(frame, [0, 20, 120, 180], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${interpolate(frame, [0, 120], [30, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px)`,
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#4CC9F0",
              fontWeight: 700,
            }}
          >
            ALERTA
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 0.96,
              fontWeight: 900,
              marginTop: 18,
              color: "#FFFFFF",
            }}
          >
            {newsScript.headline}
          </div>
        </div>
      </Sequence>

      {renderTextBlock(
        scene1Start,
        6 * fps,
        "PONTO 01",
        newsScript.points[0],
        "#FFB703"
      )}

      {renderTextBlock(
        scene2Start,
        6 * fps,
        "PONTO 02",
        newsScript.points[1],
        "#4CC9F0"
      )}

      {renderTextBlock(
        scene3Start,
        6 * fps,
        "PONTO 03",
        newsScript.points[2],
        "#FF5E5B"
      )}

      <Sequence from={finalStart} durationInFrames={5 * fps}>
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 170,
            background: "rgba(9, 19, 36, 0.72)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 26,
            padding: "28px 30px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            opacity: interpolate(frame - finalStart, [0, 10, 100, 150], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            transform: `translateY(${interpolate(frame - finalStart, [0, 120], [20, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px)`,
          }}
        >
          <div
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#9AE6B4",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            RESUMO
          </div>

          <div
            style={{
              fontSize: 34,
              lineHeight: 1.2,
              fontWeight: 700,
              color: "#F8FAFC",
            }}
          >
            {newsScript.conclusion}
          </div>
        </div>
      </Sequence>

      <div
        style={{
          position: "absolute",
          left: 80,
          right: 80,
          bottom: 70,
          height: 8,
          borderRadius: 999,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${(frame / (25 * fps)) * 100}%`,
            height: "100%",
            background: "linear-gradient(90deg, #4CC9F0 0%, #FF5E5B 100%)",
            borderRadius: 999,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 80,
          top: 80,
          fontSize: 18,
          letterSpacing: 2,
          color: "#D9E7FF",
          fontWeight: 700,
          opacity: 0.8,
        }}
      >
        09:16
      </div>
    </AbsoluteFill>
  );
};