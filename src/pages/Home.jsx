import { Link } from 'react-router-dom';
import teamMembersData from '../data/data';

const teamMembers = teamMembersData;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Our Team</h1>
          <p className="text-xl text-white/90">Meet the professionals behind our success</p>
        </div>

        {teamMembers.length === 0 ? (
          <div className="text-center text-white text-xl">
            No team members found.
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <ul className="space-y-4">
              {teamMembers.map((member) => (
                <li key={member.id}>
                  <Link
                    to={`/${member.slug}`}
                    className="block p-6 bg-white/90 hover:bg-white rounded-xl transition-all hover:scale-105 shadow-lg"
                  >
                    <h2 className="text-2xl font-bold text-[#004c8c] mb-1">
                      {member.name}
                    </h2>
                    <p className="text-gray-600">{member.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
