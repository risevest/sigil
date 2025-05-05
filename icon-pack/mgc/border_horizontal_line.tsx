import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M5 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2m9 9a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0M4 11a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BorderHorizontalLine'

/**
 * MingCute Icon: Border_horizontal_line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BorderHorizontalLine = memo(Icon)
