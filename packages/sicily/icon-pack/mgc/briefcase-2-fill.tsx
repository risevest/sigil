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
          d="M9 14a3 3 0 0 0 5.995.176L15 14h7v5a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19v-5zm3-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m0-9a5 5 0 0 1 4.9 4H20a2 2 0 0 1 2 2v3h-7.17a3.001 3.001 0 0 0-5.66 0H2V9a2 2 0 0 1 2-2h3.1A5 5 0 0 1 12 3m0 2a3 3 0 0 0-2.762 1.828L9.17 7h5.658A3 3 0 0 0 12 5"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Briefcase2Fill'
/**
 * MingCute Icon: Briefcase 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Briefcase2Fill = Icon
