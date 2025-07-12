// ===== キャンドル工房予約システム（Web App版バックエンド） =====

// 設定項目
const CALENDAR_ID = 'iepoyocandle@gmail.com';
const ADMIN_EMAIL = 'iepoyocandle@gmail.com'; // 管理者メールアドレス
const SPREADSHEET_ID = '1qBpMBIW77z94-S8M4IKGNS6ioqN0ED3of31gWPj57ss'; // スプレッドシートID（更新）
const TIME_SLOTS = [
  '11:00～12:30',
  '13:30～15:00', 
  '16:00～17:30',
  '18:30～20:00',
  '21:00～22:30'
];

// メニュー情報
const MENU_ITEMS = [
  { name: 'マーブルキャンドル', price: 2500 },
  { name: '貝殻キャンドル', price: 3000 },
  { name: '球体キャンドル', price: 3500, recommended: true },
  { name: '球体キャンドル(Big)', price: 5000 }
];

const OPTION_ITEMS = [
  { name: 'ラメ', price: 500 },
  { name: '金箔', price: 500 },
  { name: 'エッセンシャルオイル', price: 500 }
];

/**
 * API エンドポイント（GET リクエスト用）
 */
function doGet(e) {
  try {
    const action = e.parameter.action;
    const callback = e.parameter.callback; // JSONP用のコールバック
    
    let responseData;
    
    // actionパラメータがない場合は、APIの説明を返す
    if (!action) {
      responseData = { 
        success: false, 
        error: 'actionパラメータが必要です',
        available_actions: ['getAvailableDates', 'getTimeSlots'],
        usage: {
          getAvailableDates: 'GET ?action=getAvailableDates',
          getTimeSlots: 'GET ?action=getTimeSlots&date=YYYY-MM-DD',
          booking: 'POST with booking data'
        }
      };
    } else {
      switch (action) {
        case 'getAvailableDates':
          const dates = getAvailableDates();
          responseData = { success: true, data: dates };
          break;
          
        case 'getTimeSlots':
          const date = e.parameter.date;
          if (!date) {
            responseData = { success: false, error: '日付が指定されていません' };
          } else {
            const slots = getAvailableTimeSlotsForDateAjax(date);
            responseData = { success: true, data: slots };
          }
          break;
          
        default:
          responseData = { success: false, error: '無効なアクションです: ' + action };
      }
    }
    
    // JSONP形式またはJSON形式でレスポンスを返す
    if (callback) {
      return createJsonpResponse(responseData, callback);
    } else {
      return createCorsResponse(responseData);
    }
    
  } catch (error) {
    console.error('doGet エラー:', error);
    const errorResponse = { success: false, error: error.toString() };
    
    if (e.parameter.callback) {
      return createJsonpResponse(errorResponse, e.parameter.callback);
    } else {
      return createCorsResponse(errorResponse);
    }
  }
}

/**
 * API エンドポイント（POST リクエスト用）
 */
function doPost(e) {
  try {
    // リクエストボディを解析
    const requestData = JSON.parse(e.postData.contents);
    console.log('受信したデータ:', JSON.stringify(requestData));
    
    // 予約処理を実行
    const result = processBooking(requestData);
    
    return createCorsResponse({ success: true, data: result });
    
  } catch (error) {
    console.error('doPost エラー:', error);
    return createCorsResponse({ success: false, error: error.toString() });
  }
}

/**
 * CORS対応のレスポンスを作成するヘルパー関数
 */
function createCorsResponse(data) {
  const jsonString = JSON.stringify(data);
  
  // ContentServiceを使用してJSON形式のレスポンスを作成
  const output = ContentService.createTextOutput(jsonString);
  output.setMimeType(ContentService.MimeType.JSON);
  
  return output;
}

/**
 * JSONP形式のレスポンスを作成するヘルパー関数
 */
function createJsonpResponse(data, callback) {
  const jsonString = JSON.stringify(data);
  const jsonpString = `${callback}(${jsonString})`;
  
  // ContentServiceを使用してJSONP形式のレスポンスを作成
  const output = ContentService.createTextOutput(jsonpString);
  output.setMimeType(ContentService.MimeType.JAVASCRIPT);
  
  return output;
}


/**
 * 利用可能な日付を取得（14日分）
 */
