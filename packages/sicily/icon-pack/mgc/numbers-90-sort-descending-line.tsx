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
          d="M5 6a3 3 0 0 1 5.995-.176L11 6.01c0 .408-.039.799-.107 1.171-.264 1.433-.964 2.58-1.57 3.352-.307.39-.598.694-.815.904-.124.12-.25.238-.385.345a1 1 0 0 1-1.34-1.479L7.118 10l.224-.228A7 7 0 0 0 7.971 9 3 3 0 0 1 5 6m3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0-2 0v12.414l-1.121-1.121a1 1 0 0 0-1.415 1.414l2.829 2.828a1 1 0 0 0 1.414 0l2.828-2.828a1 1 0 1 0-1.414-1.414L18 17.413zM8 13a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0v-2a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Numbers90SortDescendingLine'
/**
 * MingCute Icon: Numbers 90 Sort Descending Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Numbers90SortDescendingLine = Icon
