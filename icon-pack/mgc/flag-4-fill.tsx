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
          d="M4 7V4.982c0-.98.554-1.877 1.431-2.316l.284-.142a6.78 6.78 0 0 1 6.52.25 4.78 4.78 0 0 0 3.97.437l3.289-1.096a1.1 1.1 0 0 1 1.391 1.391l-1.82 5.463 1.824 4.561a1.1 1.1 0 0 1-.673 1.452l-3.378 1.126a6.78 6.78 0 0 1-5.632-.618 4.78 4.78 0 0 0-4.597-.177L6 15.618V21a1 1 0 1 1-2 0v-6z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Flag4Fill'

/**
 * MingCute Icon: Flag 4 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Flag4Fill = memo(Icon)
