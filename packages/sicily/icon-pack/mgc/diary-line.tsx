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
          d="M18 2a2 2 0 0 1 1.995 1.85L20 4v16a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20v-1a1 1 0 0 1-.117-1.993L4 17v-2a1 1 0 0 1-.117-1.993L4 13v-2a1 1 0 0 1-.117-1.993L4 9V7a1 1 0 0 1-.117-1.993L4 5V4a2 2 0 0 1 1.85-1.995L6 2zm0 2H6v16h12zm-2.5 2a1.5 1.5 0 0 1 1.493 1.356L17 7.5v2a1.5 1.5 0 0 1-1.356 1.493L15.5 11h-7a1.5 1.5 0 0 1-1.493-1.356L7 9.5v-2a1.5 1.5 0 0 1 1.356-1.493L8.5 6zM15 8H9v1h6z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'DiaryLine'
/**
 * MingCute Icon: Diary Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DiaryLine = Icon
