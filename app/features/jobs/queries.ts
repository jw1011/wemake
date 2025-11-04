import client from "~/supa-client";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from "./constants";

// 배열에서 타입 추출
type JobType = (typeof JOB_TYPES)[number]["value"];
type LocationType = (typeof LOCATION_TYPES)[number]["value"];
type SalaryRange = (typeof SALARY_RANGE)[number];

export const getJobs = async ({
  limit,
  location,
  type,
  salary,
}: {
  limit: number;
  location?: LocationType;
  type?: JobType;
  salary?: SalaryRange;
}) => {
  let baseQuery = client
    .from("jobs")
    .select(
      `
      job_id,
      position,
      overview,
      company_name,
      company_logo,
      company_location,
      job_types,
      location,
      salary_range,
      created_at
    `
    )
    .limit(limit);

  if (location) baseQuery = baseQuery.eq("location", location);
  if (type) baseQuery = baseQuery.eq("job_types", type);
  if (salary) baseQuery = baseQuery.eq("salary_range", salary);

  const { data, error } = await baseQuery;
  if (error) throw error;

  return data;
};

export const getJobById = async (jobId: number) => {
  const { data, error } = await client
    .from("jobs")
    .select("*")
    .eq("job_id", jobId)
    .single();
  if (error) throw error;
  return data;
};
