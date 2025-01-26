import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 18.4142L21.1925 22.6067L22.6067 21.1925L2.80769 1.39349L1.39348 2.80771L2.58579 4.00001H2C1.44772 4.00001 1 4.44773 1 5.00001V19C1 19.5523 1.44772 20 2 20H16C16.5523 20 17 19.5523 17 19V18.4142ZM15 16.4142V18H3V6.00001H4.58579L15 16.4142ZM23 18.0397C23 18.2517 22.875 18.4176 22.7083 18.4943L21 16.786V8.84133L17 11.6413V12.786L15 10.786V6.00001H10.214L8.21402 4.00001H16C16.5523 4.00001 17 4.44773 17 5.00001V9.20001L22.2133 5.55073C22.5447 5.31876 23 5.55583 23 5.96034V18.0397Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoOffLine'

/**
 * Remix Icon: Video Off Line
 * @see {@link https://remixicon.com/icon/video-off-line Remix Icon Docs}
 */
export const VideoOffLine = memo(Icon)
