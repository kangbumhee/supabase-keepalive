// 1시간마다 Supabase에 요청을 보내는 keep-alive 코드

const axios = require("axios");

const SUPABASE_URL = "https://ammgcxdbebfjnnexwkex.supabase.co";
const SUPABASE_TABLE = "ping_log";
 // 아무 테이블이나
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtbWdjeGRiZWJmam5uZXh3a2V4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2Mzk5NTUsImV4cCI6MjA2MDIxNTk1NX0.YPikfup-9w2oO3U-nZoqU7Z9F5aBsI5nfc5dW8pjTwM"; // 절대 서비스 키는 쓰지 말 것

// Supabase ping 보내기
async function pingSupabase() {
  try {
    const res = await axios.get(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
 headers: {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
},
      params: {
        select: "id", // 가볍게 요청 (id 컬럼만)
        limit: 1,
      },
    });
    console.log("✅ Supabase ping 성공:", new Date().toLocaleString());
  } catch (err) {
    console.error("❌ Supabase ping 실패:", err.message);
  }
}

// 1시간마다 실행 (3600000ms)
setInterval(pingSupabase, 3600000);

// 즉시 한 번 실행
pingSupabase();
