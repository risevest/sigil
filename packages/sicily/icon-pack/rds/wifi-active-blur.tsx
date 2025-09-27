import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 89 88" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M44.496 49a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4c1.38 0 2.632.56 3.536 1.464a1 1 0 1 1-1.415 1.415 2.99 2.99 0 0 0-2.12-.879c-.83 0-1.578.335-2.122.879a1 1 0 1 1-1.415-1.415A5 5 0 0 1 44.496 45m0-4a8.97 8.97 0 0 1 6.364 2.636 1 1 0 0 1-1.414 1.414 6.97 6.97 0 0 0-4.95-2.05 6.98 6.98 0 0 0-4.95 2.05 1 1 0 0 1-1.414-1.414A8.98 8.98 0 0 1 44.496 41m0-4c3.59 0 6.84 1.456 9.192 3.808a1 1 0 0 1-1.414 1.414A10.96 10.96 0 0 0 44.496 39a10.96 10.96 0 0 0-7.778 3.222 1 1 0 0 1-1.414-1.414A12.96 12.96 0 0 1 44.496 37"
        />
      </g>
      <g filter="url(#b)">
        <circle cx={44.5} cy={44} r={10} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M32.5 32h24v24h-24z" />
        </clipPath>
        <filter
          id="b"
          width={87.333}
          height={87.333}
          x={0.834}
          y={0.334}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_9040_38358"
            stdDeviation={16.833}
          />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'WifiActiveBlur'
export const WifiActiveBlur = Icon
