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
          d="m12 13.414 2.947 2.947-9.697 5.598a1.49 1.49 0 0 1-1.568-.041l-.108-.078zm-9-9L10.586 12 3 19.586zm13.74 4.26 3.51 2.027c1 .577 1 2.02 0 2.598l-3.51 2.027L13.414 12zM5.25 2.041l9.697 5.598L12 10.586 3.574 2.159a1.49 1.49 0 0 1 1.676-.118"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'GooglePlayFill'
/**
 * MingCute Icon: Google Play Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GooglePlayFill = Icon
