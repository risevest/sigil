import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M10.105 4h3.79l.5 5h-4.79zm-.7 7h5.19l.5 5H13v2h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2v-2H8.905zm7.2 0 .5 5h3.285a1.5 1.5 0 0 0 1.471-1.794L21.22 11zm-.7-7 .5 5h4.415l-.679-3.392A2 2 0 0 0 18.181 4zm-7.81 0H5.82a2 2 0 0 0-1.961 1.608L3.18 9h4.415zm-.7 7H2.78l-.641 3.206A1.5 1.5 0 0 0 3.609 16h3.286z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'SolarPanelFill'
/**
 * MingCute Icon: Solar Panel Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SolarPanelFill = Icon
