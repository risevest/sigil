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
          d="M8.701 5.75c.577-1 2.02-1 2.598 0l3.5 6.062.902-1.562c.577-1 2.02-1 2.598 0l4.33 7.5A1.5 1.5 0 0 1 21.33 20H17v-.002l-.072.002H3.072a1.5 1.5 0 0 1-1.3-2.25zm-.91 5.576.709.472.945-.63a1 1 0 0 1 1.11 0l.945.63.709-.472L10 7.5z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Mountain2Fill'
/**
 * MingCute Icon: Mountain 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Mountain2Fill = Icon
