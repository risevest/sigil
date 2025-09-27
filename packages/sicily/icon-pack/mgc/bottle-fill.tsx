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
          d="M9 2a2 2 0 0 0-2 2v1c0 .378.105.732.288 1.034L5.6 7.3A4 4 0 0 0 4 10.5V18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-7.5a4 4 0 0 0-1.6-3.2l-1.688-1.266A2 2 0 0 0 17 5V4a2 2 0 0 0-2-2zm6 3V4H9v1zm3 8H6v-2h12zM6 15h12v2H6z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'BottleFill'
/**
 * MingCute Icon: Bottle Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BottleFill = Icon
