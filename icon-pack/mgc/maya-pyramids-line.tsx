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
          d="M14 5a2 2 0 0 1 1.995 1.85L16 7v2.697L21.535 18H22a1 1 0 0 1 .117 1.993L22 20H2a1 1 0 0 1-.117-1.993L2 18h.465L8 9.697V7a2 2 0 0 1 1.85-1.995L10 5zm-.45 10h-3.1l-.333 3h3.766zm-4.798-2.826L4.87 18h3.236zm6.496 0L15.895 18h3.236zM13.105 11h-2.21l-.222 2h2.654zM14 7h-4v2h4z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MayaPyramidsLine'

/**
 * MingCute Icon: Maya Pyramids Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MayaPyramidsLine = memo(Icon)
