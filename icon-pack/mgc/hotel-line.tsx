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
          d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1h1a1 1 0 1 1 0 2v11a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2V8a1 1 0 0 1 0-2h1zm12 0v1H7V5zm1 3v11h-3.5v-2.5a2.5 2.5 0 0 0-5 0V19H6V8zm-6 8a.5.5 0 0 1 .5.5V19h-1v-2.5a.5.5 0 0 1 .5-.5m-4-3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m8 0a1 1 0 0 1 .993.883L17 14v1a1 1 0 0 1-1.993.117L15 15v-1a1 1 0 0 1 1-1M8 9a1 1 0 0 1 .993.883L9 10v1a1 1 0 0 1-1.993.117L7 11v-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 .993.883L13 10v1a1 1 0 0 1-1.993.117L11 11v-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HotelLine'

/**
 * MingCute Icon: Hotel Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HotelLine = memo(Icon)
