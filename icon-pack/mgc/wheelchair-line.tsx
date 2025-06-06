import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M2 3a1 1 0 0 1 1-1h1.165a2 2 0 0 1 1.968 1.642l-.984.18.984-.18L6.562 6h8.612a3 3 0 0 1 2.987 2.728l.404 4.447c.05.035.098.074.142.118L20.414 15H21a1 1 0 1 1 0 2h-1a1 1 0 0 1-.707-.293l-.447-.447.083.918a2.5 2.5 0 1 1-2.002.063L16.723 15h-2.806a6 6 0 1 1-8.55-4.392L4.165 4H3a1 1 0 0 1-1-1m5.297 7.04a5.997 5.997 0 0 1 5.9 2.96h3.344l-.372-4.09a1 1 0 0 0-.995-.91H6.925zM8 12a4.002 4.002 0 0 0 0 8 4 4 0 0 0 0-8m10 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WheelchairLine'

/**
 * MingCute Icon: Wheelchair Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WheelchairLine = memo(Icon)
