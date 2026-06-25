// WorkflowTimeline.jsx

export default function WorkflowTimeline({ timeline }) {
  return (
    <div className="space-y-3">
      {timeline.map((step, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-3 shadow border-l-4 border-green-500"
        >
          ✓ {step}
        </div>
      ))}
    </div>
  );
}