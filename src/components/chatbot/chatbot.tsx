'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChatMessage, ChatOption, chatbotDatabase, welcomeMessage } from './chatbot-data'
import Link from 'next/link'

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateId = () => Math.random().toString(36).substr(2, 9)

  const handleOptionClick = (option: ChatOption) => {
    // ユーザーメッセージを追加
    const userMessage: ChatMessage = {
      id: generateId(),
      text: option.text,
      isBot: false,
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // ボットの返答を準備
    setTimeout(() => {
      const responseKey = typeof option.response === 'string' ? option.response : ''
      const responseData = chatbotDatabase[responseKey]

      if (responseData) {
        const botMessage: ChatMessage = {
          id: generateId(),
          text: responseData.text,
          isBot: true,
          timestamp: new Date(),
          type: responseData.type || 'text',
          options: responseData.options,
          link: responseData.link
        }

        setMessages(prev => [...prev, botMessage])
      }
      setIsTyping(false)
    }, 1000)
  }

  const handleQuickResponse = (text: string) => {
    // 簡易的なキーワードマッチング
    let responseKey = 'help'
    
    if (text.includes('体験')) responseKey = 'experience_info'
    else if (text.includes('料金')) responseKey = 'price_info'
    else if (text.includes('予約')) responseKey = 'reservation_info'
    else if (text.includes('雨')) responseKey = 'weather_info'
    else if (text.includes('アクセス')) responseKey = 'access_info'

    const option: ChatOption = {
      id: responseKey,
      text: text,
      response: responseKey
    }

    handleOptionClick(option)
  }

  const renderMessage = (message: ChatMessage) => (
    <div
      key={message.id}
      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          message.isBot
            ? 'bg-miyako-blue text-white'
            : 'bg-soft-pink text-gray-800'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
        
        {/* オプションボタン */}
        {message.options && (
          <div className="mt-3 space-y-2">
            {message.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className="block w-full text-left text-xs px-3 py-2 bg-white/20 hover:bg-white/30 rounded-md transition-colors duration-200"
              >
                {option.text}
              </button>
            ))}
          </div>
        )}

        {/* リンクボタン */}
        {message.link && (
          <div className="mt-3">
            {message.link.external ? (
              <a
                href={message.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs px-3 py-2 bg-white/20 hover:bg-white/30 rounded-md transition-colors duration-200"
              >
                {message.link.text} 🔗
              </a>
            ) : (
              <Link
                href={message.link.url}
                className="inline-block text-xs px-3 py-2 bg-white/20 hover:bg-white/30 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {message.link.text}
              </Link>
            )}
          </div>
        )}
        
        <p className="text-xs opacity-70 mt-2">
          {message.timestamp.toLocaleTimeString('ja-JP', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* チャットボットトグルボタン */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-miyako-blue to-soft-pink hover:scale-110 transform transition-all duration-300 shadow-lg"
        >
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">💬</span>
          )}
        </Button>
      </motion.div>

      {/* チャットウィンドウ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-80 h-[48rem]"
          >
            <Card className="h-full bg-white/95 backdrop-blur-sm border-0 shadow-xl overflow-hidden flex flex-col">
              {/* ヘッダー */}
              <div className="bg-gradient-to-r from-miyako-blue to-soft-pink p-4 text-white">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">🕯️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">iepoyo candle</h3>
                    <p className="text-xs opacity-90">お気軽にお聞きください！</p>
                  </div>
                </div>
              </div>

              {/* メッセージエリア */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {/* 初期メッセージ */}
                {messages.length === 0 && (
                  <div className="space-y-4">
                    <div className="flex justify-start mb-4">
                      <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-miyako-blue text-white">
                        <p className="text-sm whitespace-pre-line">{welcomeMessage.text}</p>
                      </div>
                    </div>
                    
                    {/* 質問ボタンを事前表示 */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 mb-3 text-center">よくあるご質問はこちら👇</p>
                      {welcomeMessage.options?.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left px-4 py-3 bg-gradient-to-r from-miyako-blue/10 to-soft-pink/10 hover:from-miyako-blue/20 hover:to-soft-pink/20 rounded-lg transition-all duration-200 text-sm font-medium text-gray-700 border border-miyako-blue/20"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {messages.map(renderMessage)}
                
                {/* タイピングインジケーター */}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-miyako-blue text-white px-4 py-2 rounded-lg max-w-xs">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* クイック返答 */}
              <div className="border-t border-gray-200 p-3">
                <div className="flex flex-wrap gap-2">
                  {['体験について', '料金', '予約方法', '雨の日OK？'].map((text) => (
                    <button
                      key={text}
                      onClick={() => handleQuickResponse(text)}
                      className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}