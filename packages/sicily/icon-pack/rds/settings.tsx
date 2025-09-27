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
          d="m10.14 22.5-.4-3.2a4 4 0 0 1-.613-.3 8 8 0 0 1-.562-.375l-2.975 1.25-2.75-4.75 2.575-1.95a2.4 2.4 0 0 1-.025-.338v-.675q0-.162.025-.337L2.84 9.875l2.75-4.75 2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.324.125.612.3t.563.375l2.975-1.25 2.75 4.75-2.575 1.95q.025.176.025.338v.675q0 .162-.05.337l2.575 1.95-2.75 4.75-2.95-1.25a7 7 0 0 1-.575.375q-.3.175-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025A3.37 3.37 0 0 0 16.44 12.5q0-1.45-1.025-2.475A3.37 3.37 0 0 0 12.94 9q-1.475 0-2.488 1.025A3.4 3.4 0 0 0 9.44 12.5q0 1.45 1.012 2.475T12.94 16"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Settings'
export const Settings = Icon
