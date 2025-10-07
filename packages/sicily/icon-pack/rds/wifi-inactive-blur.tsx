import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 88 88" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M35.718 35.222a1 1 0 0 1 1.32-.083l.094.083 2.395 2.395a13 13 0 0 1 3.97-.617c3.59 0 6.84 1.456 9.191 3.808a1 1 0 0 1-1.414 1.414A10.96 10.96 0 0 0 43.496 39q-.964.001-1.882.16l-.455.089 1.77 1.769a8.97 8.97 0 0 1 6.931 2.618 1 1 0 0 1-1.414 1.414 7 7 0 0 0-3.057-1.791l-.296-.076 6.181 6.18a1 1 0 0 1-1.32 1.498l-.094-.083-14.142-14.142a1 1 0 0 1 0-1.414M43.496 49l.117.007a1 1 0 1 1-.234 0zm-1.247-3.843 1.918 1.918a2.99 2.99 0 0 0-2.792.803 1 1 0 0 1-1.415-1.414 5 5 0 0 1 2.028-1.232zm-3.06-3.06 1.492 1.492a7 7 0 0 0-2.135 1.46 1 1 0 0 1-1.414-1.413 9 9 0 0 1 2.056-1.54zm-2.91-2.91 1.446 1.446c-.728.45-1.402.983-2.007 1.589a1 1 0 0 1-1.414-1.414 13 13 0 0 1 1.974-1.622z"
        />
      </g>
      <g filter="url(#b)">
        <circle cx={44} cy={44} r={10} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M31.5 32h24v24h-24z" />
        </clipPath>
        <filter
          id="b"
          width={87.333}
          height={87.333}
          x={0.334}
          y={0.334}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            result="effect1_foregroundBlur_9040_38352"
            stdDeviation={16.833}
          />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'WifiInactiveBlur'
export const WifiInactiveBlur = Icon
