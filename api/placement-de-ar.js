// api/placement-de-ar.js
// نسخة تجريبية بسيطة للتأكد أن الـ API يعمل

export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    from: "placement-de-ar.js",
    sampleQuestion: {
      id: "q1",
      level: "A1",
      question: "Testfrage: Funktioniert die API?",
      options: ["Ja", "Nein", "Vielleicht"],
      answer: 0
    }
  });
}
