// iepoyo candle 予約システム JavaScript

// 設定
const CONFIG = {
    GAS_API_URL: 'https://script.google.com/macros/s/AKfycbxgDgMbiNbomPR4PlnnU7gfnMq5kuV-Hikt6xoUceUWe74vobIR0H8HZFiyFlE5Cwc/exec',
    TIME_SLOTS: [
        '11:00～12:30',
        '13:30～15:00', 
        '16:00～17:30',
        '18:30～20:00',
        '21:00～22:30'
    ]
};

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

// グローバル変数
let currentDate = new Date();
let selectedDate = null;
let selectedTime = null;
let selectedMenu = null;
let selectedOptions = [];
let availableDates = {};

// API通信クラス
class BookingAPI {
    static async request(endpoint, options = {}) {
        try {
            const response = await fetch(endpoint, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (!data.success) {
                throw new Error(data.error || 'API エラーが発生しました');
            }
            
            return data.data;
        } catch (error) {
            console.error('API リクエストエラー:', error);
            throw error;
        }
    }
    
    static async getAvailableDates() {
        const url = `${CONFIG.GAS_API_URL}?action=getAvailableDates`;
        return await this.request(url);
    }
    
    static async getTimeSlots(date) {
        const url = `${CONFIG.GAS_API_URL}?action=getTimeSlots&date=${encodeURIComponent(date)}`;
        return await this.request(url);
    }
    
    static async submitBooking(bookingData) {
        return await this.request(CONFIG.GAS_API_URL, {
            method: 'POST',
            body: JSON.stringify(bookingData)
        });
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    initializeMenus();
    setupEventListeners();
    loadAvailableDates();
});

// カレンダーの初期化
function initializeCalendar() {
    renderCalendar();
}

// カレンダーのレンダリング
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // 月の表示を更新
    document.getElementById('currentMonth').textContent = 
        `${year}年${month + 1}月`;
    
    // カレンダーグリッドをクリア
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    // 曜日ヘッダー
    const dayHeaders = ['日', '月', '火', '水', '木', '金', '土'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        calendar.appendChild(header);
    });
    
    // 月の最初の日と最後の日を取得
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // 最初の週の空白
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        calendar.appendChild(emptyDay);
    }
    
    // 日付を生成
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        const dateObj = new Date(year, month, day);
        const dateStr = formatDateForKey(dateObj);
        
        // 過去の日付は無効化
        if (dateObj < today) {
            dayElement.classList.add('disabled');
        } else if (availableDates[dateStr]) {
            dayElement.classList.add('has-slots');
            dayElement.onclick = () => selectDate(dateObj);
        } else {
            dayElement.onclick = () => selectDate(dateObj);
        }
        
        // 選択された日付をハイライト
        if (selectedDate && 
            selectedDate.getDate() === day && 
            selectedDate.getMonth() === month && 
            selectedDate.getFullYear() === year) {
            dayElement.classList.add('selected');
        }
        
        calendar.appendChild(dayElement);
    }
}

// 日付選択
function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    
    document.getElementById('selectedDate').value = formatDateForKey(date);
    
    // 時間帯を読み込み
    loadTimeSlots(date);
}

// 時間帯の読み込み
async function loadTimeSlots(date) {
    const timeSlotGroup = document.getElementById('timeSlotGroup');
    const timeSlotsContainer = document.getElementById('timeSlots');
    
    timeSlotGroup.style.display = 'block';
    timeSlotsContainer.innerHTML = '<p>読み込み中...</p>';
    
    try {
        const slots = await BookingAPI.getTimeSlots(formatDateForKey(date));
        renderTimeSlots(slots);
    } catch (error) {
        console.error('時間帯読み込みエラー:', error);
        timeSlotsContainer.innerHTML = '<p style="color: red;">エラーが発生しました</p>';
    }
}

// 時間帯のレンダリング
function renderTimeSlots(slots) {
    const container = document.getElementById('timeSlots');
    container.innerHTML = '';
    
    if (slots.length === 0) {
        container.innerHTML = '<p>この日は予約できる時間帯がありません</p>';
        return;
    }
    
    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;
        slotElement.onclick = () => selectTimeSlot(slot, slotElement);
        container.appendChild(slotElement);
    });
}

// 時間帯選択
function selectTimeSlot(time, element) {
    // 以前の選択をクリア
    document.querySelectorAll('.time-slot').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedTime = time;
    document.getElementById('selectedTime').value = time;
}

// メニューの初期化
function initializeMenus() {
    // メインメニュー
    const menuContainer = document.getElementById('menuItems');
    MENU_ITEMS.forEach(item => {
        const menuElement = document.createElement('div');
        menuElement.className = 'menu-item';
        if (item.recommended) {
            menuElement.classList.add('recommended');
        }
        menuElement.innerHTML = `
            <span>${item.name}</span>
            <span class="menu-price">¥${item.price.toLocaleString()}</span>
        `;
        menuElement.onclick = () => selectMenu(item, menuElement);
        menuContainer.appendChild(menuElement);
    });
    
    // オプション
    const optionContainer = document.getElementById('optionItems');
    OPTION_ITEMS.forEach(item => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option-item';
        optionElement.innerHTML = `
            <span>${item.name}</span>
            <span>¥${item.price}</span>
        `;
        optionElement.onclick = () => toggleOption(item, optionElement);
        optionContainer.appendChild(optionElement);
    });
}

