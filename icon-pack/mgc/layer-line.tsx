import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.528 1.118a1 1 0 0 1 1.027.05l5.554 3.703A2 2 0 0 1 20 6.535V17a1 1 0 0 1-1.555.832L16 16.202V19a1 1 0 0 1-1.555.832L12 18.202V21a1 1 0 0 1-1.555.832L4.891 18.13A2 2 0 0 1 4 16.465V6a1 1 0 0 1 1.555-.832L8 6.798V4a1 1 0 0 1 1.555-.832L12 4.798V2a1 1 0 0 1 .528-.882M14 6.131l1.11.74A2 2 0 0 1 16 8.535v5.263l2 1.334V6.535L14 3.87v2.26Zm-4 2 1.11.74a2 2 0 0 1 .89 1.664v5.263l2 1.333V8.535L10 5.87zM6 7.87v8.596l4 2.666v-8.596z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'LayerLine'

/**
 * MingCute Icon: Layer Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const LayerLine = memo(Icon)
