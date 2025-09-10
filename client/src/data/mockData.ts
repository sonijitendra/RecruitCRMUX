export interface Company {
  name: string;
  website: string;
  location: string;
  address: string;
  owner: string;
  phone: string;
  industry: string;
  size: string;
  founded: string;
}

export interface Metrics {
  openJobs: number;
  activeCandidates: number;
  lastActivity: string;
  rating: number;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  status: 'Active' | 'In Review' | 'Draft' | 'Closed';
  postedDate: string;
  applications: number;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  isPrimary: boolean;
  initials: string;
}

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'note' | 'interview';
  title: string;
  description: string;
  timestamp: string;
  duration?: string;
  by: string;
}

export const mockCompany: Company = {
  name: "Jitendra - RCRM Assignment (UX)",
  website: "www.company-example.com",
  location: "San Francisco, CA",
  address: "123 Technology Street, San Francisco, CA 94102",
  owner: "John Smith",
  phone: "+1 (555) 123-4567",
  industry: "Technology",
  size: "501-1000 employees",
  founded: "2010"
};

export const mockMetrics: Metrics = {
  openJobs: 12,
  activeCandidates: 84,
  lastActivity: "2h ago",
  rating: 4.8
};

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    salaryMin: 90000,
    salaryMax: 120000,
    status: "Active",
    postedDate: "3 days ago",
    applications: 12
  },
  {
    id: "2",
    title: "Product Manager",
    type: "Full-time",
    location: "San Francisco, CA",
    salaryMin: 130000,
    salaryMax: 160000,
    status: "In Review",
    postedDate: "1 week ago",
    applications: 24
  },
  {
    id: "3",
    title: "UX Designer",
    type: "Full-time",
    location: "Hybrid",
    salaryMin: 85000,
    salaryMax: 110000,
    status: "Draft",
    postedDate: "5 days ago",
    applications: 0
  }
];

export const mockContacts: Contact[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    email: "john.smith@company.com",
    phone: "+1 (555) 123-4567",
    isPrimary: true,
    initials: "JS"
  },
  {
    id: "2",
    name: "Sarah Davis",
    role: "HR Manager",
    email: "sarah.davis@company.com",
    phone: "+1 (555) 123-4568",
    isPrimary: false,
    initials: "SD"
  },
  {
    id: "3",
    name: "Mike Wilson",
    role: "CTO",
    email: "mike.wilson@company.com",
    phone: "+1 (555) 123-4569",
    isPrimary: false,
    initials: "MW"
  }
];

export const mockActivities: Activity[] = [
  {
    id: "1",
    type: "call",
    title: "Phone Call with Sarah Johnson",
    description: "Discussed the Senior Developer position. Candidate is interested and available for next week interview.",
    timestamp: "2 hours ago",
    duration: "15 min",
    by: "Jitendra"
  },
  {
    id: "2",
    type: "email",
    title: "Email Sent to Mike Chen",
    description: "Sent follow-up email about Product Manager interview feedback and next steps.",
    timestamp: "1 day ago",
    by: "Jitendra"
  },
  {
    id: "3",
    type: "interview",
    title: "Interview Scheduled",
    description: "Scheduled technical interview for Alex Rodriguez for UX Designer position.",
    timestamp: "2 days ago",
    by: "Jitendra"
  },
  {
    id: "4",
    type: "note",
    title: "Note Added",
    description: "Company is looking to expand their development team by Q1 2025. Priority on senior-level positions.",
    timestamp: "3 days ago",
    by: "Jitendra"
  },
  {
    id: "5",
    type: "call",
    title: "Called candidate Sarah Johnson",
    description: "Initial screening call for Frontend Developer position.",
    timestamp: "2 hours ago",
    by: "Jitendra"
  }
];
