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
          d="M19.042 3.658a1 1 0 0 1 1.341 1.174l-.04.126-4.084 10.189a2 2 0 0 1-.947 1.037l-.165.075-10.19 4.084a1 1 0 0 1-1.34-1.175l.04-.126L7.742 8.854a2 2 0 0 1 .947-1.038l.165-.075zm-9.85 6.95-2.808 7.008 7.009-2.809zm8.424-4.224-7.009 2.809 4.2 4.2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Compass3Line'

/**
 * MingCute Icon: Compass 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Compass3Line = memo(Icon)
