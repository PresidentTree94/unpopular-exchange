"use client";
import styles from "./Details.module.css";

type SVGButton = string | React.ReactNode;

export default function Details({
  maxWidth, breakWidth, leftLeg, left, rightLeg, right, bottomLeg, bottom,
}: Readonly<{
  maxWidth: number;
  breakWidth: number;
  leftLeg: string;
  left: SVGButton[];
  rightLeg: string;
  right: string[];
  bottomLeg?: string;
  bottom?: string[];
}>) {
  return (
    <details className={styles.details} style={{width: `min(100%, ${maxWidth}rem)`}}>
      <style jsx>{`
        @media (max-width: ${breakWidth}rem) {
          details div {
            flex-direction: column;
          }
        }
      `}</style>
      <summary>Filter Threads</summary>
      <div>
        <fieldset>
          <legend>{leftLeg}</legend>
          {left.map((b, index) => (
            <button key={index}>{b}</button>
          ))}
        </fieldset>
        <fieldset>
          <legend>{rightLeg}</legend>
          {right.map((b, index) => (
            <button key={index}>{b}</button>
          ))}
        </fieldset>
      </div>
      {bottomLeg &&
      <fieldset>
        <legend>{bottomLeg}</legend>
        {bottom?.map((b, index) => (
          <button key={index}>{b}</button>
        ))}
      </fieldset>}
    </details>
  );
}