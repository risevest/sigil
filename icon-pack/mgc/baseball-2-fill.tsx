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
          d="m10.825 4.835 7.773 10.453 1.867 1.333a1.5 1.5 0 0 1 .189 2.282l-1.994 1.993a1.5 1.5 0 0 1-2.281-.189l-1.334-1.867-10.453-7.772a4.455 4.455 0 1 1 6.233-6.233m5.143 10.268L14.86 16.21l1.505 1.118a.999.999 0 0 1 .152.14l.064.081 1.082 1.515 1.16-1.16-1.515-1.081a.997.997 0 0 1-.155-.137l-.066-.08zm-.26-10.467a3 3 0 1 1 4.242 4.243 3 3 0 0 1-4.243-4.243"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Baseball2Fill'

/**
 * MingCute Icon: Baseball 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Baseball2Fill = memo(Icon)
