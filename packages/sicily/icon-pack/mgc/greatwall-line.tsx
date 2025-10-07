import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M6.5 3a1.5 1.5 0 0 1 1.493 1.356L8 4.5V6h1V4.5a1.5 1.5 0 0 1 1.356-1.493L10.5 3h3a1.5 1.5 0 0 1 1.493 1.356L15 4.5V6h1V4.5a1.5 1.5 0 0 1 1.356-1.493L17.5 3h3a1.5 1.5 0 0 1 1.493 1.356L22 4.5v15a1.5 1.5 0 0 1-1.356 1.493L20.5 21h-17a1.5 1.5 0 0 1-1.493-1.356L2 19.5v-15a1.5 1.5 0 0 1 1.356-1.493L3.5 3zM20 16h-3v3h3zm-5 0H9v3h6zm-8 0H4v3h3zm13-4h-7v2h7zm-9 0H4v2h7zM6 5H4v5h16V5h-2v1.5A1.5 1.5 0 0 1 16.5 8h-2A1.5 1.5 0 0 1 13 6.5V5h-2v1.5A1.5 1.5 0 0 1 9.5 8h-2A1.5 1.5 0 0 1 6 6.5z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'GreatwallLine'
/**
 * MingCute Icon: Greatwall Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GreatwallLine = Icon
