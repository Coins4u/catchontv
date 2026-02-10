// #region agent log helper
import fs from "fs";

const LOG_PATH = "/Users/ayoub/Desktop/catchontvapp/.cursor/debug.log";

type DebugEntry = {
  id: string;
  runId: string;
  hypothesisId: string;
  location: string;
  message: string;
  data?: unknown;
};

export function logDebug(entry: DebugEntry) {
  const payload = {
    ...entry,
    timestamp: Date.now(),
  };

  try {
    fs.appendFileSync(LOG_PATH, JSON.stringify(payload) + "\n", {
      encoding: "utf8",
    });
  } catch {
    // swallow logging errors
  }
}
// #endregion

