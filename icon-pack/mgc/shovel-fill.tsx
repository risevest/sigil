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
          d="M16.243 3.515a1 1 0 0 1 1.414 0l1.41 1.41.004.004.005.004 1.41 1.41a1 1 0 0 1-1.415 1.414l-.707-.707-4.95 4.95 1.414 1.414a2 2 0 0 1 0 2.829l-2.494 2.494a5 5 0 0 1-5.117 1.208l-.949-.316a3 3 0 0 1-1.897-1.898l-.316-.948a5 5 0 0 1 1.208-5.117l2.494-2.495a2 2 0 0 1 2.829 0L12 10.586l4.95-4.95-.707-.707a1 1 0 0 1 0-1.414"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShovelFill'

/**
 * MingCute Icon: Shovel Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShovelFill = memo(Icon)
