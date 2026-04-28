import type { Skill } from '@/data/portfolio';

export default function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100 hover:border-blue-300 transition">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-blue-200 hover:border-blue-400 hover:text-blue-600 transition"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
