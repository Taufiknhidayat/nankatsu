// Import data from the data file instead of hardcoding
import { fixtures } from '../../data/fixtures.js';

class FixtureService {
    constructor() {
        this.fixtures = fixtures || [
            // Fallback data if import fails
            {
                id: 1,
                stadium: "Stadion Nankatsu",
                homeTeam: "Nankatsu",
                awayTeam: "Team C",
                date: "25 January 2024",
                time: "15:00 WIB"
            },
            {
                id: 2,
                stadium: "Stadion Toho",
                homeTeam: "Nankatsu",
                awayTeam: "Team C",
                date: "1 February 2024",
                time: "18:30 WIB"
            },
            {
                id: 3,
                stadium: "Stadion Meiwa",
                homeTeam: "Nankatsu",
                awayTeam: "Team C",
                date: "15 February 2024",
                time: "18:30 WIB"
            }
        ];
    }

    getFixtures() {
        return this.fixtures;
    }
}

export default FixtureService;