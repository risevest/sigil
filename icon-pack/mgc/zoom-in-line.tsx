import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.5 2a8.5 8.5 0 0 1 6.873 13.502l-.197.26 3.652 3.652a1 1 0 0 1-1.32 1.498l-.094-.084-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m0 2a1 1 0 0 1 .993.883L11.5 7v2.5H14a1 1 0 0 1 .117 1.993L14 11.5h-2.5V14a1 1 0 0 1-1.993.117L9.5 14v-2.5H7a1 1 0 0 1-.117-1.993L7 9.5h2.5V7a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ZoomInLine'

/**
 * MingCute Icon: Zoom In Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ZoomInLine = memo(Icon)