function getAvailableDates() {
  const availableDates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    if (!calendar) {
      console.error('カレンダーが見つかりません');
      return availableDates;
    }
    
    // 14日分をチェック
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // その日に空き時間があるかチェック
      let hasAvailableSlot = false;
      for (const timeSlot of TIME_SLOTS) {
        if (isTimeSlotAvailable(date, timeSlot)) {
          hasAvailableSlot = true;
          break;
        }
      }
      
      if (hasAvailableSlot) {
        availableDates.push({
          value: Utilities.formatDate(date, 'JST', 'yyyy-MM-dd'),
          display: Utilities.formatDate(date, 'JST', 'yyyy年MM月dd日（EEE）')
        });
      }
    }
  } catch (e) {
    console.error('日付取得エラー:', e);
  }
  
  return availableDates;
}

/**
 * 特定の日付で利用可能な時間帯を取得（Ajax用）
 */
function getAvailableTimeSlotsForDateAjax(dateValue) {
  try {
    const date = new Date(dateValue);
    const availableSlots = [];
    
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    if (!calendar) {
      console.error('カレンダーが見つかりません');
      return availableSlots;
    }
    
    for (const timeSlot of TIME_SLOTS) {
      if (isTimeSlotAvailable(date, timeSlot)) {
        availableSlots.push(timeSlot);
      }
    }
    
    return availableSlots;
  } catch (e) {
    console.error('時間帯取得エラー:', e);
    return [];
  }
}

/**
 * 時間帯の空き状況をチェック
 */
function isTimeSlotAvailable(date, timeSlot) {
  try {
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    if (!calendar) return false;
    
    // 時間帯から開始・終了時刻を取得
    const [startStr, endStr] = timeSlot.split('～');
    const [startHour, startMin] = startStr.split(':').map(Number);
    const [endHour, endMin] = endStr.split(':').map(Number);
    
    const slotStart = new Date(date);
    slotStart.setHours(startHour, startMin, 0, 0);
    
    const slotEnd = new Date(date);
    slotEnd.setHours(endHour, endMin, 0, 0);
    
    // その時間帯のイベントを取得
    const events = calendar.getEvents(slotStart, slotEnd);
    
    // イベントがなければ予約可能
    return events.length === 0;
  } catch (e) {
    console.error('空き状況チェックエラー:', e);
    return false;
  }
}

/**
 * 予約処理
 */
function processBooking(formData) {
  console.log('processBooking開始:', JSON.stringify(formData));
  
  try {
    // 日時を解析
    const dateMatch = formData.date.match(/(\d{4})年(\d{2})月(\d{2})日/);
    const timeMatch = formData.time.match(/(\d{2}:\d{2})～(\d{2}:\d{2})/);
    
    if (!dateMatch || !timeMatch) {
      throw new Error('日時の解析に失敗しました');
    }
    
    const year = parseInt(dateMatch[1]);
    const month = parseInt(dateMatch[2]) - 1;
    const day = parseInt(dateMatch[3]);
    
    const [startHour, startMin] = timeMatch[1].split(':').map(Number);
    const [endHour, endMin] = timeMatch[2].split(':').map(Number);
    
    const startTime = new Date(year, month, day, startHour, startMin);
    const endTime = new Date(year, month, day, endHour, endMin);
    
    // 料金計算
    const menuPrice = formData.menu.price;
    const participantCount = parseInt(formData.participants);
    const optionCount = formData.options.length;
    const totalPrice = (menuPrice * participantCount) + (optionCount * 500 * participantCount);
    
    // カレンダーに登録
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
    
    // 予約番号を生成
    const bookingId = Utilities.formatDate(new Date(), 'JST', 'yyyyMMddHHmmss');
    
    // スプレッドシートに保存
    saveToSpreadsheet(formData, totalPrice, bookingId);
    
    // 確認メール送信（お客様向け）
    sendConfirmationEmail(formData, totalPrice, bookingId);
    
    // 管理者向けメール送信
    sendAdminNotification(formData, totalPrice, bookingId);
    
    return { success: true, message: '予約が完了しました' };
    
  } catch (e) {
    console.error('予約処理エラー:', e);
    
    // エラー通知（管理者向け）
    try {
      GmailApp.sendEmail(
        ADMIN_EMAIL,
        '【エラー】予約システムエラー',
        `エラーが発生しました:\n${e.toString()}\n\n予約内容:\n${JSON.stringify(formData, null, 2)}`
      );
    } catch (mailError) {
      console.error('エラー通知送信失敗:', mailError);
    }
    
    throw e;
  }
}

