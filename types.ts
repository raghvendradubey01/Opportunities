export type OpportunityCategory = 'Internships' | 'Hackathons' | 'Events' | 'Open Source';

export interface Opportunity {
  id: string;
  title: string;
  source: string;
  deadline: string;
  category: OpportunityCategory;
  description: string;
  eligibility: string;
  applyLink: string;
  postedAt: string;
}

export interface UserPreferences {
  interests: OpportunityCategory[];
  savedOpportunityIds: string[];
  companies: string[];
  notificationsEnabled: boolean;
  hasCompletedOnboarding: boolean;
  isLoggedIn: boolean;
  userEmail?: string;
}
