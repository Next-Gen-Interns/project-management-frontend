"use client";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-400">
      <div className="text-center px-6">
        {/* 401 */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold text-white">
          401
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-semibold text-white -mt-4">
          Authorization required.
        </p>

        {/* Illustration */}
        <div className="flex justify-center mt-10">
          <div className="relative flex items-end gap-10">
            {/* Left person */}
            <div className="w-16 h-28 bg-black rounded-full relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full" />
            </div>

            {/* Right person kicking */}
            <div className="relative">
              <div className="w-16 h-28 bg-black rounded-full" />
              <div className="absolute top-16 -right-10 w-16 h-4 bg-black rotate-[-25deg]" />
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full" />
            </div>
          </div>
        </div>

        {/* Action */}
        <button
          onClick={() => (window.location.href = "/login")}
          className="mt-10 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
