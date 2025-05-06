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
          d="M19.768 2.693c.956-.344 1.88.58 1.536 1.535l-6.04 16.777c-.375 1.043-1.842 1.063-2.246.03l-2.829-7.228-7.228-2.828c-1.032-.404-1.012-1.871.03-2.247z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'NavigationFill'

/**
 * MingCute Icon: Navigation Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const NavigationFill = memo(Icon)
