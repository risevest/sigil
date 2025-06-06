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
          d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-9.5 9a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L7 15.5A1.5 1.5 0 0 1 8.5 14m7 0a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L14 15.5a1.5 1.5 0 0 1 1.5-1.5M12 10.5a1.5 1.5 0 0 1 1.493 1.356l.007.154a1.5 1.5 0 0 1-2.993.144L10.5 12a1.5 1.5 0 0 1 1.5-1.5M8.5 7a1.5 1.5 0 0 1 1.493 1.356L10 8.51a1.5 1.5 0 0 1-2.993.144L7 8.5A1.5 1.5 0 0 1 8.5 7m7 0a1.5 1.5 0 0 1 1.493 1.356L17 8.51a1.5 1.5 0 0 1-2.993.144L14 8.5A1.5 1.5 0 0 1 15.5 7"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RandomLine'

/**
 * MingCute Icon: Random Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RandomLine = memo(Icon)
