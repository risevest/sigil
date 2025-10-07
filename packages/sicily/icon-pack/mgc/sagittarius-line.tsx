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
          d="M11 4.929a1 1 0 0 1 1-1h7.071a1 1 0 0 1 1 1v7.07a1 1 0 1 1-2 0V7.344l-7.485 7.485L12 16.242a1 1 0 0 1-1.414 1.415l-1.414-1.415-3.536 3.536a1 1 0 0 1-1.414-1.414l3.535-3.536-1.414-1.414A1 1 0 1 1 7.757 12l1.415 1.414 7.485-7.485H12a1 1 0 0 1-1-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'SagittariusLine'
/**
 * MingCute Icon: Sagittarius Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SagittariusLine = Icon
