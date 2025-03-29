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
      description: "National security strategy and policy coordination"
    },
    {
      name: "Supreme Court",
      branch: "Judicial",
      icon: <GavelSquare className="w-6 h-6" />,
      description: "Supreme Court decisions, oral arguments, and constitutional interpretation"
    }
  ];

  const branchColors = {
    Legislative: 'bg-purple-100 text-purple-800',
    Executive: 'bg-blue-100 text-blue-800',
    Judicial: 'bg-red-100 text-red-800',
    Independent: 'bg-green-100 text-green-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Landmark className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">GovWatch</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Updates
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              US Government News Monitor
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Stay informed about the latest developments, decisions, and activities across key US government institutions. Real-time updates from trusted sources.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Branch filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(branchColors).map((branch) => (
            <button
              key={branch}
              className={`px-4 py-2 rounded-full text-sm font-medium ${branchColors[branch as keyof typeof branchColors]}`}
            >
              {branch}
            </button>
          ))}
        </div>

        {/* Institution Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${branchColors[inst.branch]}`}>
                      {inst.icon}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{inst.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${branchColors[inst.branch]}`}>
                    {inst.branch}
                  </span>
                </div>
                <p className="text-gray-500">{inst.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100">
                    Follow Updates
                  </button>
                  <span className="text-sm text-gray-500">Updated 5m ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose GovWatch?</h2>
            <p className="mt-4 text-lg text-gray-500">Comprehensive coverage of US government activities</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Real-time Updates", description: "Get news as it happens" },
              { title: "Trusted Sources", description: "Verified government and media sources" },
              { title: "Custom Alerts", description: "Personalized notification system" },
              { title: "Expert Analysis", description: "In-depth policy breakdowns" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <div className="bg-blue-700 mt-16">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Never Miss Important Updates</span>
            <span className="block text-xl mt-2">Get daily briefings straight to your inbox</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50">
                Start Free Trial
              </button>
            </div>
            <div className="ml-3 inline-flex">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900">
                View Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">About</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Company</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Team</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Resources</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">API</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Legal</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Social</h4>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">LinkedIn</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-base text-gray-400">
              © 2025 GovWatch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;