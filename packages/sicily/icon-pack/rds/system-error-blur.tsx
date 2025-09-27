import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 129 128" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M72.556 58.106a1 1 0 0 1 .447 1.341c-.353.707-1 1.326-1.652 1.76-.29.194-.62.376-.966.517.29.71.5 1.475.616 2.276h2.108a1 1 0 0 1 0 2h-2.012a10 10 0 0 1-.74 3.327c.572.33.963.86 1.21 1.35A5.5 5.5 0 0 1 72.108 73a1 1 0 0 1-1.993.117L70.11 73c0-.374-.1-.966-.332-1.428-.13-.26-.26-.409-.385-.489C68.14 72.844 66.286 74 64.11 74s-4.03-1.156-5.283-2.917c-.126.08-.255.23-.385.49-.21.447-.323.933-.332 1.427a1 1 0 0 1-2 0 5.5 5.5 0 0 1 .543-2.322c.246-.492.637-1.02 1.21-1.35a10 10 0 0 1-.74-3.328h-2.013a1 1 0 0 1 0-2h2.108c.113-.78.32-1.545.616-2.276a5.5 5.5 0 0 1-.966-.517c-.65-.434-1.3-1.053-1.652-1.76a1 1 0 0 1 1.73-.996l.058.102c.147.293.5.674.973.99.486.324.914.457 1.133.457h10c.22 0 .647-.133 1.133-.457.415-.277.736-.603.908-.876l.065-.114a1 1 0 0 1 1.341-.447M68.317 62h-8.416c-.498 1.004-.792 2.202-.792 3.5 0 3.309 1.837 5.773 4 6.364V65a1 1 0 1 1 2 0v6.864c2.163-.591 4-3.055 4-6.364 0-1.298-.294-2.496-.792-3.5m-4.208-7a5 5 0 0 1 4.33 2.5l.87 1.5h-10.4l.87-1.5a5 5 0 0 1 4.33-2.5"
        />
      </g>
      <g filter="url(#b)">
        <circle cx={64.359} cy={64} r={14} fill="currentColor" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M52.11 52h24v24h-24z" />
        </clipPath>
        <filter
          id="b"
          width={128}
          height={128}
          x={0.359}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_9040_38327" stdDeviation={25} />
        </filter>
      </defs>
    </svg>
  )
})
Icon.displayName = 'SystemErrorBlur'
export const SystemErrorBlur = Icon
