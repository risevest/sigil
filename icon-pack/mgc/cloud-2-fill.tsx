import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M9.5 4a7.5 7.5 0 1 0 0 15H17a5 5 0 1 0-.42-9.982 5 5 0 0 0-3.912 2.483 1 1 0 0 1-1.73-1.002 7.01 7.01 0 0 1 4.665-3.36A7.489 7.489 0 0 0 9.5 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Cloud2Fill'

/**
 * MingCute Icon: Cloud 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Cloud2Fill = memo(Icon)
