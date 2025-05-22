"use client";

import { Button } from "@/components/ui/button";
import Layer from "@/public/icons/Layer.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MentorshipPage() {
  const router = useRouter();

  const handleBookSession = () => {
    router.push("/mentorship/call-history");
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white-background mr-4 ml-4 rounded-lg p-4 sm:p-8 md:p-[92px] mb-[20px]">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-medium text-center">
          Unlock your career potential
        </h1>
      </div>
      <p className="text-center font-normal text-xs sm:text-base text-white-font mb-6 max-w-3xl">
        Struggling to land your dream job? The job market is competitive,
        <span className="hidden sm:inline">
          <br />
        </span>
        but the right guidance can set you apart.
      </p>

      <Button
        className="px-8 sm:px-20 py-2 w-full sm:w-auto"
        onClick={handleBookSession}
      >
        Book a session
      </Button>

      <div className="w-full mt-8">
        <p className="text-xs font-normal mb-4 md:text-center text-left">
          With one-on-one career coaching, you&apos;ll get:
        </p>
        <ul className="flex flex-col sm:flex-row gap-4 max-w-[900px] mx-auto">
          <li className="flex flex-col py-5 px-6 rounded-lg bg-orange-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-orange-dark" />
            <h2 className="text-base font-medium">
              Expert advice tailored to your career goals
            </h2>
            <p className="text-sm sm:text-base font-normal">
              Get one-on-one mentorship tailored to your career goals.
            </p>
          </li>
          <li className="flex flex-col py-5 px-6 rounded-lg bg-green-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-green-dark" />
            <h2 className="text-base font-medium">
              Interview Preparation & Salary Negotiation
            </h2>
            <p className="text-sm sm:text-base">
              Ace your interviews and secure the best offer.
            </p>
          </li>
          <li className="flex flex-col py-5 px-6 rounded-lg bg-blue-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-blue-dark" />
            <h2 className="text-base font-medium">
              Strategies to stand out in a crowded job market
            </h2>
            <p className="text-sm sm:text-base">
              Learn what top companies look for and position yourself for
              success.
            </p>
          </li>
        </ul>
      </div>

      {/* Success stories */}
      <div className="w-full mt-12 flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex-1 flex flex-col gap-2 max-w-[400px] lg:max-w-none">
          <h3 className="text-sm sm:text-lg md:text-[26px] font-medium mb-2 md:text-center text-left  lg:text-left">
            Success Stories & Numbers
          </h3>
          <p className="text-white-font text-sm sm:text-base md:text-center tex  lg:text-left">
            Land your dream job with expert guidance. Our career mentors have
            helped thousands of professionals break into top companies with
            tailored coaching, resume optimization, and insider hiring insights.
            Don&apos;t let job rejections hold you back—get the mentorship you
            need to succeed!
          </p>
        </div>
        <div className="flex-1 max-w-md space-y-4 w-full">
          <div className="bg-white-default rounded-[32px] px-5 py-3 md:px-6 md:py-4 shadow-sm">
            <p className="text-white-font font-normal text-xs md:text-sm sm:text-base">
              <span className="text-blue-600">85%</span> of our mentees land
              interviews within 4 weeks
            </p>
          </div>

          <div className="bg-white-default rounded-[32px] px-5 py-3 md:px-6 md:py-4 shadow-sm ml-6">
            <p className="text-white-font font-normal text-xs md:text-sm sm:text-base">
              <span className="text-blue-600">70%</span> secure job offers at
              top companies
            </p>
          </div>

          <div className="bg-white-default rounded-[32px] px-5 py-3 md:px-6 md:py-4 shadow-sm ml-14">
            <p className="text-white-font font-normal text-xs md:text-sm sm:text-base">
              <span className="text-blue-600">1,500+</span> professionals
              coached worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="w-full mt-12">
        <h3 className="text-sm md:text-xl sm:text-[26px] font-medium mb-6 text-center">
          Meet some of our expert mentors
        </h3>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
          {/* Mentor Card 1 */}
          <div className="bg-white rounded-2xl shadow-md w-full sm:max-w-[238px]">
            <Image
              src="/profile/david.png"
              alt="David Kim"
              width={238}
              height={277}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Mentor Card 2 */}
          <div className="bg-white rounded-2xl shadow-md w-full sm:max-w-[238px]">
            <Image
              src="/profile/sarah.png"
              alt="Sarah Johnson"
              width={238}
              height={277}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Mentor Card 3 */}
          <div className="bg-white rounded-2xl shadow-md w-full sm:max-w-[238px]">
            <Image
              src="/profile/aisha.png"
              alt="Aisha Roberts"
              width={238}
              height={277}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
