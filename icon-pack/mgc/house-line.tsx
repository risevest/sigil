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
          d="M17.974 3.775a1 1 0 0 1-.75 1.2L15 5.487V10h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a1 1 0 0 1-.225-1.974l13-3a1 1 0 0 1 1.2.75M19 12h-9v7h2v-3a2 2 0 0 1 1.85-1.995L14 14h1a2 2 0 0 1 1.995 1.85L17 16v3h2zm-4 4h-1v3h1zM8 7.103l-2 .462V19h2zm5-1.154-3 .693V10h3z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HouseLine'

/**
 * MingCute Icon: House Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HouseLine = memo(Icon)
