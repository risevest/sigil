import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m14.136 3-1.877 1.877a3 3 0 0 0-.137 4.098l.135.144 2.12 2.122a3.001 3.001 0 0 0 3.448.573L18 11.72V19h2a1 1 0 0 1 .117 1.993L20 21H4a1 1 0 0 1-.117-1.993L4 19V5a2 2 0 0 1 1.85-1.995L6 3zM13.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m2.293-8.828a1 1 0 0 1 1.497 1.32l-.083.094-.413.412H20a1 1 0 0 1 .116 1.994L20 7.998h-3.21l.416.417a1 1 0 0 1-1.32 1.496l-.095-.083-2.12-2.123a1 1 0 0 1-.082-1.32l.083-.094 2.12-2.12Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'EnterDoorFill'

/**
 * MingCute Icon: Enter Door Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const EnterDoorFill = memo(Icon)
