import React from 'react';

const InfoCardsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-purple-500 to-blue-500 text-white p-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <svg className="w-8 h-8 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10 10 10 0 00-10-10zm-1 17.93a7.965 7.965 0 01-5.684-2.229 7.965 7.965 0 01-2.229-5.684c0-1.704.528-3.288 1.508-4.657.066.52.158 1.027.274 1.525a13.055 13.055 0 001.46 3.468 8.09 8.09 0 002.209 2.208c.001 0 .002.001.003.002a13.053 13.053 0 003.468 1.46c.498.116 1.005.208 1.525.274-.765 1.483-1.849 2.737-3.199 3.69a7.965 7.965 0 01-3.339.917zm2.032-9.747a13.067 13.067 0 00-3.468-1.46c-.497-.115-1.004-.208-1.524-.274-.149-.669-.21-1.378-.185-2.084 1.369-.98 2.953-1.508 4.657-1.508.768 0 1.525.098 2.258.287.99.243 1.942.62 2.809 1.11a10.059 10.059 0 00-2.848 3.929c-.002 0-.002.001-.003.001-.294.499-.61.988-.948 1.467z"></path></svg>
            <div>
              <h3 className="text-2xl font-bold">Documentation</h3>
              <p className="text-gray-400">Participant learning platform</p>
            </div>
          </div>
          <a href="#start-learning" className="text-purple-500 hover:underline">Start learning →</a>
        </div>
        
          {/* <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-gray-400 mr-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 22c-1.105 0-2-.895-2-2H4a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4.171l-2.83 2.83c-.39.391-.902.61-1.42.61H9zm-5-6h6v1.17l2.83-2.83H20v-4h-6v-4a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2zm2-4h8v2H6v-2z"></path></svg>
              <div>
                <h3 className="text-2xl font-bold">Live Chat</h3>
                <p className="text-gray-400">Platform where you can ask questions to experienced participants</p>
              </div>
            </div>
            <a href="#find-mentor" className="text-purple-500 hover:underline">Find a mentor →</a>
          </div> */}
      </div>
    </section>
  );
};

export default InfoCardsSection;
