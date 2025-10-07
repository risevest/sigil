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
          d="M15.844 6.463a1 1 0 0 0-1.688 0l-2.636 4.152-1.73-2.228a1 1 0 0 0-1.58 0l-7 9A1 1 0 0 0 2 19h20a1 1 0 0 0 .844-1.537zM16.489 17h3.69l-3.93-6.174-.688 4.815a1 1 0 0 1-.027.13zm-2.122-7.137-1.542 2.427 1.01 1.297zm-3.496 3.172a1 1 0 0 1-.06-.07l-.974-1.255L8.326 17h5.63zM6.246 17l1.278-4.473L4.044 17z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'EgyptianPyramidsLine'
/**
 * MingCute Icon: Egyptian Pyramids Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EgyptianPyramidsLine = Icon
