import { Season, Contest, Participant } from "../../types/Season";
import { createContest } from "../../utils/createContest";

export const participants: Participant = {
    unexist_exe: "Random Test User",
};

const contests: Record<number, Contest> = {
     // <contestId>: createContest(<contestId>, ContestName, totalProblems, target, weight)
    755567: createContest(755567, "Selection", 11, 11, 0.7),
    760177: createContest(760177, "Contest 1", 7, 7, 0.8),
    760466: createContest(760466, "Week - 1", 26, 26, 0.8),
    762475: createContest(762475, "Contest 2", 7, 7, 1),
    763360: createContest(763360, "Week - 2", 20, 20, 1),
    // 693348: createContest(693348, "Indi - 3", 5, 5, 1),
    // 693725: createContest(693725, "Week- 3", 16, 16, 1),
    // 697164: createContest(697164, "Indi - 4", 7, 7, 1),
    // 697721: createContest(697721, "Week - 4", 17, 17, 1.2),
    // 699136: createContest(699136, "Indi - 5", 7, 7, 1.1),
    // 700178: createContest(700178, "Week - 5", 18, 18, 1.2),
    // 701216: createContest(701216, "Indi - 6", 7, 7, 1.2),
    // 702175: createContest(702175, "Week - 6", 29, 29, 1.2),
    // 703377: createContest(703377, "Indi - 7", 7, 7, 1.2),
    // 705474: createContest(705474, "Week - 7", 18, 18, 1.3),
    // 708524: createContest(708524, "Indi - 8", 11, 11, 1.2),
    // 710263: createContest(710263, "Indi - 9", 10, 10, 1.2),
};

const fall2025: Season = {
    seasonId: "fall2025",
    seasonTitle: "NSUPS Bootcamp - Fall 2025",
    participants: participants,
    contests: contests,
    eligibility: { active: true, target: 90.0 },
    elimination: { active: true, target: 50 },
};

export default fall2025;
