"use client"

import { useCallback, useEffect, useRef, useState } from "react"

type Options = {
  lang?: string
  onResult: (transcript: string) => void
  onError?: (message: string) => void
  onListeningStart?: () => void
}

export function useSpeechRecognition({ lang = "pt-BR", onResult, onError, onListeningStart }: Options) {
  const [supported, setSupported] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const recognitionRef = useRef<any>(null)

  // Mantém callbacks atualizados sem recriar o reconhecimento
  const onResultRef = useRef(onResult)
  const onErrorRef = useRef(onError)
  const onListeningStartRef = useRef(onListeningStart)
  onResultRef.current = onResult
  onErrorRef.current = onError
  onListeningStartRef.current = onListeningStart

  useEffect(() => {
    if (typeof window === "undefined") return
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      setSupported(false)
      return
    }

    setSupported(true)
    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onstart = () => {
      setIsRecording(true)
      onListeningStartRef.current?.()
    }
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onResultRef.current(transcript)
    }
    recognition.onerror = (event: any) => {
      console.error("[v0] Erro no reconhecimento de voz", event.error)
      if (event.error !== "aborted") {
        onErrorRef.current?.("Erro no reconhecimento de voz.")
      }
    }
    recognition.onend = () => {
      setIsRecording(false)
    }

    recognitionRef.current = recognition

    return () => {
      try {
        recognition.abort()
      } catch {
        // ignore
      }
    }
  }, [lang])

  const toggle = useCallback(() => {
    const recognition = recognitionRef.current
    if (!recognition) {
      onErrorRef.current?.("Reconhecimento de voz não suportado neste navegador.")
      return
    }
    if (isRecording) {
      recognition.stop()
    } else {
      recognition.start()
    }
  }, [isRecording])

  return { supported, isRecording, toggle }
}
