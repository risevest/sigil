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
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-5 2H5v14h9zm5 0h-3v14h3zM9.793 9.172a1 1 0 0 1 1.498 1.32l-.084.094L9.793 12l1.414 1.414a1 1 0 0 1-1.32 1.498l-.094-.084-2.121-2.12a1 1 0 0 1-.083-1.32l.083-.095z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LayoutRightbarOpenLine'

/**
 * MingCute Icon: Layout Rightbar Open Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LayoutRightbarOpenLine = memo(Icon)
