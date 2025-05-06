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
          d="M21 12a1 1 0 0 1 1 1v6a1 1 0 0 1-1.911.412 4 4 0 1 1 0-6.824A1 1 0 0 1 21 12M8 4c.732 0 1.381.473 1.605 1.17l4.347 13.524a1 1 0 0 1-1.904.612L10.664 15H5.336l-1.384 4.306a1 1 0 0 1-1.904-.612L6.395 5.17A1.686 1.686 0 0 1 8 4m10 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M8 6.712 5.979 13h4.042z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FontSizeLine'

/**
 * MingCute Icon: Font Size Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FontSizeLine = memo(Icon)
