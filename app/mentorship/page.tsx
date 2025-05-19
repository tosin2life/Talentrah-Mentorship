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
    <div className="flex flex-col items-center justify-center bg-white-background mr-4 ml-4 rounded-lg p-[92px] mb-[20px]">
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-4xl font-medium">Unlock your career potential</h1>
      </div>
      <p className="text-center font-normal text-base text-white-font mb-6">
        Struggling to land your dream job? The job market is competitive, <br />
        but the right guidance can set you apart.
      </p>

      <Button className="px-20 py-2" onClick={handleBookSession}>
        Book a session
      </Button>

      <div className="mt-8">
        <p className="text-xs font-normal mb-2">
          With one-on-one career coaching, you&apos;ll get:
        </p>
        <ul className="flex gap-2 max-w-[900px]">
          <li className="flex flex-col py-5 px-6 rounded-lg bg-orange-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-orange-dark" />
            <h2 className="text-base font-medium">
              Expert advice tailored to your career goals
            </h2>
            <p className="text-base font-normal">
              Get one-on-one mentorship tailored to your career goals.
            </p>
          </li>
          <li className="flex flex-col py-5 px-6 rounded-lg bg-green-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-green-dark" />
            <h2 className="text-base font-medium">
              Interview Preparation & Salary Negotiation
            </h2>
            <p>Ace your interviews and secure the best offer.</p>
          </li>
          <li className="flex flex-col py-5 px-6 rounded-lg bg-blue-light gap-2 flex-1 min-h-[150px]">
            <Layer className="w-[18px] h-[19px] text-blue-dark" />
            <h2 className="text-base font-medium">
              Strategies to stand out in a crowded job market
            </h2>
            <p>
              Learn what top companies look for and position yourself for
              success.
            </p>
          </li>
        </ul>
      </div>
      {/* Success stories */}
      <div className="flex gap-4 max-w-[810px] mt-20">
        <div className="flex flex-1 flex-col gap-2 w-[400px]">
          <h3 className="text-[26px] font-medium mb-2">
            Success Stories & Numbers
          </h3>
          <p className="text-white-font">
            Land your dream job with expert guidance. Our career mentors have
            helped thousands of professionals break into top companies with
            tailored coaching, resume optimization, and insider hiring insights.
            Don&apos;t let job rejections hold you back—get the mentorship you
            need to succeed!
          </p>
        </div>
        <div className="flex-1 max-w-md space-y-4 ">
          <div className="bg-white-default rounded-[32px] px-6 py-4 shadow-sm">
            <p className="text-white-font font-normal text-base">
              <span className="text-blue-600">85%</span> of our mentees land
              interviews within 4 weeks
            </p>
          </div>

          <div className="bg-white-default rounded-[32px] px-6 py-4 shadow-sm ml-6">
            <p className="text-white-font font-normal text-base">
              <span className="text-blue-600">70%</span> secure job offers at
              top companies
            </p>
          </div>

          <div className="bg-white-default rounded-[32px] px-6 py-4 shadow-sm ml-14">
            <p className="text-white-font font-normal text-base">
              <span className="text-blue-600">1,500+</span> professionals
              coached worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Expert Section */}
      <div className="mt-20 ">
        <h3 className="text-[26px] font-medium mb-6 text-center">
          Meet some of our expert mentors
        </h3>
        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {/* Mentor Card 1 */}
          <div className="bg-white rounded-2xl shadow-md max-w-[238px]">
            <Image
              src="/profile/david.png"
              alt="David Kim"
              width={238}
              height={277}
              className="w-full object-cover"
            />
          </div>
          {/* Mentor Card 2 */}
          <div className="bg-white rounded-2xl shadow-md max-w-[238px]">
            <Image
              src="/profile/sarah.png"
              alt="Sarah Johnson"
              width={238}
              height={277}
              className="w-full object-cover"
            />
          </div>
          {/* Mentor Card 3 */}
          <div className="bg-white rounded-2xl shadow-md max-w-[238px]">
            <Image
              src="/profile/aisha.png"
              alt="Aisha Roberts"
              width={238}
              height={277}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
