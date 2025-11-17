export default function handler(req, res) {
  res.status(200).json({
    message: 'Hello from Abbas backend! 🎉',
    time: new Date().toISOString()
  });
}