// メニュー選択
function selectMenu(menu, element) {
    document.querySelectorAll('.menu-item').forEach(el => {
        el.classList.remove('selected');
    });
    
    element.classList.add('selected');
    selectedMenu = menu;
    document.getElementById('selectedMenu').value = 
        `${menu.name}：${menu.price}円`;
}

// オプション選択
function toggleOption(option, element) {
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectedOptions = selectedOptions.filter(o => o.name !== option.name);
    } else {
        element.classList.add('selected');
        selectedOptions.push(option);
    }
}

// イベントリスナーの設定
function setupEventListeners() {
    // カレンダーナビゲーション
    document.getElementById('prevMonth').onclick = () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    };
    
    document.getElementById('nextMonth').onclick = () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    };
    
    // フォーム送信
    document.getElementById('bookingForm').onsubmit = (e) => {
        e.preventDefault();
        submitForm();
    };
}

// 利用可能な日付を読み込み
async function loadAvailableDates() {
    try {
        const dates = await BookingAPI.getAvailableDates();
        dates.forEach(date => {
            availableDates[date.value] = true;
        });
        renderCalendar();
    } catch (error) {
        console.error('日付の読み込みに失敗しました:', error);
    }
}

// フォーム送信
async function submitForm() {
    console.log('submitForm開始');
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        participants: document.getElementById('participants').value,
        date: formatDateForDisplay(selectedDate),
        time: selectedTime,
        menu: selectedMenu,
        options: selectedOptions,
        remarks: document.getElementById('remarks').value
    };
    
    console.log('送信データ:', formData);
    
    // バリデーション
    if (!validateForm(formData)) {
        return;
    }
    
    // ローディング表示
    document.getElementById('submitButton').disabled = true;
    document.getElementById('loading').classList.add('show');
    
    try {
        const result = await BookingAPI.submitBooking(formData);
        console.log('予約成功:', result);
        
        // 合計金額を計算
        const menuPrice = formData.menu.price;
        const participantCount = parseInt(formData.participants);
        const optionCount = formData.options.length;
        const totalPrice = (menuPrice * participantCount) + 
                          (optionCount * 500 * participantCount);
        
        // thanks.htmlへリダイレクト
        const thanksUrl = new URL('thanks.html', window.location.origin + window.location.pathname.replace(/[^/]*$/, ''));
        thanksUrl.searchParams.append('date', formData.date);
        thanksUrl.searchParams.append('time', formData.time);
        thanksUrl.searchParams.append('name', formData.name);
        thanksUrl.searchParams.append('participants', formData.participants);
        thanksUrl.searchParams.append('menu', formData.menu.name);
        thanksUrl.searchParams.append('total', totalPrice.toLocaleString());
        
        console.log('thanks.htmlへリダイレクト:', thanksUrl.toString());
        window.location.href = thanksUrl.toString();
        
    } catch (error) {
        console.error('予約エラー:', error);
        document.getElementById('loading').classList.remove('show');
        document.getElementById('submitButton').disabled = false;
        alert('予約の送信に失敗しました。もう一度お試しください。\nエラー: ' + error.message);
    }
}

// フォームバリデーション
function validateForm(formData) {
    // 必須項目チェック
    if (!formData.name || !formData.email || !formData.phone || !formData.participants) {
        alert('必須項目を入力してください。');
        return false;
    }
    
    if (!selectedDate || !selectedTime || !selectedMenu) {
        alert('日時とメニューを選択してください。');
        return false;
    }
    
    // メールアドレス形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('正しいメールアドレスを入力してください。');
        return false;
    }
    
    // 電話番号チェック
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(formData.phone.replace(/-/g, ''))) {
        alert('正しい電話番号を入力してください。');
        return false;
    }
    
    return true;
}

// 日付フォーマット（キー用）
function formatDateForKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 日付フォーマット（表示用）
function formatDateForDisplay(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${year}年${month}月${day}日（${dayOfWeek}）`;
}

// デバッグ用：モックデータでテスト
function enableDebugMode() {
    console.log('デバッグモードを有効化');
    
    // モックAPI レスポンス
    BookingAPI.getAvailableDates = async () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i < 14; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push({
                value: formatDateForKey(date),
                display: formatDateForDisplay(date)
            });
        }
        return dates;
    };
    
    BookingAPI.getTimeSlots = async (date) => {
        return CONFIG.TIME_SLOTS;
    };
    
    BookingAPI.submitBooking = async (data) => {
        console.log('モック予約送信:', data);
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒待機
        return { success: true, message: 'モック予約完了' };
    };
    
    // 利用可能日付を再読み込み
    loadAvailableDates();
}

// URLパラメータでデバッグモードを有効化
if (window.location.search.includes('debug=true')) {
    enableDebugMode();
}