// api/placement-de-ar.js
// هذا هو الـ API الذي يرجّع بيانات اختبار المستوى DE-AR من ملف JSON

import placementData from "../data/placement-de-ar.json";

export default function handler(req, res) {
  res.status(200).json(placementData);
}
