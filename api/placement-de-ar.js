// api/placement-de-ar.js
// هذه الداتا نفسها التي في data/placement-de-ar.json
// الصق محتوى الـ JSON داخل الكائن placementData

const placementData = {
  // 👇 هون حط كل محتوى ملف placement-de-ar.json
};

export default function handler(req, res) {
  res.status(200).json(placementData);
}
