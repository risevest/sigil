import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0z" />
        <path
          fill="currentColor"
          d="M13 4a1 1 0 1 0-2 0v1H9.5a4 4 0 1 0 0 8h5a2 2 0 1 1 0 4H7a1 1 0 1 0 0 2h4v1a1 1 0 1 0 2 0v-1h1.5a4 4 0 0 0 0-8h-5a2 2 0 1 1 0-4H17a1 1 0 1 0 0-2h-4z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'CurrencyDollar2Line'
/**
 * MingCute Icon: Currency Dollar 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyDollar2Line = Icon
