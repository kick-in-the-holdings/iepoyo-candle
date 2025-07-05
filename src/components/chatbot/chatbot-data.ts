export interface ChatMessage {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  type?: 'text' | 'options' | 'link'
  options?: ChatOption[]
  link?: {
    url: string
    text: string
    external?: boolean
  }
}

export interface ChatOption {
  id: string
  text: string
  response: string | ChatResponse
}

export interface ChatResponse {
  text: string
  type?: 'text' | 'options' | 'link'
  options?: ChatOption[]
  link?: {
    url: string
    text: string
    external?: boolean
  }
}

export const chatbotDatabase: Record<string, ChatResponse> = {
  greeting: {
    text: "こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？",
    type: "options",
    options: [
      {
        id: "experience_info",
        text: "体験について知りたい",
        response: "experience_info"
      },
      {
        id: "price_info", 
        text: "料金を教えて",
        response: "price_info"
      },
      {
        id: "access_info",
        text: "アクセス方法",
        response: "access_info"
      },
      {
        id: "reservation_info",
        text: "予約について",
        response: "reservation_info"
      },
      {
        id: "weather_info",
        text: "雨の日でも大丈夫？",
        response: "weather_info"
      },
      {
        id: "flow_info",
        text: "当日の流れを知りたい",
        response: "flow_info"
      }
    ]
  },

  experience_info: {
    text: "キャンドル作り体験について詳しくご説明しますね😊\n\n🕯️ **体験内容**\n・所要時間：約90分\n・対象年齢：6歳以上\n・定員：1〜8名\n・当日お持ち帰りOK\n\n✨ 初心者の方でも安心してお楽しみいただけるよう、スタッフがしっかりサポートします！",
    type: "options",
    options: [
      {
        id: "candle_types",
        text: "どんなキャンドルが作れる？",
        response: "candle_types"
      },
      {
        id: "options_info",
        text: "オプションはある？",
        response: "options_info"
      },
      {
        id: "reservation_link",
        text: "予約したい",
        response: "reservation_link"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  candle_types: {
    text: "作れるキャンドルの種類をご紹介します😍\n\n🌊 **マーブルキャンドル** - ¥2,500\n美しいマーブル模様のキャンドル\n\n🐚 **貝殻キャンドル** - ¥3,000\n宮古島の貝殻を使ったキャンドル\n\n⭕ **球体キャンドル** - ¥3,500\nころんと可愛い球体のキャンドル\n\n⭕ **球体キャンドル(big)** - ¥5,000\n大きめサイズの球体キャンドル",
    type: "options",
    options: [
      {
        id: "options_info",
        text: "オプションも知りたい",
        response: "options_info"
      },
      {
        id: "reservation_link",
        text: "体験を予約する",
        response: "reservation_link"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  options_info: {
    text: "オプションで更にかわいくできます💫\n\n✨ **ラメ・金箔** - +¥500\nキラキラ輝くラメや金箔でデコレーション\n\n🌸 **エッセンシャルオイル** - +¥500\nお好みの香りをプラス\n\nどちらも人気のオプションです！",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "予約したい",
        response: "reservation_link"
      },
      {
        id: "price_info",
        text: "全体の料金を確認",
        response: "price_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  price_info: {
    text: "料金表をご案内します☺️\n\n**基本料金**\n🌊 マーブルキャンドル：¥2,500\n🐚 貝殻キャンドル：¥3,000\n⭕ 球体キャンドル：¥3,500\n⭕ 球体キャンドル(big)：¥5,000\n\n**オプション**\n✨ ラメ・金箔：+¥500\n🌸 エッセンシャルオイル：+¥500",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "予約する",
        response: "reservation_link"
      },
      {
        id: "experience_info",
        text: "体験詳細を知りたい",
        response: "experience_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  access_info: {
    text: "アクセス情報をご案内します😊\n\n📍 **住所**\n〒906-0008 沖縄県宮古島市平良荷川取206-3\n\n🚗 **お車で**\n・宮古空港から約15分\n・平良市街地から約10分\n・無料駐車場5台完備\n\n🚐 **送迎サービス**\n平良市街地のホテルから無料送迎あり（要事前予約）",
    type: "options",
    options: [
      {
        id: "map_link",
        text: "地図を見る",
        response: "map_link"
      },
      {
        id: "reservation_info",
        text: "予約について",
        response: "reservation_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  map_link: {
    text: "詳しい場所はこちらから確認できます！",
    type: "link",
    link: {
      url: "/access",
      text: "アクセス詳細ページを見る"
    }
  },

  reservation_info: {
    text: "ご予約について詳しくご説明します😉\n\n⏰ **営業時間**\n10:00〜18:00（最終受付16:30）\n\n📅 **予約方法**\n事前予約制となっております\nLINEからご予約をお願いします\n\n🎯 **所要時間**\n約90分\n\n👥 **定員**\n1〜8名",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "LINEで予約する",
        response: "reservation_link"
      },
      {
        id: "weather_info",
        text: "雨の日でも大丈夫？",
        response: "weather_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  reservation_link: {
    text: "LINEで簡単にご予約いただけます！",
    type: "link",
    link: {
      url: "https://lin.ee/PhCo4lv",
      text: "LINEで予約する",
      external: true
    }
  },

  weather_info: {
    text: "雨の日でも安心です😌\n\n🏠 **室内体験**\n屋内での体験のため、雨でも台風でも安心してお楽しみいただけます\n\n🌈 **むしろおすすめ**\n雨の日こそ、ゆっくりとキャンドル作りを楽しむ絶好のチャンス！\n\n📸 **インスタ映え**\n天気に関係なく、素敵な写真が撮れます",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "予約したい",
        response: "reservation_link"
      },
      {
        id: "experience_info",
        text: "体験について詳しく",
        response: "experience_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  flow_info: {
    text: "当日の流れをご説明します😄\n\n**1️⃣ 受付（5分）**\n店舗に到着後、受付でお名前をお伝えください\n\n**2️⃣ 説明（10分）**\n作り方とキャンドルの種類を説明します\n\n**3️⃣ 制作（60分）**\nお好きなデザインでキャンドル作り\n\n**4️⃣ 仕上げ（10分）**\nスタッフが最終仕上げをお手伝い\n\n**5️⃣ ラッピング（5分）**\nギフトボックスに入れてお渡し\n\n📸 制作中の写真撮影もOK！",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "予約したい",
        response: "reservation_link"
      },
      {
        id: "access_info",
        text: "場所を確認",
        response: "access_info"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  help: {
    text: "他にもお聞きになりたいことがありましたら、お気軽にお声がけください！\n\n💡 よくあるご質問も準備しておりますので、ぜひご活用ください。",
    type: "options",
    options: [
      {
        id: "faq",
        text: "よくある質問を見る",
        response: "faq"
      },
      {
        id: "contact",
        text: "直接お問い合わせ",
        response: "contact"
      },
      {
        id: "back_to_menu",
        text: "最初に戻る",
        response: "greeting"
      }
    ]
  },

  faq: {
    text: "よくあるご質問をまとめました❓\n\n**Q: 初心者でも大丈夫？**\nA: はい！スタッフがしっかりサポートします\n\n**Q: 子供も参加できる？**\nA: 6歳以上のお子様から参加可能です\n\n**Q: 当日持ち帰れる？**\nA: 翌日お受け取り、または郵送（送料はお客様負担）となります",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "予約する",
        response: "reservation_link"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  },

  contact: {
    text: "直接のお問い合わせについて📞\n\n現在、お電話でのお問い合わせは承っておりません。\nご予約・お問い合わせは**LINE**からお願いいたします。\n\nご不便をおかけして申し訳ございません🙏",
    type: "options",
    options: [
      {
        id: "reservation_link",
        text: "LINEで問い合わせ",
        response: "reservation_link"
      },
      {
        id: "back_to_menu",
        text: "メニューに戻る",
        response: "greeting"
      }
    ]
  }
}

export const quickResponses = [
  "体験について",
  "料金を知りたい",
  "予約方法",
  "雨の日OK？",
  "アクセス"
]

export const welcomeMessage: ChatMessage = {
  id: "welcome",
  text: "こんにちは！iepoyo candleへようこそ😊 どんなことをお聞きになりたいですか？",
  isBot: true,
  timestamp: new Date(),
  type: "options",
  options: [
    {
      id: "experience_info",
      text: "体験について知りたい",
      response: "experience_info"
    },
    {
      id: "price_info", 
      text: "料金を教えて",
      response: "price_info"
    },
    {
      id: "access_info",
      text: "アクセス方法",
      response: "access_info"
    },
    {
      id: "reservation_info",
      text: "予約について",
      response: "reservation_info"
    },
    {
      id: "weather_info",
      text: "雨の日でも大丈夫？",
      response: "weather_info"
    }
  ]
}