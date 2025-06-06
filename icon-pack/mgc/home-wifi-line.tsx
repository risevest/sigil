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
          d="m13.2 2.65 7 5.25a2 2 0 0 1 .8 1.6V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 .8-1.6l7-5.25a2 2 0 0 1 2.4 0M12 4.25 5 9.5V19h14V9.5zM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-3c1.008 0 1.931.374 2.634.99a1 1 0 1 1-1.317 1.505A1.988 1.988 0 0 0 12 14c-.505 0-.964.186-1.317.495a1 1 0 1 1-1.317-1.505A3.988 3.988 0 0 1 12 12m0-3c1.765 0 3.38.654 4.61 1.732a1 1 0 0 1-1.318 1.505A4.977 4.977 0 0 0 12 11a4.977 4.977 0 0 0-3.292 1.237 1 1 0 0 1-1.318-1.505A6.977 6.977 0 0 1 12 9"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HomeWifiLine'

/**
 * MingCute Icon: Home Wifi Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HomeWifiLine = memo(Icon)
