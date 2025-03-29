import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Shield, Globe2, Landmark, BadgeDollarSign, Stethoscope, Scale as SecurityIcon, Square as GavelSquare } from 'lucide-react';

interface Institution {
  name: string;
  branch: 'Legislative' | 'Executive' | 'Judicial' | 'Independent';
  icon: React.ReactNode;
  description: string;
  details: {
    founded: string;
    headquarters: string;
    keyResponsibilities: string[];
    recentNews: string[];
  };
}

const institutions: Institution[] = [
  {
    name: "Congress",
    branch: "Legislative",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Track bills, votes, and legislative developments in the House and Senate",
    details: {
      founded: "1789",
      headquarters: "Washington, D.C.",
      keyResponsibilities: [
        "Making laws",
        "Declaring war",
        "Regulating interstate and foreign commerce",
        "Controlling taxing and spending policies"
      ],
      recentNews: [
        "New bipartisan infrastructure bill introduced",
        "Senate confirms new Supreme Court justice",
        "House passes defense spending bill"
      ]
    }
  },
  {
    name: "Department of Defense",
    branch: "Executive",
    icon: <Shield className="w-6 h-6" />,
    description: "Military operations, defense policy, and national security updates",
    details: {
      founded: "1947",
      headquarters: "The Pentagon, Arlington, Virginia",
      keyResponsibilities: [
        "Military operations",
        "Defense policy",
        "National security",
        "Military personnel management"
      ],
      recentNews: [
        "New defense strategy announced",
        "Joint military exercises completed",
        "Defense budget proposal released"
      ]
    }
  },
  // Add more institutions here...
];

function InstitutionPage() {
  const { institutionName } = useParams<{ institutionName: string }>();
  const institution = institutions.find(inst => 
    inst.name.toLowerCase().replace(/\s+/g, '-') === institutionName
  );

  if (!institution) {
    return (
      <div className="nyt-container">
        <h1 className="nyt-header">Institution Not Found</h1>
        <Link to="/" className="text-red-700 hover:text-red-900">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="nyt-container">
      <Link to="/" className="text-red-700 hover:text-red-900 mb-8 inline-block">← Back to Home</Link>
      
      <div className="nyt-card">
        <div className="nyt-icon">{institution.icon}</div>
        <div className="nyt-branch">{institution.branch}</div>
        <h1 className="nyt-card-title text-3xl mb-4">{institution.name}</h1>
        <p className="nyt-card-description text-lg mb-8">{institution.description}</p>

        <div className="grid gap-8">
          <section>
            <h2 className="nyt-section-title">Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Founded</h3>
                <p>{institution.details.founded}</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Headquarters</h3>
                <p>{institution.details.headquarters}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="nyt-section-title">Key Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              {institution.details.keyResponsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="nyt-section-title">Recent News</h2>
            <ul className="space-y-4">
              {institution.details.recentNews.map((news, index) => (
                <li key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  {news}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default InstitutionPage; 