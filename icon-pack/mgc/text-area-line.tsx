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
          d="M7 3a1 1 0 0 1 .993.883L8 4h8a1 1 0 0 1 .883-.993L17 3h3a1 1 0 0 1 .993.883L21 4v3a1 1 0 0 1-.883.993L20 8v8a1 1 0 0 1 .993.883L21 17v3a1 1 0 0 1-.883.993L20 21h-3a1 1 0 0 1-.993-.883L16 20H8a1 1 0 0 1-.883.993L7 21H4a1 1 0 0 1-.993-.883L3 20v-3a1 1 0 0 1 .883-.993L4 16V8a1 1 0 0 1-.993-.883L3 7V4a1 1 0 0 1 .883-.993L4 3zM6 18H5v1h1zm13 0h-1v1h1zM16 6H8v1a1 1 0 0 1-1 1H6v8h1a1 1 0 0 1 1 1v1h8v-1a1 1 0 0 1 1-1h1V8h-1a1 1 0 0 1-1-1zm-4 1a1.71 1.71 0 0 1 1.61 1.135l2.332 6.529a1 1 0 1 1-1.884.672L13.581 14h-3.162l-.477 1.336a1 1 0 0 1-1.884-.672l2.332-6.53A1.71 1.71 0 0 1 12 7m0 2.573L11.133 12h1.734zM6 5H5v1h1zm13 0h-1v1h1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TextAreaLine'

/**
 * MingCute Icon: Text Area Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TextAreaLine = memo(Icon)
