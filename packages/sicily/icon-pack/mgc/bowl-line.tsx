import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M20.154 5C21.174 5 22 5.827 22 6.846V9a9 9 0 0 1-6 8.488V18.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 18.5v-1.012A9 9 0 0 1 2 9V6.846C2 5.826 2.827 5 3.846 5zM20 9V7H4v2a7 7 0 0 0 7 7h2a7 7 0 0 0 7-7"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'BowlLine'
/**
 * MingCute Icon: Bowl Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BowlLine = Icon
