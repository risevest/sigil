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
          d="M8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4.103 11.181A2 2 0 0 1 6.095 9h3.81a2 2 0 0 1 1.992 2.181l-.901 9.91A1 1 0 0 1 10 22H6a1 1 0 0 1-.996-.91zM14.82 9a2 2 0 0 0-1.961 1.608l-.84 4.196A1 1 0 0 0 13 16v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0 .98-1.196l-.838-4.196A2 2 0 0 0 17.18 9z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'RestAreaFill'

/**
 * MingCute Icon: Rest Area Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RestAreaFill = memo(Icon)
