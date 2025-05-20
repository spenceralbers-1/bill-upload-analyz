import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-4">Bill-Upload Analyzer</h1>
      <p className="text-gray-700 mb-8">Upload your utility bill to see how much you can save with community solar.</p>
      <input type="file" accept=".pdf,.jpg,.png" className="mb-4" disabled />
      <button className="bg-blue-600 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed" disabled>
        Coming Soon
      </button>
    </div>
  );
}

export default App;
