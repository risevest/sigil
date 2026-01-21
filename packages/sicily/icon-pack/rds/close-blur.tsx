import { memo } from 'react'
import type { IconProps } from '../../types'
const CloseBlur = /* @__PURE__ */ memo(function CloseBlur(_props: IconProps) {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 88 88" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M44 34c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10m0 2a8 8 0 1 0 0 16.001A8 8 0 0 0 44 36m-2.121 4.464L44 42.586l2.121-2.122a1 1 0 0 1 1.415 1.415l-2.122 2.12 2.122 2.122a1 1 0 1 1-1.415 1.415L44 45.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L42.586 44l-2.121-2.121a1 1 0 0 1 1.414-1.415"
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
            result="effect1_foregroundBlur_9040_38334"
            stdDeviation={16.833}
          />
        </filter>
      </defs>
    </svg>
  )
})
export { CloseBlur }
