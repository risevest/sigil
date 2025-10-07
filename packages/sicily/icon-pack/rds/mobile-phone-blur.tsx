import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 88 88" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M44 34a1 1 0 0 1 0 2h-4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v7a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V37a3 3 0 0 1 3-3zm0 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m6-15a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 50 33m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804.355-.448.804-.804a5 5 0 0 1-.804-.804"
          clipRule="evenodd"
        />
      </g>
      <g filter="url(#b)">
        <circle cx={44} cy={44} r={10} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M32 32h24v24H32z" />
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
            result="effect1_foregroundBlur_9040_38340"
            stdDeviation={16.833}
          />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'MobilePhoneBlur'
export const MobilePhoneBlur = Icon
