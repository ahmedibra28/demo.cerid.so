'use client'

const base64 =
  'data:image/webp;base64,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'

import React from 'react'
import Image from 'next/image'

interface BlurImageProps {
  src: string
  width: number
  height: number
  alt: string
  className?: string
  quality?: number
  style?: React.CSSProperties
  zoomIn?: boolean
}

const BlurImage: React.FC<BlurImageProps> = ({
  src,
  width,
  height,
  alt,
  className,
  quality = 75,
  style,
  zoomIn = false,
}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <Image
      src={src}
      width={width}
      height={height}
      blurDataURL={base64}
      placeholder='blur'
      alt={alt}
      className={` ${
        zoomIn && 'hover:schale-110'
      } transition-all duration-300 ${
        isLoading
          ? 'schale-110 blur-lg grayscale'
          : 'schale-100 blur-0 grayscale-0'
      } ${className}`}
      onLoadingComplete={() => setIsLoading(false)}
      quality={quality}
      style={style}
    />
  )
}

export default BlurImage
