import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M5 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8.414l9.95 9.95a1 1 0 0 1-1.414 1.414L7 8.414V14a1 1 0 1 1-2 0V6Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ArrowLeftUpLine'

/**
 * MingCute Icon: Arrow Left Up Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowLeftUpLine = memo(Icon)
