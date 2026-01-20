import { memo } from 'react'
import type { IconProps } from '../../types'
const InfoBlur = /* @__PURE__ */ memo(function InfoBlur(_props: IconProps) {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 89 88" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M44.5 34c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001A8 8 0 0 0 44.5 36m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 45 50h-.49a1.01 1.01 0 0 1-1.01-1.01V44a1 1 0 0 1 0-2zm.01-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
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
            result="effect1_foregroundBlur_9040_38346"
            stdDeviation={16.833}
          />
        </filter>
      </defs>
    </svg>
  )
})
export { InfoBlur }
