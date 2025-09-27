import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M11 3a2 2 0 0 1 1.995 1.85L13 5v6a2 2 0 0 1-1.85 1.995L11 13H5a2 2 0 0 1-1.995-1.85L3 11V5a2 2 0 0 1 1.85-1.995L5 3zm0 2H5v6h6zM9.5 6a.5.5 0 0 1 .492.41L10 6.5v3a.5.5 0 0 1-.41.492L9.5 10h-3a.5.5 0 0 1-.492-.41L6 9.5v-3a.5.5 0 0 1 .41-.492L6.5 6zM21 5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zM3 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm16-2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2zm-4-3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-2 4a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Qrcode2Fill'
/**
 * MingCute Icon: Qrcode 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Qrcode2Fill = Icon
