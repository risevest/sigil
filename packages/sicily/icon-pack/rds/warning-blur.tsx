import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 129 128" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="m65.3 55.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H55.367a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0m-1.299 1.75-7.768 13.454H71.77zm0 10.102a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2m0-7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"
        />
      </g>
      <g filter="url(#b)">
        <circle cx={64.25} cy={64} r={14} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M52 52h24v24H52z" />
        </clipPath>
        <filter
          id="b"
          width={128}
          height={128}
          x={0.25}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_9040_38321" stdDeviation={25} />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'WarningBlur'
export const WarningBlur = Icon
