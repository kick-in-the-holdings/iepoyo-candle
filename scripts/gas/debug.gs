/**
 * processBooking関数のデバッグ版
 * より詳細なログを出力
 */
function processBookingDebug(formData) {
  console.log('=== processBooking開始 ===');
  console.log('受信したformData:', JSON.stringify(formData, null, 2));
  
  try {
    // 日時を解析
    const dateMatch = formData.date.match(/(\d{4})年(\d{2})月(\d{2})日/);
    const timeMatch = formData.time.match(/(\d{2}:\d{2})～(\d{2}:\d{2})/);
    
    if (!dateMatch || !timeMatch) {
      throw new Error('日時の解析に失敗しました');
    }
    
    console.log('日時解析成功');
    
    const year = parseInt(dateMatch[1]);
    const month = parseInt(dateMatch[2]) - 1;
    const day = parseInt(dateMatch[3]);
    
    const [startHour, startMin] = timeMatch[1].split(':').map(Number);
    const [endHour, endMin] = timeMatch[2].split(':').map(Number);
    
    const startTime = new Date(year, month, day, startHour, startMin);
    const endTime = new Date(year, month, day, endHour, endMin);
    
    console.log('開始時刻:', startTime);
    console.log('終了時刻:', endTime);
    
    // 料金計算
    const menuPrice = formData.menu.price;
    const participantCount = parseInt(formData.participants);
    const optionCount = formData.options.length;
    const totalPrice = (menuPrice * participantCount) + (optionCount * 500 * participantCount);
    
    console.log('料金計算:', {
      menuPrice,
      participantCount,
      optionCount,
      totalPrice
    });
    
    // カレンダーに登録
    console.log('カレンダーに登録開始...');
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    if (!calendar) {
      throw new Error('カレンダーへのアクセスができません');
    }
    
    const event = calendar.createEvent(
      `予約: ${formData.name} (${participantCount}名)`,
      startTime,
      endTime,
      {
        description: createEventDescription(formData, totalPrice),
        location: 'iepoyo candle'
      }
    );
    console.log('カレンダー登録完了');
    
    // 予約番号を生成
    const bookingId = Utilities.formatDate(new Date(), 'JST', 'yyyyMMddHHmmss');
    console.log('予約番号:', bookingId);
    
    // スプレッドシートに保存
    console.log('スプレッドシートに保存開始...');
    console.log('SPREADSHEET_ID:', SPREADSHEET_ID);
    
    try {
      saveToSpreadsheet(formData, totalPrice, bookingId);
      console.log('スプレッドシート保存完了');
    } catch (sheetError) {
      console.error('スプレッドシート保存エラー:', sheetError.toString());
      throw sheetError;
    }
    
    // 確認メール送信（お客様向け）
    console.log('確認メール送信開始...');
    sendConfirmationEmail(formData, totalPrice, bookingId);
    console.log('確認メール送信完了');
    
    // 管理者向けメール送信
    console.log('管理者メール送信開始...');
    sendAdminNotification(formData, totalPrice, bookingId);
    console.log('管理者メール送信完了');
    
    console.log('=== processBooking正常終了 ===');
    return { success: true, message: '予約が完了しました' };
    
  } catch (e) {
    console.error('=== processBookingエラー ===');
    console.error('エラー内容:', e.toString());
    console.error('スタックトレース:', e.stack);
    
    // エラー通知（管理者向け）
    try {
      GmailApp.sendEmail(
        ADMIN_EMAIL,
        '【エラー】予約システムエラー',
        `エラーが発生しました:\n${e.toString()}\n\nスタックトレース:\n${e.stack}\n\n予約内容:\n${JSON.stringify(formData, null, 2)}`
      );
    } catch (mailError) {
      console.error('エラー通知送信失敗:', mailError);
    }
    
    throw e;
  }
}

/**
 * 手動でprocessBookingをテスト
 */
function testProcessBookingManually() {
  const testData = {
    name: "デバッグ太郎",
    email: "debug@example.com",
    phone: "09012345678",
    participants: "2",
    date: "2024年12月25日（水）",
    time: "13:30～15:00",
    menu: {
      name: "球体キャンドル",
      price: 3500
    },
    options: [
      { name: "ラメ", price: 500 }
    ],
    remarks: "デバッグテスト"
  };
  
  console.log('テストデータでprocessBookingを実行...');
  
  try {
    const result = processBookingDebug(testData);
    console.log('結果:', result);
  } catch (error) {
    console.error('テスト失敗:', error);
  }
}