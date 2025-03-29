import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Shield, Globe2, Landmark, BadgeDollarSign, Stethoscope, Scale as SecurityIcon, Square as GavelSquare, Calendar, Newspaper } from 'lucide-react';

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
    history?: string;
    imageUrl?: string;
    upcomingEvents?: {
      date: string;
      title: string;
      description: string;
    }[];
    newsFeed?: {
      title: string;
      source: string;
      timestamp: string;
      url: string;
    }[];
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
      ],
      history: "The United States Congress was established by the Constitution in 1789, making it one of the oldest legislative bodies in the world. It was created as a bicameral legislature with the House of Representatives and the Senate, designed to balance the interests of both large and small states. The first Congress convened in New York City in 1789, with George Washington being inaugurated as the first President. Over the centuries, Congress has played a crucial role in shaping American democracy, from passing the Bill of Rights in 1791 to major legislative achievements like the Civil Rights Act of 1964 and the Affordable Care Act of 2010. The Capitol Building, where Congress meets, has become an enduring symbol of American democracy.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/US_Capitol_west_side.JPG/1280px-US_Capitol_west_side.JPG",
      upcomingEvents: [
        {
          date: "2024-03-20",
          title: "House Judiciary Committee Hearing",
          description: "Oversight hearing on federal law enforcement"
        },
        {
          date: "2024-03-22",
          title: "Senate Foreign Relations Committee Meeting",
          description: "Discussion on international security policy"
        },
        {
          date: "2024-03-25",
          title: "Joint Session",
          description: "State of the Union address"
        }
      ],
      newsFeed: [
        {
          title: "Congress Passes Major Spending Bill",
          source: "Reuters",
          timestamp: "2 hours ago",
          url: "#"
        },
        {
          title: "Senate Committee Advances Judicial Nomination",
          source: "AP News",
          timestamp: "4 hours ago",
          url: "#"
        },
        {
          title: "House Speaker Announces New Legislative Priorities",
          source: "Politico",
          timestamp: "6 hours ago",
          url: "#"
        }
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
  }
];

function InstitutionPage() {
  const { institutionName } = useParams<{ institutionName: string }>();
  
  // Find the institution and handle the case where it's not found
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

  // Helper function to safely render optional sections
  const renderSection = (title: React.ReactNode, content: React.ReactNode) => (
    <section className="mb-8">
      <h2 className="nyt-section-title">{title}</h2>
      {content}
    </section>
  );

  return (
    <div className="nyt-container">
      <Link to="/" className="text-red-700 hover:text-red-900 mb-8 inline-block">← Back to Home</Link>
      
      <div className="nyt-card">
        <div className="nyt-icon">{institution.icon}</div>
        <div className="nyt-branch">{institution.branch}</div>
        <h1 className="nyt-card-title text-3xl mb-4">{institution.name}</h1>
        <p className="nyt-card-description text-lg mb-8">{institution.description}</p>

        {/* History Section */}
        {institution.details.history && renderSection(
          "History",
          <p className="nyt-card-description leading-relaxed">{institution.details.history}</p>
        )}

        {/* Image Section */}
        {institution.details.imageUrl && renderSection(
          "Location",
          <img 
            src={institution.details.imageUrl} 
            alt={`${institution.name} building`}
            className="w-full h-auto rounded-lg shadow-md"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        )}

        {/* Overview Section */}
        {renderSection(
          "Overview",
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
        )}

        {/* Key Responsibilities Section */}
        {renderSection(
          "Key Responsibilities",
          <ul className="list-disc pl-6 space-y-2">
            {institution.details.keyResponsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        )}

        {/* Upcoming Events Section */}
        {institution.details.upcomingEvents && renderSection(
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Events to Watch
          </div>,
          <div className="space-y-4">
            {institution.details.upcomingEvents.map((event, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="text-sm text-red-700 mb-1">{event.date}</div>
                <h3 className="font-bold mb-1">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* News Feed Section */}
        {institution.details.newsFeed && renderSection(
          <div className="flex items-center gap-2">
            <Newspaper className="w-5 h-5" />
            Latest News
          </div>,
          <div className="space-y-4">
            {institution.details.newsFeed.map((news, index) => (
              <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold hover:text-red-700">
                    <a href={news.url}>{news.title}</a>
                  </h3>
                  <span className="text-sm text-gray-500">{news.timestamp}</span>
                </div>
                <div className="text-sm text-gray-600">{news.source}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default InstitutionPage; 