import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`
        relative w-full max-w-[669px] h-[165px] rounded-[14px] overflow-hidden
        bg-gradient-to-br from-[rgba(105,59,147,0.2)] via-[rgba(110,191,244,0.0447917)] to-[rgba(70,144,213,0)]
        backdrop-blur-[40px]
        ${className}
      `}
    >
      {children}
    </div>
  )
}
