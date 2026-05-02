"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, .btn, .cta, [data-cursor='interactive']";

const CURSOR_OFFSET = 6; // half of dot size
const RING_OFFSET = 20; // half of ring size

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const updatePointer = () => setIsTouch(mediaQuery.matches);
    updatePointer();
    mediaQuery.addEventListener("change", updatePointer);
    return () => mediaQuery.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    if (isTouch || typeof document === "undefined") return;
    document.body.classList.add("custom-cursor-enabled");
    return () => {
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, [isTouch]);

  useEffect(() => {
    if (isTouch || typeof window === "undefined") return;

    const setPosition = (x: number, y: number) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = window.requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.setProperty("--cursor-x", `${x - CURSOR_OFFSET}px`);
          dotRef.current.style.setProperty("--cursor-y", `${y - CURSOR_OFFSET}px`);
        }
        if (ringRef.current) {
          ringRef.current.style.setProperty("--cursor-x", `${x - RING_OFFSET}px`);
          ringRef.current.style.setProperty("--cursor-y", `${y - RING_OFFSET}px`);
        }
      });
    };

    const handleMove = (event: MouseEvent) => {
      setPosition(event.clientX, event.clientY);
      if (!isVisible) setIsVisible(true);
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      setIsInteractive((prev) => (prev === interactive ? prev : interactive));
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    const handleDown = () => setIsActive(true);
    const handleUp = () => setIsActive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseenter", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseenter", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isTouch, isVisible]);

  if (isTouch) return null;

  const dotClass = [
    styles.cursor,
    !isVisible && styles.hidden,
    isActive && styles.active,
    isInteractive && styles.interactive,
  ]
    .filter(Boolean)
    .join(" ");

  const ringClass = [
    styles.cursorRing,
    !isVisible && styles.hidden,
    isActive && styles.active,
    isInteractive && styles.interactive,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div ref={dotRef} className={dotClass} />
      <div ref={ringRef} className={ringClass} />
    </>
  );
}
