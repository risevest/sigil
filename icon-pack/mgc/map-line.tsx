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
          d="M8.526 3.104a1.5 1.5 0 0 1 .948 0L15 4.946l5.289-1.763A1.3 1.3 0 0 1 22 4.416V17.64a1.5 1.5 0 0 1-1.026 1.423l-5.5 1.833c-.308.103-.64.103-.948 0L9 19.054l-5.289 1.763A1.3 1.3 0 0 1 2 19.584V6.36a1.5 1.5 0 0 1 1.026-1.423zM8 17.28V5.387L4 6.721v11.892l4-1.334Zm2-11.892V17.28l4 1.334V6.72l-4-1.334Zm6 1.334v11.892l4-1.334V5.387l-4 1.334Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MapLine'

/**
 * MingCute Icon: Map Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MapLine = memo(Icon)
