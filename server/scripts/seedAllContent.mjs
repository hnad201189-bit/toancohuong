// Standalone CLI: re-push the full curriculum content into an existing DB
// (useful after editing files in server/content/ without wiping the DB).
import { seedFullContent } from '../seedFullContent.js'

seedFullContent()
