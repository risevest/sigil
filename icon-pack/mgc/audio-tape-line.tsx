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
          d="M19 4a3 3 0 0 1 2.995 2.824L22 7v10a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7a3 3 0 0 1 2.824-2.995L5 4zM6.22 6H5a1 1 0 0 0-.993.883L4 7v10a1 1 0 0 0 .883.993L5 18h14a1 1 0 0 0 .993-.883L20 17V7a1 1 0 0 0-.883-.993L19 6h-1.22l-.81 3.243a1 1 0 0 1-.857.75L16 10H8a1 1 0 0 1-.936-.649l-.034-.108zm2.28 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m.22-6H8.28l.5 2h6.44z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'AudioTapeLine'

/**
 * MingCute Icon: Audio Tape Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const AudioTapeLine = memo(Icon)
