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
          d="M17.5 12a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m.5-9a3 3 0 0 1 3 3v4.437a7 7 0 0 0-10.232 7.988L8 20.5c-.824.618-2 .03-2-1V18H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm-2.828 12.586a2.5 2.5 0 0 0 3.241 3.241zM17.5 14c-.322 0-.63.061-.914.172l3.242 3.242A2.5 2.5 0 0 0 17.5 14M9 12H3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2M7 7H5a1 1 0 0 0-.117 1.993L5 9h2a1 1 0 0 0 .117-1.993zm12 0h-8a1 1 0 0 0-.117 1.993L11 9h8a1 1 0 0 0 .117-1.993z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'DanmakuOffFill'

/**
 * MingCute Icon: Danmaku Off Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const DanmakuOffFill = memo(Icon)
