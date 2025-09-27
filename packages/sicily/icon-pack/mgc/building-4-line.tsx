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
          d="M10.753 2.197a2 2 0 0 0-1.662.182l-4.12 2.472A2 2 0 0 0 4 6.566V20H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1V6.72a2 2 0 0 0-1.367-1.896zM18 20V6.72l-7-2.332V20zM9 4.766l-3 1.8V20h3z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Building4Line'
/**
 * MingCute Icon: Building 4 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Building4Line = Icon
