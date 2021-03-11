import { delay } from "../utils/delay";
import { sampleData } from "./sampleData";

export function fetchSampleData() {
  return delay(1000).then(() => Promise.resolve(sampleData));
}
