import { Season } from "../types/Season"
import s18  from "./seasons/s18";
import s17 from "./seasons/s17";
import s19 from "./seasons/s19";
import s20 from "./seasons/s20";
import fall2025 from "./seasons/fall2025";

const seasons: Record<string, Season> = {
    s17, s18, s19, s20, fall2025
}

export const currentSeason = "fall2025";

export default seasons;
