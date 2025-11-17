
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { id } = req.query; // نأخذ ID من الرابط

  if (!id) {
    return res.status(400).json({ error: "Lesson ID is required" });
  }

  try {
    // مسار مجلد البيانات
    const dataDirectory = path.join(process.cwd(), "data");

    // الملف الحقيقي اللي رفعته
    const filePath = path.join(dataDirectory, "lessons-de-ar-A0.json");

    // قراءة الملف كنص
    const fileContent = fs.readFileSync(filePath, "utf8");

    // تحويل النص إلى JSON
    const jsonData = JSON.parse(fileContent);

    // هنا بيت القصيد 🔥
    // الدروس موجودة داخل jsonData.lessons
    const lessons = jsonData.lessons;

    // نبحث عن الدرس حسب ID
    const lesson = lessons.find((item) => item.id === id);

    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    // نرجع الدرس
    return res.status(200).json(lesson);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
