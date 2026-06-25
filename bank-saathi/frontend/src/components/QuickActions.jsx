export default function QuickActions({ handleAction }) {
  const actions = [
    {
      title: "Block Card",
      icon: "💳",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Check Balance",
      icon: "🏦",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "File Complaint",
      icon: "📝",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fraud Help",
      icon: "🛡️",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Panic Mode",
      icon: "🚨",
      color: "from-red-600 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {actions.map((action) => (
        <button
          key={action.title}
          onClick={() => handleAction(action.title)}
          className={`
            bg-linear-to-r
            ${action.color}
            rounded-3xl
            p-6
            text-white
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
            text-left
          `}
        >
          <div className="text-4xl mb-3">
            {action.icon}
          </div>

          <h3 className="font-semibold text-lg">
            {action.title}
          </h3>
        </button>
      ))}
    </div>
  );
}