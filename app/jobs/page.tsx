import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, SlidersHorizontal, Share2, Heart } from "lucide-react";
// import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1">
        {/* <Header /> */}
        <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Listings Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search for job titles, location, job type"
                  className="pl-10"
                />
              </div>

              <div className="flex items-center justify-between">
                <Tabs defaultValue="recommended" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="recommended">Recommended</TabsTrigger>
                    <TabsTrigger value="top-matched">Top matched</TabsTrigger>
                    <TabsTrigger value="most-recent">Most recent</TabsTrigger>
                    <TabsTrigger value="saved">Saved jobs</TabsTrigger>
                  </TabsList>
                </Tabs>

                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Advance filters
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  UI/UX Designer ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Product Designer ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Hybrid ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Full-time ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Lagos, Nigeria ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  Senior ×
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  +5
                </Badge>
              </div>
            </div>

            {/* Auto-apply Notice */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
              <p className="text-sm text-blue-600">
                Turn on auto-apply, and AI will submit applications for you
                based on your job preferences—saving you time and effort.
              </p>
              <Button variant="ghost" size="sm" className="text-gray-500">
                ×
              </Button>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {[1, 2, 3].map((job) => (
                <Card key={job} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg" />
                      <div>
                        <h3 className="font-semibold text-lg">
                          Senior UI/UX Designer
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span>Lagos, Nigeria</span>
                          <span>Full-time</span>
                          <span>Remote</span>
                          <span>Senior</span>
                          <span>2+ years Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    This position requires you to work closely with product
                    managers and engineers to design user-centered experiences
                    that meet business goals. You will be responsible for
                    conducting user testing, analyzing feedback, and iterating
                    on designs to enhance usability...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 bg-blue-500 rounded-full" />
                      <span className="text-sm text-blue-600">
                        82%, Good match
                      </span>
                      <span className="text-sm text-gray-500">4 days ago</span>
                      <span className="text-sm text-gray-500">
                        200+ applicants
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button>Apply</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* User Profile Column */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-yellow-400 rounded-full mb-4" />
                <h2 className="text-xl font-semibold">Mercy Benjamin</h2>
                <p className="text-gray-500">UI/UX Designer</p>

                <div className="grid grid-cols-3 gap-4 w-full mt-6">
                  <div className="text-center">
                    <div className="font-semibold">0</div>
                    <div className="text-sm text-gray-500">Applied Jobs</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">0</div>
                    <div className="text-sm text-gray-500">
                      Generated Resumes
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">1</div>
                    <div className="text-sm text-gray-500">Cover Letters</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-6">
                  View profile
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold">Farah</h3>
                  <p className="text-sm text-gray-500">
                    Talentrah&apos;s Co-pilot
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Got questions about your resume, cover letter, or job
                applications? Chat with our AI assistant and get instant,
                helpful answers!
              </p>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-blue-600">
                  Hello! Welcome to Talentrah Co-pilot
                </p>
              </div>

              <Input placeholder="Ask me anything..." />
            </Card>

            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                Create a resume
              </Button>
              <Button variant="outline" className="w-full">
                Create a tailored job loop
              </Button>
              <Button variant="outline" className="w-full">
                Upload a resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
