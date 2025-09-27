import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.7 3.147a1.5 1.5 0 0 1 2.519-.124l.08.124 8.634 14.955a1.5 1.5 0 0 1-1.168 2.244l-.131.006H3.366a1.5 1.5 0 0 1-1.36-2.134l.061-.116 8.634-14.955Zm1.3 1.75L4.232 18.352h15.536zM12 9a1 1 0 0 1 .801.401l.065.099 3.464 6a1 1 0 0 1-.748 1.493l-.118.007H8.536a1 1 0 0 1-.925-1.38l.059-.12 3.464-6A1 1 0 0 1 12 9m0 3-1.732 3h3.464z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'EmergencyFlashersLine'
/**
 * MingCute Icon: Emergency Flashers Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EmergencyFlashersLine = Icon
