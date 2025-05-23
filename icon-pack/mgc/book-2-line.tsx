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
          d="M18 2a2 2 0 0 1 2 2v12.99c0 .168-.038.322-.113.472l-.545 1.09a1 1 0 0 0 0 .895l.543 1.088A1 1 0 0 1 19 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-.592 16H7a1 1 0 0 0-.117 1.993L7 20h10.408a3.001 3.001 0 0 1-.068-1.782zM18 4H7a1 1 0 0 0-.993.883L6 5v11.17c.25-.088.516-.144.791-.163L7 16h11zm-4 3a1 1 0 0 1 .117 1.993L14 9h-4a1 1 0 0 1-.117-1.993L10 7z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Book2Line'

/**
 * MingCute Icon: Book 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Book2Line = memo(Icon)
