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
          d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM7.333 5.667h-.666A1 1 0 0 0 6.55 7.66l.117.007h.666c.161 0 .296.114.327.266L7.667 8v6a1 1 0 0 0 1.993.117L9.667 14V8.667a1 1 0 0 1 1.993-.117l.007.117v4.666c0 .631.159 1.224.44 1.743l.11.19-.097.342a1 1 0 0 1-.842.718l-.12.007h-.491a1 1 0 0 0-.117 1.994l.117.006h.491a3 3 0 0 0 2.68-1.65c.38.17.795.277 1.231.308l.264.009h.334a2.667 2.667 0 0 0 2.661-2.498l.005-.169v-.19a2.477 2.477 0 0 0-2.476-2.476c-.738 0-1.433.233-2.005.639l-.185.141v-3.78a3 3 0 0 0-4.785-2.412 2.324 2.324 0 0 0-1.353-.58zm8.524 8c.263 0 .476.213.476.476v.19a.667.667 0 0 1-.666.667h-.334c-.326 0-.63-.094-.887-.255l.005-.018c.18-.628.753-1.06 1.406-1.06"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CapricornFill'

/**
 * MingCute Icon: Capricorn Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CapricornFill = memo(Icon)
