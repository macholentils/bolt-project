import React from 'react';
import { BookOpen, Shield, Globe2, Landmark, BadgeDollarSign, Stethoscope, Scale as SecurityIcon, Square as GavelSquare } from 'lucide-react';

interface Institution {
  name: string;
  branch: 'Legislative' | 'Executive' | 'Judicial' | 'Independent';
  icon: React.ReactNode;
  description: string;
}

function App() {
  const institutions: Institution[] = [
    {
      name: "Congress",
      branch: "Legislative",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Track bills, votes, and legislative developments in the House and Senate"
    },
    {
      name: "Department of Defense",
      branch: "Executive",
      icon: <Shield className="w-6 h-6" />,
      description: "Military operations, defense policy, and national security updates"
    },
    {
      name: "Department of State",
      branch: "Executive",
      icon: <Globe2 className="w-6 h-6" />,
      description: "Foreign policy, diplomatic relations, and international affairs"
    },
    {
      name: "Executive Office of the President",
      branch: "Executive",
      icon: <Landmark className="w-6 h-6" />,
      description: "White House policy decisions, executive orders, and presidential actions"
    },
    {
      name: "Federal Reserve",
      branch: "Independent",
      icon: <BadgeDollarSign className="w-6 h-6" />,
      description: "Monetary policy, economic outlook, and financial system stability"
    },
    {
      name: "Food and Drug Administration",
      branch: "Executive",
      icon: <Stethoscope className="w-6 h-6" />,
      description: "Drug approvals, food safety, and public health regulations"
    },
    {
      name: "National Security Council",
      branch: "Executive",
      icon: <SecurityIcon className="w-6 h-6" />,
      description: "National security policy coordination and crisis management"
    },
    {
      name: "Supreme Court",
      branch: "Judicial",
      icon: <GavelSquare className="w-6 h-6" />,
      description: "Landmark decisions, constitutional interpretations, and judicial proceedings"
    }
  ];

  const branches = ['Legislative', 'Executive', 'Judicial', 'Independent'] as const;

  return (
    <div className="nyt-container">
      <h1 className="nyt-header">Government Institutions</h1>
      
      {branches.map(branch => {
        const branchInstitutions = institutions.filter(inst => inst.branch === branch);
        if (branchInstitutions.length === 0) return null;

        return (
          <div key={branch} className="nyt-section">
            <h2 className="nyt-section-title">{branch} Branch</h2>
            <div className="grid gap-6">
              {branchInstitutions.map((institution, index) => (
                <div key={index} className="nyt-card">
                  <div className="nyt-icon">{institution.icon}</div>
                  <div className="nyt-branch">{institution.branch}</div>
                  <h3 className="nyt-card-title">{institution.name}</h3>
                  <p className="nyt-card-description">{institution.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;