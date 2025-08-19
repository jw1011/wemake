import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/jobs-page";
import { JobCard } from "../components/job-card";
import { Button } from "~/common/components/ui/button";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "../constants";
import { useSearchParams } from "react-router";
import { cn } from "~/lib/utils";
import { getJobs } from "../queries";
import { z } from "zod";
import { useEffect, useState } from "react";

// ----------------------------
// 타입 정의
// ----------------------------
type JobType = (typeof JOB_TYPES)[number]["value"];
type LocationType = (typeof LOCATION_TYPES)[number]["value"];
type SalaryRange = (typeof SALARY_RANGE)[number];

export const meta: Route.MetaFunction = () => [
  { title: "Jobs | wemake" },
  { name: "description", content: "Find your dream job at wemake" },
];

// ----------------------------
// Zod로 searchParams 검증
// ----------------------------
const searchParamsSchema = z.object({
  type: z.enum(JOB_TYPES.map((t) => t.value) as any).optional(),
  location: z.enum(LOCATION_TYPES.map((t) => t.value) as any).optional(),
  salary: z.enum(SALARY_RANGE as any).optional(),
});

// ----------------------------
// Component
// ----------------------------
export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentType, setCurrentType] = useState<JobType | null>(null);
  const [currentLocation, setCurrentLocation] = useState<LocationType | null>(
    null
  );
  const [currentSalary, setCurrentSalary] = useState<SalaryRange | null>(null);

  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // URL에서 초기 필터 값으로 상태 초기화
  useEffect(() => {
    setCurrentType(searchParams.get("type") as JobType | null);
    setCurrentLocation(searchParams.get("location") as LocationType | null);
    setCurrentSalary(searchParams.get("salary") as SalaryRange | null);
  }, [searchParams]);

  // 필터 변경 시 getJobs 호출
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await getJobs({
          limit: 40,
          type: currentType || undefined,
          location: currentLocation || undefined,
          salary: currentSalary || undefined,
        });
        setJobs(data);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [currentType, currentLocation, currentSalary]);

  const onFilterClick = (
    key: "type" | "location" | "salary",
    value: string
  ) => {
    const newParams = new URLSearchParams(searchParams);

    // 토글: 이미 선택된 버튼이면 제거
    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }

    setSearchParams(newParams);

    // 상태 업데이트
    if (key === "type") setCurrentType(newParams.get("type") as JobType | null);
    if (key === "location")
      setCurrentLocation(newParams.get("location") as LocationType | null);
    if (key === "salary")
      setCurrentSalary(newParams.get("salary") as SalaryRange | null);
  };

  return (
    <div className="space-y-20">
      <Hero title="Jobs" subtitle="Companies looking for makers" />

      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5">
          {loading
            ? "Loading..."
            : jobs.map((job) => (
                <JobCard
                  key={job.job_id}
                  id={job.job_id}
                  company={job.company_name}
                  companyLogoUrl={job.company_logo}
                  companyHq={job.company_location}
                  title={job.position}
                  postedAt={job.created_at}
                  type={job.job_types}
                  positionLocation={job.location}
                  salary={job.salary_range}
                />
              ))}
        </div>
        {/* Filters */}
        <div className="xl:col-span-2 sticky top-20 flex flex-col gap-10">
          {/* Job Type */}
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((type) => (
                <Button
                  key={type.value}
                  variant="outline"
                  onClick={() => onFilterClick("type", type.value)}
                  className={cn(type.value === currentType ? "bg-accent" : "")}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((loc) => (
                <Button
                  key={loc.value}
                  variant="outline"
                  onClick={() => onFilterClick("location", loc.value)}
                  className={cn(
                    loc.value === currentLocation ? "bg-accent" : ""
                  )}
                >
                  {loc.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Salary */}
          <div className="flex flex-col items-start gap-2.5">
            <h4 className="text-sm text-muted-foreground font-bold">
              Salary Range
            </h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGE.map((range) => (
                <Button
                  key={range}
                  variant="outline"
                  onClick={() => onFilterClick("salary", range)}
                  className={cn(range === currentSalary ? "bg-accent" : "")}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
