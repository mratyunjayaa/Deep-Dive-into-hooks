import { useEffect, useState } from "react";

const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "purple"
];

function ColorChanger() {
  const [color, setColor] = useState(
    localStorage.getItem("bgColor") || "#f4f6f8"
  );

  useEffect(() => {
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <section className="card">
      <h2>Background Color Changer</h2>

      <div className="btn-group">
        {COLORS.map((clr) => (
          <button
            key={clr}
            className="color-btn"
            style={{ backgroundColor: clr }}
            onClick={() => setColor(clr)}
          >
            {clr}
          </button>
        ))}
      </div>
    </section>
  );
}

export default ColorChanger;