import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5.5 4A1.5 1.5 0 0 1 7 2.5h3c.744 0 1.433.232 2 .627a3.484 3.484 0 0 1 2-.627h3a1.5 1.5 0 0 1 0 3h-3a.5.5 0 0 0-.5.5v4.5H15a1.5 1.5 0 0 1 0 3h-1.5V18a.5.5 0 0 0 .5.5h3a1.5 1.5 0 0 1 0 3h-3a3.484 3.484 0 0 1-2-.627 3.484 3.484 0 0 1-2 .627H7a1.5 1.5 0 0 1 0-3h3a.5.5 0 0 0 .5-.5v-4.5H9a1.5 1.5 0 0 1 0-3h1.5V6a.5.5 0 0 0-.5-.5H7A1.5 1.5 0 0 1 5.5 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CursorTextFill'

/**
 * MingCute Icon: Cursor Text Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CursorTextFill = memo(Icon)
