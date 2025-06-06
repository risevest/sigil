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
          d="M17.883 2a2 2 0 0 1 1.988 2.22l-1.778 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.777-16A2 2 0 0 1 6.117 2zM13 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m7.883-8H6.117l.425 3.823.187-.033c.26-.044.561-.08.9-.1 1.128-.067 2.663.057 4.43.753l.335.138c1.492.64 2.765.772 3.681.741l1.224-.068z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'GlassCupFill'

/**
 * MingCute Icon: Glass Cup Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const GlassCupFill = memo(Icon)
