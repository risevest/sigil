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
          d="M2.278 8.994a1.1 1.1 0 0 1 0-1.988l9.08-4.294a1.5 1.5 0 0 1 1.283 0l9.08 4.294c.734.346.827 1.302.279 1.803V13a1 1 0 1 1-2 0V9.81l-1 .473V14a7 7 0 1 1-14 0v-3.719zM17 9h.031l2.115-1L12 4.62 4.854 8l2.115 1H7v.015l5 2.364 5-2.364zm-5.641 4.288L7 11.228V14a5 5 0 0 0 10 0v-2.773l-4.359 2.061a1.5 1.5 0 0 1-1.282 0"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'MortarboardLine'
/**
 * MingCute Icon: Mortarboard Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MortarboardLine = Icon
