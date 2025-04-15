export interface League {
  id: string
  name: string
  imageUrl: string
  provider: string
  providerLogo: string
  year: string
  status: "Draft Live" | "Pre-Draft" | "Post-Draft"
}

export const leagueData: League[] = [
  {
    id: "1",
    name: "St. Louis Pro Season Points League",
    imageUrl: "/image-1.png",
    provider: "ESPN",
    providerLogo: "/logo-espn.png",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "2",
    name: "Washington Pro Season Points League",
    imageUrl: "/image-2.png",
    provider: "ESPN",
    providerLogo: "/logo-espn.png",
    year: "2023",
    status: "Pre-Draft",
  },
  {
    id: "3",
    name: "New York Pro H2H Points PPR League",
    imageUrl: "/image-3.png",
    provider: "ESPN",
    providerLogo: "/logo-espn.png",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "4",
    name: "Washington Pro Season Points League",
    imageUrl: "/image-1.png",
    provider: "ESPN",
    providerLogo: "/logo-espn.png",
    year: "2023",
    status: "Draft Live",
  },
  {
    id: "5",
    name: "New York Pro H2H Points PPR League",
    imageUrl: "/image-2.png",
    provider: "ESPN",
    providerLogo: "/logo-espn.png",
    year: "2023",
    status: "Post-Draft",
  },
]
