import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8 3a1 1 0 0 1 .117 1.993L8 5H7a1 1 0 0 0-.993.883L6 6v4c0 .768-.289 1.47-.764 2 .428.478.704 1.093.755 1.772L6 14v4a1 1 0 0 0 .883.993L7 19h1a1 1 0 0 1 .117 1.993L8 21H7a3 3 0 0 1-2.995-2.824L4 18v-4a1 1 0 0 0-.883-.993L3 13a1 1 0 0 1-.117-1.993L3 11a1 1 0 0 0 .993-.883L4 10V6a3 3 0 0 1 2.824-2.995L7 3zm9 0a3 3 0 0 1 2.995 2.824L20 6v4a1 1 0 0 0 .883.993L21 11a1 1 0 0 1 .117 1.993L21 13a1 1 0 0 0-.993.883L20 14v4a3 3 0 0 1-2.824 2.995L17 21h-1a1 1 0 0 1-.117-1.993L16 19h1a1 1 0 0 0 .993-.883L18 18v-4c0-.768.289-1.47.764-2a2.988 2.988 0 0 1-.755-1.772L18 10V6a1 1 0 0 0-.883-.993L17 5h-1a1 1 0 0 1-.117-1.993L16 3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BracesLine'

/**
 * MingCute Icon: Braces Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BracesLine = memo(Icon)
