import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.772 2.688a2 2 0 0 1 2.317-.099l.139.1 8.384 6.52c.721.561.37 1.692-.499 1.785l-.116.006H20v8a2 2 0 0 1-1.85 1.995L18 21H6a2 2 0 0 1-1.994-1.85L4 19v-8h-.997C2.09 11 1.671 9.892 2.3 9.285l.088-.076zM12 4.267 5.625 9.225c.229.185.375.468.375.785V19h3v-5a3 3 0 1 1 6 0v5h3v-8.99c0-.317.146-.6.375-.785zM12 13a1 1 0 0 0-1 1v5h2v-5a1 1 0 0 0-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Home3Line'

/**
 * MingCute Icon: Home 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Home3Line = memo(Icon)
