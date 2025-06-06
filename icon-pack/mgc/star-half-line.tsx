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
          d="M11 6.704 9.687 8.959a1.25 1.25 0 0 1-.816.592l-4.492.973 3.063 3.427c.233.262.346.61.311.959l-.463 4.573L11 17.848zm-.33-3.407c.642-1.103 2.33-.647 2.33.629v14.411c0 .495-.293.944-.746 1.144l-5.336 2.351a1.25 1.25 0 0 1-1.747-1.27l.559-5.525-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176 2.545-4.37Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'StarHalfLine'

/**
 * MingCute Icon: Star Half Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const StarHalfLine = memo(Icon)
