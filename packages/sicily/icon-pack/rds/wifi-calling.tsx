import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 25 25" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={25}
        height={25}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill="currentColor" d="M.891.5h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="currentColor"
          d="M20.84 21.5q-3.125 0-6.174-1.363-3.051-1.362-5.55-3.862-2.5-2.5-3.863-5.55T3.891 4.55q0-.45.3-.75t.75-.3h4.05a.93.93 0 0 1 .625.237.9.9 0 0 1 .325.563l.65 3.5q.05.4-.025.675t-.275.475L7.866 11.4q.5.926 1.187 1.787.688.863 1.513 1.663.774.775 1.625 1.438.849.661 1.8 1.212l2.35-2.35a1.4 1.4 0 0 1 .587-.338 1.6 1.6 0 0 1 .713-.062l3.45.7q.35.1.575.363a.88.88 0 0 1 .225.587v4.05q0 .45-.3.75t-.75.3M17.39 11l-5.524-5.55A9.7 9.7 0 0 1 14.54 4q1.425-.5 2.85-.5a8.2 8.2 0 0 1 2.812.513q1.413.512 2.688 1.487z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'WifiCalling'
export const WifiCalling = Icon
