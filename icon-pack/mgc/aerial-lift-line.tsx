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
          d="M19.997 2.929a1 1 0 0 1-.926 1.069L13 4.43V7h3.382a2 2 0 0 1 1.789 1.106l2.027 4.055a5 5 0 0 1 .336 3.61l-1.365 4.778A2 2 0 0 1 17.246 22H6.754a2 2 0 0 1-1.923-1.45l-1.365-4.78a5 5 0 0 1 .335-3.609L5.83 8.106A2 2 0 0 1 7.618 7H11V4.574l-5.929.423a1 1 0 1 1-.142-1.994l14-1a1 1 0 0 1 1.068.926M12 9H7.618l-2 4h12.764l-2-4h-4.383Zm-6.664 6c.015.074.033.148.054.221L6.754 20h10.492l1.365-4.779c.02-.073.039-.147.054-.221z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AerialLiftLine'

/**
 * MingCute Icon: Aerial Lift Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AerialLiftLine = memo(Icon)
