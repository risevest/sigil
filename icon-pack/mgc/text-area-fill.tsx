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
          d="M7 3a1 1 0 0 1 1 1h8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1v8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1V8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm12 15h-1v1h1zM6 18H5v1h1zm6-11a1.71 1.71 0 0 0-1.556 1.002l-.054.133-2.332 6.529a1 1 0 0 0 1.838.78l.046-.108.477-1.336h3.162l.477 1.336a1 1 0 0 0 1.917-.56l-.033-.112-2.332-6.53A1.71 1.71 0 0 0 12 7m0 2.573L12.867 12h-1.734zM6 5H5v1h1zm13 0h-1v1h1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TextAreaFill'

/**
 * MingCute Icon: Text Area Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextAreaFill = memo(Icon)
