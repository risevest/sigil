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
          d="M2.338 4.863A1.25 1.25 0 0 1 3.428 3h6.28c.54 0 1.04.29 1.306.761L13 7.27l1.986-3.509A1.5 1.5 0 0 1 16.291 3h4.281a1.25 1.25 0 0 1 1.09 1.863l-8.573 15.24a1.25 1.25 0 0 1-2.179 0zM4.71 5 12 17.96 19.29 5h-2.707L13 11.33 9.417 5z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'Vip3Line'
/**
 * MingCute Icon: Vip 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Vip3Line = Icon
