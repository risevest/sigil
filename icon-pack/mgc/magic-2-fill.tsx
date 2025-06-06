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
          d="M6.748 8.876A1.5 1.5 0 0 0 8.87 6.755L7.105 4.99a1.5 1.5 0 1 0-2.122 2.12zM7.99 11a1.5 1.5 0 0 1-1.5 1.5H3.994a1.5 1.5 0 0 1 0-3H6.49a1.5 1.5 0 0 1 1.5 1.5m4.772-.354a1.5 1.5 0 1 0-2.122 2.122l8.485 8.485a1.5 1.5 0 0 0 2.122-2.121zm5.232 1.854a1.5 1.5 0 0 0 0-3H15.49a1.5 1.5 0 0 0 0 3zm-8.5 5.5a1.5 1.5 0 0 0 3 0v-2.5a1.5 1.5 0 1 0-3 0zm1.5-10a1.5 1.5 0 0 1-1.5-1.5V4a1.5 1.5 0 0 1 3 0v2.5a1.5 1.5 0 0 1-1.5 1.5m-6.01 9.01a1.5 1.5 0 0 1 0-2.121L6.75 13.12a1.5 1.5 0 1 1 2.122 2.121L7.105 17.01a1.5 1.5 0 0 1-2.121 0m8.131-10.253a1.5 1.5 0 1 0 2.121 2.122l1.768-1.768a1.5 1.5 0 1 0-2.121-2.121z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Magic2Fill'

/**
 * MingCute Icon: Magic 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Magic2Fill = memo(Icon)
