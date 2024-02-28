
export default function MyRemainders() {
    return (
      <div id="remainder" className="w-80 h-80 border border-black bg-gray-100 absolute left-96 top-32 cursor-pointer">
        <header className="pl-4 mt-4">
          <h2 className="text-xl font-semibold text-blue-500">My Remainders</h2>
        </header>
        <main className="pl-4 mt-4">
          <div className="info h-16 w-72 bg-blue-200 text-gray-700 rounded-lg mb-2 flex flex-col justify-center">
            <h4 className="text-lg font-semibold ml-2">Cyber security session</h4>
            <small className="text-sm ml-2">Feb 6 9:00 am</small>
          </div>
          <div className="info h-16 w-72 bg-blue-200 text-gray-700 rounded-lg mb-2 flex flex-col justify-center">
            <h4 className="text-lg font-semibold ml-2">ML workshop</h4>
            <small className="text-sm ml-2">Feb 8 9:00 am</small>
          </div>
          <div className="info h-16 w-72 bg-blue-200 text-gray-700 rounded-lg flex flex-col justify-center">
            <h4 className="text-lg font-semibold ml-2">Cyber security session</h4>
            <small className="text-sm ml-2">Feb 19 9:00 am</small>
          </div>
        </main>
      </div>
    );
  }
  