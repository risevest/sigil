import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M12 2v6.5a1.5 1.5 0 0 0 1.5 1.5H20v5.757l-1.293-1.293a1 1 0 1 0-1.414 1.415L18.414 17H14a1 1 0 1 0 0 2h4.414l-1.121 1.121a1 1 0 0 0 1.414 1.415l1.276-1.277A2 2 0 0 1 18 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 13.757 1.535 1.536a1 1 0 0 1 0 1.414L20 20.243zM14 2.043a2 2 0 0 1 1 .543L19.414 7a2 2 0 0 1 .543 1H14z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'FileExportFill'
/**
 * MingCute Icon: File Export Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FileExportFill = Icon