/**
 * カレンダーイベントの説明文を作成
 */
function createEventDescription(formData, totalPrice) {
  const optionText = formData.options.map(opt => opt.name).join('、');
  
  return `
代表者: ${formData.name}
参加人数: ${formData.participants}名
電話: ${formData.phone}
メール: ${formData.email}

【選択メニュー】
${formData.menu.name}：${formData.menu.price}円
オプション: ${optionText || 'なし'}

【料金】
合計: ${totalPrice.toLocaleString()}円
※当日現金払い

【備考】
${formData.remarks || 'なし'}
`;
}

/**
 * 確認メール送信（お客様向け）- 迷惑メール対策強化版
 */
function sendConfirmationEmail(formData, totalPrice, bookingId) {
  const subject = '【iepoyo candle】ご予約確認';
  
  const optionText = formData.options.map(opt => opt.name).join('\n・');
  const dateTimeStr = `${formData.date} ${formData.time}`;
  
  // HTMLメール本文
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .booking-info {
            background-color: #f9f9f9;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .booking-info h2 {
            color: #ff6b6b;
            margin-top: 0;
        }
        .info-row {
            margin: 10px 0;
            padding: 5px 0;
            border-bottom: 1px solid #e0e0e0;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            color: #555;
        }
        .total {
            font-size: 20px;
            color: #ff6b6b;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
        }
        .notice {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
        }
        .footer {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }
        .btn {
            display: inline-block;
            background-color: #ff6b6b;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>iepoyo candle - ご予約確認</h1>
        </div>
        
        <div class="content">
            <p>
                ${formData.name} 様<br><br>
                この度はキャンドル作り体験のご予約をいただき、<br>
                誠にありがとうございます。
            </p>
            
            <p>以下の内容でご予約を承りました。</p>
            
            <div class="booking-info">
                <h2>ご予約番号: ${bookingId}</h2>
                
                <div class="info-row">
                    <span class="label">日時:</span> ${dateTimeStr}
                </div>
                <div class="info-row">
                    <span class="label">参加人数:</span> ${formData.participants}名
                </div>
                <div class="info-row">
                    <span class="label">体験メニュー:</span> ${formData.menu.name}（${formData.menu.price.toLocaleString()}円）
                </div>
                <div class="info-row">
                    <span class="label">オプション:</span> ${optionText || 'なし'}
                </div>
            </div>
            
            <div class="total">
                合計金額: ${totalPrice.toLocaleString()}円
            </div>
            
            <div class="notice">
                <strong>📌 お支払いについて</strong><br>
                料金は当日現地にて現金でお支払いください。
            </div>
            
            <h3>📍 当日のご案内</h3>
            <ul>
                <li>開始時刻の5分前までにお越しください</li>
                <li>エプロンは貸し出しいたします</li>
                <li>作品は当日お持ち帰りいただけます</li>
            </ul>
            
            <div style="text-align: center;">
                <a href="https://kick-in-the-holdings.github.io/iepoyo-candle/" class="btn">
                    iepoyo candle ホームページ
                </a>
            </div>
            
            <p>
                ご不明な点がございましたら、<br>
                お気軽にお問い合わせください。<br><br>
                
                当日お会いできることを楽しみにしております。
            </p>
        </div>
        
        <div class="footer">
            <p>
                iepoyo candle<br>
                メール: ${CALENDAR_ID}<br>
                <small>このメールは予約システムから自動送信されています</small>
            </p>
        </div>
    </div>
</body>
</html>
`;

  // プレーンテキスト版（HTMLメールが表示できない場合のフォールバック）
  const textBody = `
${formData.name} 様

この度はキャンドル作り体験のご予約をいただき、
誠にありがとうございます。

以下の内容でご予約を承りました。

━━━━━━━━━━━━━━━━━━━━
【ご予約番号】${bookingId}
━━━━━━━━━━━━━━━━━━━━

【ご予約内容】
日時: ${dateTimeStr}
参加人数: ${formData.participants}名

体験メニュー: ${formData.menu.name}：${formData.menu.price.toLocaleString()}円
オプション: 
${optionText ? '・' + optionText : 'なし'}

━━━━━━━━━━━━━━━━━━━━
【料金】
━━━━━━━━━━━━━━━━━━━━

合計金額: ${totalPrice.toLocaleString()}円
※当日現地にて現金でお支払いください

━━━━━━━━━━━━━━━━━━━━
【当日のご案内】
━━━━━━━━━━━━━━━━━━━━

・開始時刻の5分前までにお越しください
・エプロンは貸し出しいたします
・作品は当日お持ち帰りいただけます

━━━━━━━━━━━━━━━━━━━━

ご不明な点がございましたら、
お気軽にお問い合わせください。

当日お会いできることを楽しみにしております。

iepoyo candle
メール: ${CALENDAR_ID}
ホームページ: https://kick-in-the-holdings.github.io/iepoyo-candle/
`;
  
  // メール送信（迷惑メール対策を含む）
  GmailApp.sendEmail(
    formData.email,
    subject,
    textBody,
    {
      name: 'iepoyo candle',
      replyTo: CALENDAR_ID,
      htmlBody: htmlBody,
      // 迷惑メール対策のヘッダー
      attachments: [],
      bcc: '', // BCCは使用しない
      cc: ''   // CCは使用しない
    }
  );
  
  // SPF/DKIM対策のため、少し遅延を入れる
  Utilities.sleep(1000);
}

/**
 * 管理者向け通知メール送信
 */
function sendAdminNotification(formData, totalPrice, bookingId) {
  const subject = `【新規予約】${formData.name}様 - ${formData.date} ${formData.time}`;
  
  const optionText = formData.options.map(opt => opt.name).join('、');
  
  const body = `
新しい予約が入りました。

━━━━━━━━━━━━━━━━━━━━
【予約番号】${bookingId}
━━━━━━━━━━━━━━━━━━━━

【予約情報】
代表者: ${formData.name}
電話: ${formData.phone}
メール: ${formData.email}
参加人数: ${formData.participants}名

【日時】
${formData.date} ${formData.time}

【選択メニュー】
${formData.menu.name}（${formData.menu.price.toLocaleString()}円）
オプション: ${optionText || 'なし'}

【料金】
合計: ${totalPrice.toLocaleString()}円

【備考】
${formData.remarks || 'なし'}

━━━━━━━━━━━━━━━━━━━━

予約詳細はスプレッドシートでも確認できます。
`;
  
  GmailApp.sendEmail(
    ADMIN_EMAIL,
    subject,
    body,
    {
      name: 'iepoyo candle 予約システム'
    }
  );
}

/**
 * スプレッドシートに予約情報を保存（エラーハンドリング強化版）
 */
function saveToSpreadsheet(formData, totalPrice, bookingId) {
  console.log('saveToSpreadsheet開始:', bookingId);
  
  try {
    // スプレッドシートIDの確認
    if (!SPREADSHEET_ID) {
      console.error('SPREADSHEET_IDが設定されていません');
      return;
    }
    
    let sheet;
    
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      sheet = spreadsheet.getSheetByName('予約一覧');
      
      // シートが存在しない場合は作成
      if (!sheet) {
        console.log('予約一覧シートが見つかりません。新規作成します。');
        sheet = spreadsheet.insertSheet('予約一覧');
        
        // ヘッダー行を設定
        const headers = [
          '予約番号',
          '予約受付日時',
          '体験日',
          '時間帯',
          '代表者名',
          'メールアドレス',
          '電話番号',
          '参加人数',
          'メニュー',
          'メニュー単価',
          'オプション',
          'オプション料金',
          '合計金額',
          '備考',
          'ステータス'
        ];
        
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
        
        // ヘッダー行のスタイルを設定
        const headerRange = sheet.getRange(1, 1, 1, headers.length);
        headerRange.setBackground('#ff6b6b');
        headerRange.setFontColor('#ffffff');
        headerRange.setFontWeight('bold');
      }
    } catch (openError) {
      console.error('スプレッドシートを開けません:', openError);
      console.error('スプレッドシートID:', SPREADSHEET_ID);
      return;
    }
    
    // ヘッダー行がない場合は追加
    if (sheet.getLastRow() === 0) {
      const headers = [
        '予約番号',
        '予約受付日時',
        '体験日',
        '時間帯',
        '代表者名',
        'メールアドレス',
        '電話番号',
        '参加人数',
        'メニュー',
        'メニュー単価',
        'オプション',
        'オプション料金',
        '合計金額',
        '備考',
        'ステータス'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // オプションをテキストに変換
    const optionText = formData.options.map(opt => opt.name).join(', ');
    
    // データを追加
    const rowData = [
      bookingId,
      new Date(), // 予約受付日時
      formData.date,
      formData.time,
      formData.name,
      formData.email,
      formData.phone,
      formData.participants,
      formData.menu.name,
      formData.menu.price,
      optionText,
      formData.options.length * 500,
      totalPrice,
      formData.remarks || '',
      '予約確定'
    ];
    
    sheet.appendRow(rowData);
    console.log('スプレッドシートへの保存完了:', bookingId);
    
  } catch (e) {
    console.error('スプレッドシート保存エラー:', e.toString());
    console.error('エラーの詳細:', e);
    console.error('formData:', JSON.stringify(formData));
    // エラーが発生してもメイン処理は継続
  }
}

/**
 * 予約管理用スプレッドシートを作成
 */
function createBookingSpreadsheet() {
  // 新しいスプレッドシートを作成
  const spreadsheet = SpreadsheetApp.create('iepoyo candle 予約管理');
  const sheet = spreadsheet.getActiveSheet();
  sheet.setName('予約一覧');
  
  // ヘッダー行を設定
  const headers = [
    '予約番号',
    '予約受付日時',
    '体験日',
    '時間帯',
    '代表者名',
    'メールアドレス',
    '電話番号',
    '参加人数',
    'メニュー',
    'メニュー単価',
    'オプション',
    'オプション料金',
    '合計金額',
    '備考',
    'ステータス'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // ヘッダー行のスタイルを設定
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#ff6b6b');
  headerRange.setFontColor('#ffffff');
  headerRange.setFontWeight('bold');
  
  // 列幅を調整
  sheet.setColumnWidth(1, 120); // 予約番号
  sheet.setColumnWidth(2, 150); // 予約受付日時
  sheet.setColumnWidth(3, 120); // 体験日
  sheet.setColumnWidth(4, 100); // 時間帯
  sheet.setColumnWidth(5, 120); // 代表者名
  sheet.setColumnWidth(6, 200); // メールアドレス
  sheet.setColumnWidth(7, 120); // 電話番号
  sheet.setColumnWidth(8, 80);  // 参加人数
  sheet.setColumnWidth(9, 150); // メニュー
  sheet.setColumnWidth(10, 100); // メニュー単価
  sheet.setColumnWidth(11, 150); // オプション
  sheet.setColumnWidth(12, 100); // オプション料金
  sheet.setColumnWidth(13, 100); // 合計金額
  sheet.setColumnWidth(14, 200); // 備考
  sheet.setColumnWidth(15, 100); // ステータス
  
  // フィルターを設定
  const dataRange = sheet.getRange(1, 1, sheet.getMaxRows(), headers.length);
  dataRange.createFilter();
  
  // スプレッドシートIDをログに出力
  const spreadsheetId = spreadsheet.getId();
  console.log('新しいスプレッドシートを作成しました');
  console.log('スプレッドシートID:', spreadsheetId);
  console.log('スプレッドシートURL:', spreadsheet.getUrl());
  console.log('');
  console.log('このIDを SPREADSHEET_ID 定数に設定してください：');
  console.log(`const SPREADSHEET_ID = '${spreadsheetId}';`);
  
  return sheet;
}

/**
 * カレンダーアクセスの確認と初期化
 */
function ensureCalendarAccess() {
  try {
    let calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    
    if (calendar === null) {
      // カレンダーが見つからない場合の処理
      console.log('指定されたカレンダーが見つかりません。');
      console.log('カレンダーID:', CALENDAR_ID);
      
      // カレンダーの購読を試みる
      try {
        CalendarApp.subscribeToCalendar(CALENDAR_ID);
        Utilities.sleep(2000); // 購読処理の完了を待つ
        calendar = CalendarApp.getCalendarById(CALENDAR_ID);
        
        if (calendar) {
          console.log('カレンダーの購読に成功しました。');
        }
      } catch (subscribeError) {
        console.error('カレンダーの購読に失敗しました:', subscribeError);
      }
    }
    
    return calendar;
  } catch (error) {
    console.error('カレンダーアクセスエラー:', error);
    return null;
  }
}

/**
 * 初期設定（プロジェクト作成時に実行）
 */
function initialSetup() {
  // カレンダーアクセスの確認
  const calendar = ensureCalendarAccess();
  
  if (calendar) {
    console.log('カレンダーアクセス: 成功');
    console.log('カレンダー名:', calendar.getName());
  } else {
    console.log('カレンダーアクセス: 失敗');
    console.log('以下を確認してください：');
    console.log('1. カレンダーIDが正しいか');
    console.log('2. カレンダーへのアクセス権限があるか');
    console.log('3. カレンダーが共有されているか');
  }
  
  // スプレッドシートの確認・作成
  if (!SPREADSHEET_ID) {
    console.log('');
    console.log('スプレッドシートが設定されていません。');
    console.log('新しいスプレッドシートを作成しますか？');
    console.log('作成する場合は createBookingSpreadsheet() を実行してください。');
  } else {
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      console.log('');
      console.log('スプレッドシートアクセス: 成功');
      console.log('スプレッドシート名:', spreadsheet.getName());
      console.log('URL:', spreadsheet.getUrl());
    } catch (e) {
      console.log('');
      console.log('スプレッドシートアクセス: 失敗');
      console.log('スプレッドシートIDを確認してください。');
    }
  }
  
  // Web Appの公開URLを表示
  const url = ScriptApp.getService().getUrl();
  console.log('');
  console.log('=== セットアップ完了 ===');
  console.log('Web App URL:', url);
  console.log('このURLにアクセスして予約フォームを利用できます。');
  console.log('');
  console.log('管理者メール:', ADMIN_EMAIL);
}

/**
 * メール送信前の設定確認と最適化
 */
function setupEmailDeliverability() {
  console.log('=== メール配信性向上の設定ガイド ===');
  console.log('');
  console.log('以下の設定を行うことで、迷惑メールフォルダに入る確率を下げることができます：');
  console.log('');
  console.log('1. SPFレコードの設定');
  console.log('   - Gmailアカウントを使用しているため、基本的にSPFは設定済みです');
  console.log('');
  console.log('2. お客様への案内');
  console.log('   - iepoyocandle@gmail.com を連絡先に追加してもらう');
  console.log('   - 予約フォームに「迷惑メールフォルダをご確認ください」の注意書きを追加済み');
  console.log('');
  console.log('3. メール内容の最適化（実装済み）');
  console.log('   - HTMLとプレーンテキストの両方を送信');
  console.log('   - 過度な装飾や画像を避ける');
  console.log('   - スパムワードを避ける');
  console.log('   - 明確な送信者名を設定');
  console.log('');
  console.log('4. 送信頻度の管理');
  console.log('   - 大量送信を避ける（予約ごとの送信なので問題なし）');
  console.log('   - 送信間隔を空ける（1秒の遅延を実装済み）');
  console.log('');
  console.log('5. 追加の対策');
  console.log('   - Google Workspace（有料版）を使用すると信頼性が向上します');
  console.log('   - 独自ドメインのメールアドレスを使用することも効果的です');
}

/**
 * 日付選択肢の更新（トリガー用）
 * 30分ごとに実行される
 */
function updateDateChoices() {
  console.log('updateDateChoices実行開始:', new Date());
  
  try {
    // この関数は元のコードでは日付選択肢を更新していましたが、
    // 現在のシステムではWeb App形式なので不要です
    // トリガーエラーを防ぐために空の関数として定義
    
    console.log('Web App形式のため、フォーム更新は不要です');
    
  } catch (e) {
    console.error('updateDateChoicesエラー:', e);
  }
}

/**
 * 不要なトリガーを削除
 */
function removeTriggers() {
  const triggers = ScriptApp.getProjectTriggers();
  
  triggers.forEach(trigger => {
    console.log('トリガー削除:', trigger.getHandlerFunction());
    ScriptApp.deleteTrigger(trigger);
  });
  
  console.log('すべてのトリガーを削除しました');
}