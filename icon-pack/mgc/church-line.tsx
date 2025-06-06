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
          d="M12 2a1 1 0 0 1 .993.883L13 3v1h1a1 1 0 0 1 .117 1.993L14 6h-1v1.5l3.6 2.7a1 1 0 0 1 .393.683L17 11v1.465l2.555 1.703a1 1 0 0 1 .437.708L20 15v5a1 1 0 0 1 .117 1.993L20 22H4a1 1 0 0 1-.117-1.993L4 20v-5a1 1 0 0 1 .346-.757l.1-.075L7 12.465V11a1 1 0 0 1 .31-.724l.09-.076L11 7.5V6h-1a1 1 0 0 1-.117-1.993L10 4h1V3a1 1 0 0 1 1-1m0 7.25L9 11.5V13a1 1 0 0 1-.346.757l-.1.075L6 15.535V20h3v-3a3 3 0 0 1 5.995-.176L15 17v3h3v-4.465l-2.555-1.703a1 1 0 0 1-.437-.708L15 13v-1.5zM12 16a1 1 0 0 0-.993.883L11 17v3h2v-3l-.007-.117A1 1 0 0 0 12 16"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChurchLine'

/**
 * MingCute Icon: Church Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChurchLine = memo(Icon)
