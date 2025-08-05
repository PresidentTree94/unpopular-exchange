"use client";
import styles from "./Details.module.css";

type SVGButton = string | React.ReactNode;
type Filter = [string, SVGButton[]];

export default function Details({
  maxWidth, breakWidth, leftFilter, rightFilter, bottomFilters,
}: Readonly<{
  maxWidth: number; /*Full width*/
  breakWidth: number; /*Width minus padding*/
  leftFilter?: Filter;
  rightFilter?: Filter;
  bottomFilters?: Filter[];
}>) {
  return (
    <details className={styles.details} style={{width: `min(100%, ${maxWidth}rem)`}}>
      <style jsx>{`
        @container (width < ${breakWidth}rem) {
          details div {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
      <summary>Filter Threads</summary>
      {leftFilter && rightFilter &&
      <div>
        <fieldset>
          <legend>{leftFilter[0]}</legend>
          {leftFilter[1]?.map((b, index) => (
            <button key={index}>{b}</button>
          ))}
        </fieldset>
        <fieldset>
          <legend>{rightFilter[0]}</legend>
          {rightFilter[1]?.map((b, index) => (
            <button key={index}>{b}</button>
          ))}
        </fieldset>
      </div>}
      {bottomFilters &&
        bottomFilters.map(([l, b], i) => (
          <fieldset key={i}>
            {l && <legend>{l}</legend>}
            {b.map((f, j) => (
              <button key={j}>{f}</button>
            ))}
          </fieldset>
        ))
      }
    </details>
  );
}