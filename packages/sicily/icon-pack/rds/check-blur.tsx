import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 129 128" width="1em" height="1em" {...props}>
      <g filter="url(#a)">
        <circle cx={64.375} cy={64} r={14} fill="currentColor" />
      </g>
      <g clipPath="url(#b)">
        <path
          fill="currentColor"
          d="M64.375 54c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001 8 8 0 0 0 0-16.001m3.535 4.381a1 1 0 0 1 1.498 1.32l-.083.094-5.586 5.587a1.1 1.1 0 0 1-1.46.085l-.096-.085-2.758-2.758a1 1 0 0 1 1.32-1.498l.094.084 2.122 2.121 4.95-4.95z"
        />
      </g>
      <defs>
        <clipPath id="b">
          <path fill="currentColor" d="M52.375 52h24v24h-24z" />
        </clipPath>
        <filter
          id="a"
          width={128}
          height={128}
          x={0.375}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_9040_38315" stdDeviation={25} />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'CheckBlur'
export const CheckBlur = Icon
