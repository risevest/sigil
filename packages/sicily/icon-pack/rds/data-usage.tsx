import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 25 24" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={25}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path d="M.891 0h24v24h-24z" />
      </mask>
      <g mask="url(#a)">
        <path d="M12.89 22a9.7 9.7 0 0 1-3.9-.787 10 10 0 0 1-3.174-2.15q-1.35-1.362-2.138-3.187A9.7 9.7 0 0 1 2.891 12q0-3.925 2.6-6.75t6.4-3.2v3q-2.575.35-4.288 2.312-1.712 1.963-1.712 4.638 0 2.9 2.05 4.95T12.89 19q1.65 0 3.087-.7a7 7 0 0 0 2.413-1.9l2.6 1.5q-1.35 1.875-3.475 2.987t-4.625 1.113m9.15-5.95-2.6-1.5q.225-.6.338-1.237a7.5 7.5 0 0 0 .113-1.312q0-2.676-1.713-4.638-1.712-1.962-4.287-2.312v-3q3.8.375 6.4 3.2 2.6 2.824 2.6 6.75 0 1.1-.2 2.125a7.5 7.5 0 0 1-.65 1.925" />
      </g>
    </svg>
  )
})
Icon.displayName = 'DataUsage'
export const DataUsage = Icon
