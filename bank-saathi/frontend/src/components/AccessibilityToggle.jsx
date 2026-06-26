// AccessibilityToggle.jsx

export default function AccessibilityToggle({
  accessibility,
  setAccessibility,
}) {
  return (
    <button
      onClick={() => setAccessibility(!accessibility)}
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      {accessibility
        ? "Accessibility ON"
        : "Accessibility OFF"}
    </button>
  );
}