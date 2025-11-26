// api/placement-de-ar.js
// هذه الداتا نفسها التي في data/placement-de-ar.json
// الصق محتوى الـ JSON داخل الكائن placementData

const placementData = {
  // 👇 هون حط كل محتوى ملف placement-de-ar.json
  {
  "questions": [
    {
      "id": "q1",
      "level": "A1",
      "question": "أي جملة هي الترتيب الصحيح لـ: «أنا اسمي نوا»؟",
      "options": [
        "Ich heiße Noa.",
        "Noa heiße ich.",
        "Ich bin heiße Noa."
      ],
      "answer": 0
    },
    {
      "id": "q2",
      "level": "A1",
      "question": "ما معنى الجملة: „Ich komme aus Syrien.“ ؟",
      "options": [
        "أنا آكل في البيت.",
        "أنا قادم من سوريا.",
        "أنا أعيش في برلين."
      ],
      "answer": 1
    },
    {
      "id": "q3",
      "level": "A1",
      "question": "اختر السؤال الصحيح عن العمر:",
      "options": [
        "Wie alt bist du?",
        "Wo alt bist du?",
        "Was alt bist du?"
      ],
      "answer": 0
    },
    {
      "id": "q4",
      "level": "A2",
      "question": "أي جملة صحيحة عن الروتين اليومي؟",
      "options": [
        "Ich stehe um 7 Uhr auf und frühstücke.",
        "Ich aufstehe um 7 Uhr und frühstücke.",
        "Ich stehe auf um 7 Uhr frühstücke."
      ],
      "answer": 0
    },
    {
      "id": "q5",
      "level": "A2",
      "question": "ما معنى: „Ich muss heute lange arbeiten.“ ؟",
      "options": [
        "يجب أن أعمل طويلًا اليوم.",
        "أريد أن أذهب إلى العمل غدًا.",
        "أستطيع أن أعمل يوم الأحد فقط."
      ],
      "answer": 0
    },
    {
      "id": "q6",
      "level": "A2",
      "question": "اختر الجملة الصحيحة مع حرف الجر:",
      "options": [
        "Ich warte auf den Bus.",
        "Ich warte den Bus.",
        "Ich warte mit den Bus."
      ],
      "answer": 0
    },
    {
      "id": "q7",
      "level": "B1",
      "question": "أي جملة مناسبة لرسالة شكوى رسمية؟",
      "options": [
        "Cool, das Produkt ist kaputt 😂",
        "Leider bin ich mit Ihrem Service nicht zufrieden.",
        "Das ist nicht gut!"
      ],
      "answer": 1
    },
    {
      "id": "q8",
      "level": "B1",
      "question": "اكمل الجملة: „Ich möchte Deutsch lernen, ____ ich in Deutschland arbeiten will.“",
      "options": [
        "weil",
        "aber",
        "oder"
      ],
      "answer": 0
    },
    {
      "id": "q9",
      "level": "B1",
      "question": "أي جملة أنسب لإيميل رسمي؟",
      "options": [
        "Hallo Chef, was geht?",
        "Sehr geehrte Damen und Herren, …",
        "Na, alles klar?"
      ],
      "answer": 1
    }
  ]
}

};

export default function handler(req, res) {
  res.status(200).json(placementData);
}
