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
          d="M14.482 5.86C15.848 4.22 17.605 3 20 3a1 1 0 1 1 0 2c-1.605 0-2.848.78-3.982 2.14-1.16 1.393-2.11 3.279-3.124 5.307l-.031.064c-.977 1.953-2.02 4.04-3.345 5.63C8.152 19.78 6.395 21 4 21a1 1 0 1 1 0-2c1.605 0 2.848-.78 3.982-2.14 1.16-1.393 2.11-3.279 3.124-5.307l.031-.064c.977-1.953 2.02-4.04 3.345-5.63"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EasyInOutLine'

/**
 * MingCute Icon: Easy In Out Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EasyInOutLine = memo(Icon)
