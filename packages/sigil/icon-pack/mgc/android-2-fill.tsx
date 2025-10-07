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
          d="M18.447 4.106a1 1 0 0 1 .447 1.341l-1.174 2.35A9.99 9.99 0 0 1 22 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a9.99 9.99 0 0 1 4.28-8.204L5.106 5.447a1 1 0 1 1 1.788-.894L8.028 6.82A10 10 0 0 1 12 6c1.411 0 2.755.292 3.972.82l1.134-2.267a1 1 0 0 1 1.341-.447M7.5 12a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Android2Fill'
/**
 * MingCute Icon: Android 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Android2Fill = Icon
