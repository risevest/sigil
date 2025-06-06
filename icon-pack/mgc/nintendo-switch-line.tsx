import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10 3a1 1 0 0 1 .993.883L11 4v16a1 1 0 0 1-.883.993L10 21H6a4 4 0 0 1-3.995-3.8L2 17V7a4 4 0 0 1 3.8-3.995L6 3zM9 5H6a2 2 0 0 0-1.995 1.85L4 7v10a2 2 0 0 0 1.85 1.995L6 19h3zM6.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 3a4 4 0 0 1 3.995 3.8L22 7v10a4 4 0 0 1-3.8 3.995L18 21h-4a1 1 0 0 1-.993-.883L13 20V4a1 1 0 0 1 .883-.993L14 3zm0 2h-3v14h3a2 2 0 0 0 1.995-1.85L20 17V7a2 2 0 0 0-1.85-1.995zm-.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NintendoSwitchLine'

/**
 * MingCute Icon: Nintendo Switch Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NintendoSwitchLine = memo(Icon)
