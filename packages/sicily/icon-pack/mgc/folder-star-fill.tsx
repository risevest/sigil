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
          d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.5a2 2 0 0 0-2-2h-7.52l-1.399-1.75A2 2 0 0 0 9.52 3zm8.346 7.199a.4.4 0 0 0-.692 0l-.894 1.535-1.737.376a.4.4 0 0 0-.213.658l1.184 1.325-.18 1.768a.4.4 0 0 0 .56.406L12 15.551l1.626.716a.4.4 0 0 0 .56-.406l-.18-1.768 1.185-1.325a.4.4 0 0 0-.214-.658l-1.737-.376z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'FolderStarFill'
/**
 * MingCute Icon: Folder Star Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FolderStarFill = Icon
