"use client";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import MentorshipRating from "@/components/MentorshipRating";

const createMockCalls = () => [
  {
    id: 1,
    name: "Mr John Daniel",
    status: "Ongoing",
    meetingType: "Resume review",
    callDate: "12/02/2025",
    duration: "-",
    joinable: true,
  },
  {
    id: 2,
    name: "Mr John Daniel",
    status: "Upcoming",
    meetingType: "Resume review",
    callDate: "12/02/2025",
    duration: "-",
    joinable: true,
  },
  ...Array(20)
    .fill({
      name: "Mr John Daniel",
      status: "Completed",
      meetingType: "Resume review",
      callDate: "12/02/2025",
      duration: "45min",
      joinable: false,
    })
    .map((item, i) => ({ ...item, id: i + 3 })),
];

const statusStyles = {
  Ongoing: "bg-orange-100 text-orange-500",
  Upcoming: "bg-blue-100 text-blue-500",
  Completed: "bg-green-100 text-green-500",
};

const PAGE_SIZE = 10;

export default function CallHistoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [showRating, setShowRating] = useState<boolean>(false);
  const mockCalls = createMockCalls();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const filteredCalls = mockCalls.filter((call) => {
    const matchesSearch =
      call.name.toLowerCase().includes(search.toLowerCase()) ||
      call.meetingType.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || call.status === filter;
    return matchesSearch && matchesFilter;
  });

  const paginatedCalls = filteredCalls.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );
  const totalPages = Math.ceil(filteredCalls.length / PAGE_SIZE);

  const handleJoinCallClick = () => {
    setShowRating(true);
  };

  return (
    <div className="flex flex-col bg-white-background px-2 rounded-lg min-h-screen ">
      <header className="flex items-center justify-between w-full mb-8">
        <h1 className="font-medium text-black text-[16px] leading-5">
          Mentorship call history
        </h1>
      </header>
      <div className="flex justify-between gap-4 mb-6">
        <div className="flex gap-4  relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src="/icons/search-normal.svg"
              alt="search"
              width={16}
              height={16}
              className="text-gray-400"
            />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 rounded-xl pl-10 pr-4 py-1 w-64 focus:outline-none h-10"
          />
          <div className="relative" ref={dropdownRef}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image src="/icons/sort.svg" alt="sort" width={16} height={16} />
            </span>
            <button
              type="button"
              className="w-[150px] h-10 bg-white-default border border-gray-200 rounded-xl px-4 pl-8 text-left text-sm text-gray-700 font-normal flex items-center shadow focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              tabIndex={0}
            >
              {filter}
              <svg
                className="ml-auto w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-[225px] right-0 bg-white-default rounded-xl shadow-lg py-2">
                {["All", "Ongoing", "Upcoming", "Completed"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFilter(option);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-3 rounded-lg transition font-normal
                      ${
                        filter === option
                          ? "bg-blue-100 text-black font-semibold"
                          : "bg-white-default text-gray-400"
                      }
                      hover:bg-blue-50
                    `}
                    tabIndex={0}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <Button
          variant="default"
          size="sm"
          className="flex gap-4 py-4 px-8 rounded-xl"
        >
          + <span>Schedule call</span>
        </Button>
      </div>

      <div className="flex flex-col gap-6 w-full rounded-lg">
        {paginatedCalls.length === 0 ? (
          <div className="text-gray-400 text-center py-12">No calls found.</div>
        ) : (
          paginatedCalls.map((call) => (
            <div
              key={call.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white-default rounded-lg shadow-sm px-6 py-4 border border-gray-100"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-normal text-black text-base">
                    {call.name}
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      statusStyles[call.status as keyof typeof statusStyles]
                    }`}
                  >
                    {call.status}
                  </span>
                </div>
                <div className="text-gray-500 text-[10px] font-normal">
                  Meeting type: {call.meetingType} &nbsp; | &nbsp; Call date:{" "}
                  {call.callDate} &nbsp; | &nbsp; Duration: {call.duration}
                </div>
              </div>
              {call.status === "Upcoming" && (
                <a
                  href="#"
                  onClick={handleJoinCallClick}
                  className="text-blue-button font-medium text-sm mt-2 sm:mt-0 hover:underline"
                >
                  Join call
                </a>
              )}
            </div>
          ))
        )}
      </div>
      {/* Custom Pagination */}
      <div className="flex items-center gap-2 m-8 justify-center">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white-default text-gray-600 disabled:opacity-50"
        >
          &lt;
        </button>
        {(() => {
          const pages = [];
          if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
          } else {
            if (page <= 3) {
              pages.push(1, 2, 3, "...", totalPages);
            } else if (page >= totalPages - 2) {
              pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
              pages.push(1, "...", page, "...", totalPages);
            }
          }
          return pages.map((p, idx) =>
            p === "..." ? (
              <span key={idx} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p as number)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg border transition-colors ${
                  p === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white-default text-gray-700 border-gray-200"
                }`}
              >
                {p}
              </button>
            )
          );
        })()}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-lg border bg-white-default text-gray-600 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
      {showRating && <MentorshipRating onClose={() => setShowRating(false)} />}
    </div>
  );
}
