import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { id } = req.query; // ناخد ID من الرابط

  // إذا ما في ID نرجع خطأ
  if (!id) {
    return res.status(400).json({ error: "Lesson ID is required" });
  }

  try {
    // path لمجلد data داخل المشروع
    const dataDirectory = path.join(process.cwd(), "data");

    // الملف اللي رفعناه: lessons-de-ar-A0.json
    const filePath = path.join(dataDirectory, "lessons-de-ar-A0.json");

    // قراءة محتوى الملف
    const fileContent = fs.readFileSync(filePath, "utf8");

    // تحويل JSON إلى object
    const lessons = JSON.parse(fileContent);

    // البحث عن الدرس حسب الـ ID
    const lesson = lessons.find((item) => item.id === id);

    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    // إعادة الدرس كـ JSON
    return res.status(200).json(lesson);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
