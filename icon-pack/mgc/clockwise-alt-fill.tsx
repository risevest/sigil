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
          d="M14 8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm-.94-4.342a1 1 0 0 1 1.282-.598c2.397.872 4.082 2.578 5.232 4.272l.22.332.206.331V7a1 1 0 0 1 1.993-.117L22 7v5.056c0 .683-.517.975-.84 1.067l-.132.029c-.285.04-1.002-.026-1.233-.76l-.132-.402c-.321-.934-.875-2.257-1.743-3.534-1.001-1.474-2.383-2.833-4.262-3.516a1 1 0 0 1-.598-1.282"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ClockwiseAltFill'

/**
 * MingCute Icon: Clockwise Alt Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ClockwiseAltFill = memo(Icon)
