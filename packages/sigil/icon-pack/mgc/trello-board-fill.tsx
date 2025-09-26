import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h24v24H0z" />
        <Path
          fill={color}
          d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.5 6h-2a1.5 1.5 0 0 0-1.493 1.356L6 7.5v8a1.5 1.5 0 0 0 1.356 1.493L7.5 17h2a1.5 1.5 0 0 0 1.493-1.356L11 15.5v-8a1.5 1.5 0 0 0-1.356-1.493zm7 0h-2A1.5 1.5 0 0 0 13 7.5v3a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 6"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TrelloBoardFill'

/**
 * MingCute Icon: Trello Board Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TrelloBoardFill = memo(Icon)
