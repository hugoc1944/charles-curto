"use client";

export function GlobalGridLines() {
  const DESKTOP_COLUMNS = 14;

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[5]
        flex
      "
      aria-hidden="true"
    >
      {/* Desktop grid */}
      <div className="hidden md:flex w-full">
        {Array.from({ length: DESKTOP_COLUMNS }).map((_, i) => {
          const isFirst = i === 0;
          const isLast = i === DESKTOP_COLUMNS - 1;

          return (
            <div
              key={`grid-d-${i}`}
              className="relative flex-1"
            >
              {/* Main line — ultra soft */}
              <div
                className="absolute inset-y-0 left-0 w-px"
                style={{
                  backgroundColor: "rgba(0,0,0,0.022)",
                  boxShadow: "0 0 0.5px rgba(0,0,0,0.03)",
                }}
              />

              {/* Secondary offset line — barely perceptible */}
              {!isFirst && !isLast && (
                <div
                  className="absolute inset-y-0 left-[-17px] w-px"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.012)",
                    boxShadow: "0 0 0.5px rgba(0,0,0,0.02)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile grid — slightly clearer than desktop */}
      <div className="flex md:hidden w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`grid-m-${i}`}
            className="relative flex-1"
          >
            <div
              className="absolute inset-y-0 left-0 w-px"
              style={{
                backgroundColor: "rgba(0,0,0,0.035)",
                boxShadow: "0 0 0.5px rgba(0,0,0,0.04)",
              }}
            />
            <div
              className="absolute inset-y-0 left-[-17px] w-px"
              style={{
                backgroundColor: "rgba(0,0,0,0.018)",
                boxShadow: "0 0 0.5px rgba(0,0,0,0.025)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
