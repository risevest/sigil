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
          d="M12 4a8 8 0 0 0-5 14.245V13a1 1 0 1 1 2 0v6.419c.926.375 1.94.581 3 .581s2.074-.206 3-.581V13a1 1 0 1 1 2 0v5.245A8 8 0 0 0 12 4m5 16.662A9.995 9.995 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.996 9.996 0 0 0 5 8.662V21a1 1 0 0 0 1.867.5c.985.324 2.039.5 3.133.5a9.992 9.992 0 0 0 3.133-.5A1 1 0 0 0 17 21zM6 9a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m7 0a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SobLine'

/**
 * MingCute Icon: Sob Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SobLine = memo(Icon)
