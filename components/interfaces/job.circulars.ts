import { Company } from "./company";
import { EmploymentType } from "./employment.type";
import { JobIndustry } from "./job.industry";

export interface Circular {
    id: number,
    title: string;
    noOfPositions: null | number;
    salary: null | string;
    languageProficiency: null | string;
    country: null | string;
    age: null | string;
    isVerified: boolean;
    isPublished: boolean;
    isFeatured: boolean;
    status: string;
    jobResponsibilities: null | string;
    educationRequirements: null | string;
    experienceRequirements: null | string;
    additionalRequirements: null | string;
    compensationsJobBenefits: null | string;
    applicationDeadline: null | string;
    publishedDate: null | string;
    jobVideoLink: null | string;
    jobAttachmentLink: null | string;
    created_at: string;
    updated_at: string;
    company: Company,
    employmentType: EmploymentType,
    jobIndustry: JobIndustry,
    jobLevel: JobIndustry
}


export interface JobCirculars {
    circulars: Circular[]
}

