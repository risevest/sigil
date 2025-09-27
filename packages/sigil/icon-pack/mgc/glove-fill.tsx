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
          d="M10 2a6 6 0 0 0-6 6v4.46a9 9 0 0 0 .644 3.342L5.123 17h11.123l.047-.05 3.242-3.243A3 3 0 0 0 16 8.94V8a6 6 0 0 0-6-6m6 17H5.923l.005.014c.076.19.085.4.082.61l-.005.156q-.004.112-.005.22a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'GloveFill'
/**
 * MingCute Icon: Glove Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GloveFill = Icon
