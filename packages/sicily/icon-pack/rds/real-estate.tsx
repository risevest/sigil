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
          d="M4.89 21.5v-9.375L3.09 13.5l-1.2-1.6 11-8.4 11 8.4-1.2 1.575-1.8-1.35V21.5zm4-6a.97.97 0 0 1-.712-.287.97.97 0 0 1-.287-.713q0-.424.287-.713a.97.97 0 0 1 .713-.287q.424 0 .712.287.288.288.288.713 0 .424-.288.713a.97.97 0 0 1-.712.287m4 0a.97.97 0 0 1-.712-.287.97.97 0 0 1-.287-.713q0-.424.287-.713a.97.97 0 0 1 .713-.287q.424 0 .712.287.288.288.288.713 0 .424-.288.713a.97.97 0 0 1-.712.287m4 0a.97.97 0 0 1-.712-.287.97.97 0 0 1-.287-.713q0-.424.287-.713a.97.97 0 0 1 .713-.287q.424 0 .712.287.288.288.288.713 0 .424-.288.713a.97.97 0 0 1-.712.287"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'RealEstate'
export const RealEstate = Icon
