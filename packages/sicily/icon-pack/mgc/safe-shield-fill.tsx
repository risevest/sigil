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
          fillRule="nonzero"
          d="m9 9.693 3-1.125 3 1.125v2.335a3 3 0 0 1-1.658 2.683L12 15.382l-1.342-.67A3 3 0 0 1 9 12.027z"
        />
        <path
          fill="currentColor"
          d="M12.702 2.195a2 2 0 0 0-1.404 0l-7 2.625A2 2 0 0 0 3 6.693v5.363a9 9 0 0 0 4.975 8.05l3.354 1.676a1.5 1.5 0 0 0 1.342 0l3.354-1.677A9 9 0 0 0 21 12.055V6.694a2 2 0 0 0-1.298-1.873zm-.175 4.435a1.5 1.5 0 0 0-1.054 0l-3.5 1.312A1.5 1.5 0 0 0 7 9.347v2.68A5 5 0 0 0 9.764 16.5l1.677.838a1.25 1.25 0 0 0 1.118 0l1.677-.838A5 5 0 0 0 17 12.028V9.347a1.5 1.5 0 0 0-.973-1.405z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'SafeShieldFill'
/**
 * MingCute Icon: Safe Shield Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SafeShieldFill = Icon
