import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7 2a2 2 0 0 1 2 2h5.268A2 2 0 0 1 18 5a2 2 0 0 1-3.732 1h-3.369A6.98 6.98 0 0 1 13 11v2c0 1.722.87 3.24 2.194 4.14A2 2 0 0 1 17 16h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2H9.732a2 2 0 1 1 0-2h3.369A6.979 6.979 0 0 1 11 13v-2c0-1.721-.87-3.24-2.194-4.14A2 2 0 0 1 7 8H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm12 16h-2v2h2zM7 4H5v2h2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'VectorBezier2Line'

/**
 * MingCute Icon: Vector Bezier 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VectorBezier2Line = memo(Icon)
