export default function handler(req, res) {
  // CORS 설정 (필요한 경우)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // OPTIONS 요청에 대한 처리 (프리플라이트 요청 대응)
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // POST 요청 처리
  if (req.method === "POST") {
    // 요청 데이터 추출
    const { username, password, role, name, birthDate, email, phone } =
      req.body;

    // 예시: 데이터베이스에 저장하거나 다른 작업을 처리하는 로직 작성
    res.status(200).json({ result: true });
  } else {
    // 허용되지 않은 메서드에 대해 405 반환
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
