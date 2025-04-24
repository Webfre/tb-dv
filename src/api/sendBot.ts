const BOT_TOKEN = process.env.REACT_APP_BOT_TOKEN;
const CHAT_ID = process.env.REACT_APP_CHAT_ID;

export const sendToTelegram = (
  name: string,
  testName: string,
  score: number,
  grade: number
) => {
  const message = `
📢 *Результат теста*  
👤 Имя: *${name}*  
📌 Тест: *${testName}*  
✅ Результат: *${score}%*  
🎯 Оценка: *${grade}*
`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        alert("Результаты отправлены!");
      } else {
        alert("Ошибка при отправке.");
      }
    })
    .catch((error) => {
      alert("Ошибка соединения.");
      console.error(error);
    });
};
