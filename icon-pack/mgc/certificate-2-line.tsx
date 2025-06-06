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
          d="M18 10a4 4 0 0 1 3 6.646v4.192a1.1 1.1 0 0 1-1.592.984L18 21.118l-1.408.704A1.1 1.1 0 0 1 15 20.838v-4.192A4 4 0 0 1 18 10m2-6a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h8a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-1 13.874a4.01 4.01 0 0 1-2 0v1.508l.553-.276a1 1 0 0 1 .894 0l.553.276zM18 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 1a1 1 0 0 1 .117 1.993L9 15H7a1 1 0 0 1-.117-1.993L7 13zm4-4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Certificate2Line'

/**
 * MingCute Icon: Certificate 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Certificate2Line = memo(Icon)
