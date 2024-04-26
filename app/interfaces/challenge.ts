export interface Challenge {
  title: string;
  description: string;
  items: ChallengeItem[];
}

export interface ChallengeItem {
  description: string;
  documentationUrl?: string;
}
